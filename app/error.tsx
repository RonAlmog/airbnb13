"use client";
import EmptyState from "@/components/EmptyState";
import { useEffect } from "react";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.log("Error:", error);
    // todo: report to backend
  }, [error]);

  return (
    <EmptyState
      title="Uh Oh..."
      subtitle="Something wrong happened. Please try again."
    />
  );
};

export default ErrorState;
