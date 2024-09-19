"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NotFound: React.FC = () => {
  const router = useRouter();
  const [count, setCount] = useState(3); // Start countdown from 3

  useEffect(() => {
    const countdown = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      } else {
        clearInterval(countdown);
        router.push("/"); // Redirect to the main page
      }
    }, 1000);

    return () => clearInterval(countdown); // Cleanup on unmount
  }, [count, router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Redirecting in {count} seconds...</p>
      <p className="mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to home
      </a>
    </div>
  );
};

export default NotFound;
