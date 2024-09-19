"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";

const PolicyPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const policyAgreed = localStorage.getItem("policyAgreed");
    if (!policyAgreed) {
      setShowPopup(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("policyAgreed", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 flex items-end justify-center p-2"
      style={{ zIndex: 10 }}
    >
      <div className="pointer-events-auto mb-0 w-full text-center md:mb-4 md:mr-4 md:w-auto">
        <Card>
          <h2 className="mb-2 text-lg font-bold">Our Policy</h2>
          <p className="mb-2">
            Please agree to our{" "}
            <a href="/privacy_policy" className="text-blue-500">
              policy
            </a>
          </p>
          <div onClick={handleAgree}>
            <Button variant="smash">Agree</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PolicyPopup;
