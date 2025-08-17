import axios from "axios";
import { ApiError } from "../utils/ApiError.js";

function chain(chainID, txHash) {
    switch (chainID) {
        case "1":
            return (`https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${process.env.ETHER_SCAN_API}`)
        case "137":
            return (`https://api.polygonscan.com/api?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${process.env.POLYGON_API}`)
        case "42161":
            return (`https://api.arbiscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${process.env.ARBISCAN_API}`)
        case "10":
            return (`https://api-optimistic.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${process.env.OPTIMISM_API}`)
        case "8453":
            return (`https://api.basescan.org/api?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${process.env.BASE_API}`)
        default:
            throw new ApiError(400, "Unsupported chain ID.")
    }
}

const details = async (txHash, chainID) => {
    try {
        const networkURL = chain(chainID, txHash)
        const { data } = await axios.get(networkURL)
        const tx = data.result;
        if (!tx) throw new ApiError(404, "Transaction Data not found.")
        return {
            from: tx.from,
            to: tx.to,
            blockNumber: parseInt(tx.blockNumber, 16),
            value: Number(BigInt(tx.value)) / 1e18,
        }
    } catch (error) {
        console.error("Fetch error", error);
        if (error instanceof ApiError) throw error;
        throw new ApiError(500, "Failed to fetch transaction details.");
    }
}

export default details;