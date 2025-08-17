import { Post } from "../models/post.js";
import { user } from "../models/user.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import details from "../service/getData.js";


const submitReport = asyncHandler(async (req, res) => {
    const { address, chainID, txHash, scamType, comment } = req.body;
    if (!address || !txHash || !scamType || !comment || !chainID) {
        throw new ApiError(400, "Missing required field.")
    }
    if (!/^0x([A-Fa-f0-9]{64})$/.test(txHash)) {
        throw new ApiError(400, "Invalid transaction hash format.");
    }

    const existing = await Post.findOne({ txHash })
    if (existing) {
        throw new ApiError(409, "This Transaction has already been reported.")
    }

    const tx = await details(txHash, chainID)
    if (!tx) {
        throw new ApiError(404, "Transaction not found or invalid txhash.")
    }
    if (tx.from.toLowerCase() !== address.toLowerCase()) {
        throw new ApiError(400, "Receiver address does not match with transaction.")
    }

    const post = await Post.create({
        sender: tx.from,
        receiver: tx.to,
        txHash,
        amount: tx.value.toFixed(6),
        blockID: tx.blockNumber,
        scamType,
        comment
    })

    let profile = await user.findOne({ address: tx.to })

    if (profile) {
        profile.reports.push(post._id);
        profile.reportCount += 1;
        profile.totalRecived += tx.value;
        profile.lastReportedAt = new Date();
        if (!profile.relatedSenders.includes(tx.from)) {
            profile.relatedSenders.push(tx.from)
        }

        await profile.save()
    } else {
        await user.create({
            address: tx.to,
            reports: [post._id],
            reportCount: 1,
            totalRecived: tx.value,
            relatedSenders: [tx.from],
            lastReportedAt: new Date()
        })
    }

    return res.status(201).json({ success: true, post })

})

const getProfile = asyncHandler(async (req, res) => {
    const { address } = req.params
    if (!address) {
        throw new ApiError(400, "Wallet address is required.")
    }
    const profile = await user.findOne({ address: address.toLowerCase() }).populate("reports").lean()
    if (!profile) {
        throw new ApiError(404, "No profile found for this wallet.")
    }

    res.status(200).json({ success: true, profile })
})

export { submitReport, getProfile }