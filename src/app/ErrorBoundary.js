"use client";

import React, { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Log the error to an error reporting service
    if (hasError) {
      console.error("An error occurred in the error boundary.");
      // You can also send the error to your error tracking system here
    }
  }, [hasError]);

  const reset = () => {
    // Reset the error state
    setHasError(false);
  };

  const handleResetClick = () => {
    // Attempt to recover by trying to re-render the segment
    reset();
  };

  const componentDidCatch = (error, errorInfo) => {
    // Update state to indicate an error occurred
    setHasError(true);
    // You can log the error here
    console.error("Error caught in error boundary:", error, errorInfo);
  };

  return (
    <>
      {hasError ? (
        <div>
          <div>Something went wrong.</div>
          <button onClick={handleResetClick}>Try again</button>
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default ErrorBoundary;
