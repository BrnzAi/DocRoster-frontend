import React, { useState } from "react";
import { Btn } from "./Btn";
import { Close } from "./Close";
import logoImage from "../assets/logo-docroster.png";

export const Recover = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRecover = async () => {
    if (!email) {
      alert("Please enter your registered email address");
      return;
    }

    setIsLoading(true);
    console.log("Password recovery requested for:", email);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Password recovery instructions sent to ${email}`);
      onBack && onBack();
    }, 2000);
  };
  return (
    <div className="w-full max-w-[393px] min-h-[374px] flex flex-col items-center gap-8 bg-white/30 backdrop-blur-lg rounded-[32px] overflow-hidden mx-auto p-6 shadow-2xl border border-white/20">
      <Close 
        className="fixed top-6 right-6 z-10" 
        onClick={onBack}
      />
      
      {/* Logo */}
      <div className="mt-6">
        <img
          className="h-32 w-auto max-w-[258px] aspect-[1.61] object-cover transition-transform hover:scale-105"
          alt="DocRoster Logo"
          src={logoImage}
          onError={(e) => {
            e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU4IiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDI1OCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTgiIGhlaWdodD0iMTYwIiBmaWxsPSIjMEExNzQ4IiByeD0iMTYiLz4KPHR5cGUgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjUwJSIgeT0iNTAlIiBkeT0iLjNlbSI+RG9jUm9zdGVyPC90ZXh0Pgo8L3N2Zz4K";
          }}
        />
      </div>

      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#0a1748] mb-2">
          Recover Password
        </h1>
        <p className="text-[#0a1748]/60 text-sm">
          Enter your registered email to receive password recovery instructions
        </p>
      </div>

      {/* Recovery Form */}
      <div className="w-full max-w-[345px] flex-col items-center gap-6 flex">
        <div className="flex-col w-full items-start gap-3 flex">
          <div className="h-12 items-center gap-3 px-4 py-3 w-full bg-[#0a17480d] rounded-xl flex transition-all focus-within:bg-[#0a174815] focus-within:ring-2 focus-within:ring-[#0a1748]/20">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Registered email"
              className="w-full font-medium text-[#0a1748] text-base tracking-[-0.50px] leading-[21.6px] bg-transparent placeholder:text-[#0a1748]/50 focus:outline-none"
              required
              aria-label="Registered email address"
            />
          </div>

          <Btn
            btn="default"
            text="Recover password"
            onClick={handleRecover}
            isLoading={isLoading}
            disabled={!email || isLoading}
            className="w-full"
          />
        </div>

        {/* Back to login link */}
        <button
          onClick={onBack}
          className="text-[#0a1748]/70 text-sm hover:text-[#0a1748] transition-colors underline"
        >
          Back to login
        </button>
      </div>
    </div>
  );
};
