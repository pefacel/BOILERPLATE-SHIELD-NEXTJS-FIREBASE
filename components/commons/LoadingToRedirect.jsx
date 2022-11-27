import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const LoadingToRedirect = ({ path }) => {
  const [count, setCount] = useState(1);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && router.push(path);
    return () => clearInterval(interval);
  }, [count, path]);

  return (
    <div className="container p-5 text-danger">
      <p>Redirecting you in {count} seconds...</p>
    </div>
  );
};

export default LoadingToRedirect;
