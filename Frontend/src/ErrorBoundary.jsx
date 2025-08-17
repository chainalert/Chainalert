import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error); // Log the error for debugging

  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>We're sorry, an error occurred while processing your request.</p>
      {/* Optionally display error details in development mode */}
      {process.env.NODE_ENV === "development" && (
        <pre>{error.message || error}</pre>
      )}
      {/* Provide a way for the user to navigate back or report the issue */}
      {/* For example: <Link to="/">Go back to homepage</Link> */}
    </div>
  );
}

export default ErrorBoundary;
