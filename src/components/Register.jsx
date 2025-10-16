import React, { useState } from "react";
import { Box } from "./Box";

export const Register = ({ onBack, onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to the Terms and Conditions");
      return;
    }
    
    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    console.log("Registration form submitted:", formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Welcome to DocRoster, ${formData.name}! Registration successful.`);
    }, 1500);
  };

  const handleSocialSignUp = async (provider) => {
    setIsLoading(true);
    console.log(`Sign up with ${provider}`);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`${provider} registration would be implemented here`);
    }, 1000);
  };

  return (
    <div className="w-full max-w-[393px] min-h-[718px] flex flex-col items-center gap-6 bg-white/30 backdrop-blur-lg rounded-[32px] overflow-hidden mx-auto p-6 shadow-2xl border border-white/20">
      {/* Close/Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 right-6 w-9 h-9 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all z-10"
        aria-label="Go back to login"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a1748" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* User Avatar */}
      <div className="mt-6">
        <Box />
      </div>

      {/* Header */}
      <header className="w-full max-w-[345px] flex-col items-start gap-2 flex">
        <h1 className="w-full font-bold text-[#0a1748] text-[32px] tracking-[0.37px] leading-[38.4px]">
          Register account
        </h1>
        <p className="w-full font-normal text-[#0a1748]/60 text-lg tracking-[-0.50px] leading-[21.6px]">
          Sign up to view and manage specialists
        </p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-[345px] flex-col items-center gap-6 flex">
        {/* Social Sign Up Buttons */}
        <div className="flex-col w-full items-start gap-3 flex">
          <div className="items-start gap-3 w-full flex">
            <button
              type="button"
              onClick={() => handleSocialSignUp("Google")}
              disabled={isLoading}
              className={`flex h-12 items-center justify-center gap-2.5 px-6 py-3 flex-1 bg-black rounded-3xl backdrop-blur-md cursor-pointer transition-all ${
                isLoading 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-800 hover:shadow-lg transform hover:scale-[1.02]'
              }`}
              aria-label="Sign up with Google"
            >
              <div className="relative w-5 h-5 aspect-[1]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <span className="font-semibold text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                Google
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialSignUp("Apple")}
              disabled={isLoading}
              className={`flex h-12 items-center justify-center gap-2.5 px-6 py-3 flex-1 bg-black rounded-3xl backdrop-blur-md cursor-pointer transition-all ${
                isLoading 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-800 hover:shadow-lg transform hover:scale-[1.02]'
              }`}
              aria-label="Sign up with Apple"
            >
              <div className="relative w-5 h-5 aspect-[1]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </div>
              <span className="font-semibold text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                Apple
              </span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[22px] items-center gap-4 px-6 py-0 w-full flex">
          <div className="flex-1 h-px bg-[#0a1748] opacity-20" />
          <div className="opacity-40 font-normal text-[#0a1748] text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
            OR
          </div>
          <div className="flex-1 h-px bg-[#0a1748] opacity-20" />
        </div>

        {/* Registration Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-col w-full items-start gap-3 flex"
        >
          <div className="h-12 items-center gap-3 px-4 py-3 w-full bg-[#0a17480d] rounded-xl flex transition-all focus-within:bg-[#0a174815] focus-within:ring-2 focus-within:ring-[#0a1748]/20">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Person or company name *"
              className="w-full font-medium text-[#0a1748] text-base tracking-[-0.50px] leading-[21.6px] bg-transparent placeholder:text-[#0a1748]/50 focus:outline-none"
              required
              aria-label="Person or company name"
            />
          </div>

          <div className="h-12 items-center gap-3 px-4 py-3 w-full bg-[#0a17480d] rounded-xl flex transition-all focus-within:bg-[#0a174815] focus-within:ring-2 focus-within:ring-[#0a1748]/20">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email used for login *"
              className="w-full font-medium text-[#0a1748] text-base tracking-[-0.50px] leading-[21.6px] bg-transparent placeholder:text-[#0a1748]/50 focus:outline-none"
              required
              aria-label="Email used for login"
            />
          </div>

          <div className="h-12 items-center gap-3 px-4 py-3 w-full bg-[#0a17480d] rounded-xl flex transition-all focus-within:bg-[#0a174815] focus-within:ring-2 focus-within:ring-[#0a1748]/20">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone number (optional)"
              className="w-full font-medium text-[#0a1748] text-base tracking-[-0.50px] leading-[21.6px] bg-transparent placeholder:text-[#0a1748]/50 focus:outline-none"
              aria-label="Phone number (optional)"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`flex w-full items-center justify-center gap-2.5 px-6 py-3 bg-[#0a1748] rounded-3xl border border-solid border-[#0a174866] backdrop-blur-md transition-all ${
              isLoading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#0a1748]/90 hover:border-[#0a1748] hover:shadow-lg transform hover:scale-[1.02]'
            }`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            ) : null}
            <span className="font-semibold text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
              {isLoading ? 'Creating account...' : 'Sign up to DocRoster'}
            </span>
          </button>
        </form>

        {/* Terms Checkbox */}
        <div className="items-center justify-center gap-3 w-full flex">
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="sr-only"
                aria-label="I've read and agree to the Terms and Conditions"
              />
              <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                agreedToTerms 
                  ? 'bg-[#0a1748] border-[#0a1748]' 
                  : 'bg-transparent border-[#0a1748]/30 hover:border-[#0a1748]/50'
              }`}>
                {agreedToTerms && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20,6 9,17 4,12"></polyline>
                  </svg>
                )}
              </div>
            </div>

            <p className="flex items-center text-sm tracking-[-0.41px] leading-[15.4px]">
              <span className="text-[#0a1748] tracking-[-0.06px]">
                I've read and agree to the{" "}
              </span>
              <button
                type="button"
                onClick={() => alert("Terms and Conditions would open here")}
                className="text-[#0a1748] tracking-[-0.06px] underline hover:text-[#0a1748]/80 transition-colors ml-1"
              >
                Terms and Conditions
              </button>
            </p>
          </label>
        </div>
      </main>
    </div>
  );
};
