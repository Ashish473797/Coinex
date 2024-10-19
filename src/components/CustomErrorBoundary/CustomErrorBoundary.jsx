/* eslint-disable react/prop-types */
import { ErrorBoundary } from "react-error-boundary";

export function CustomErrorBoundaryUI({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="alert alert-error">
      <p>Something went wrong:</p>

      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again.</button>
    </div>
  );
}

export default function CustomErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={CustomErrorBoundaryUI}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}