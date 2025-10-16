import React, { useState } from "react";
import logoImage from "../assets/logo-docroster.png";

export const Auth = ({ onRegister, onLogin, onRecover }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    console.log("Google Sign In clicked");
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Google Sign-In would be implemented here");
    }, 1000);
  };

  const handleAppleSignIn = async () => {
    setIsLoading(true);
    console.log("Apple Sign In clicked");
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Apple Sign-In would be implemented here");
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    
    setIsLoading(true);
    console.log("Sign in to DocRoster clicked", { email, password });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Welcome back! Logged in as ${email}`);
      onLogin(); // Navigate to search page
    }, 1500);
  };

  const handleRegister = () => {
    console.log("Register now clicked");
    onRegister();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-[393px] min-h-[585px] flex flex-col items-center gap-8 bg-white/30 backdrop-blur-lg rounded-[32px] overflow-hidden mx-auto p-6 shadow-2xl border border-white/20">
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

      <div className="w-full flex-col items-center gap-6 flex">
        {/* Social Sign In Buttons */}
        <div className="flex-col w-full items-start gap-3 flex">
          <div className="items-start gap-3 w-full flex">
            <button
              className={`flex h-12 items-center justify-center gap-2.5 px-6 py-3 flex-1 bg-black rounded-3xl backdrop-blur-md cursor-pointer transition-all ${
                isLoading 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-800 hover:shadow-lg transform hover:scale-[1.02]'
              }`}
              onClick={handleGoogleSignIn}
              aria-label="Sign in with Google"
              type="button"
              disabled={isLoading}
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
              className={`flex h-12 items-center justify-center gap-2.5 px-6 py-3 flex-1 bg-black rounded-3xl backdrop-blur-md cursor-pointer transition-all ${
                isLoading 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-800 hover:shadow-lg transform hover:scale-[1.02]'
              }`}
              onClick={handleAppleSignIn}
              aria-label="Sign in with Apple"
              type="button"
              disabled={isLoading}
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

        {/* Email/Password Form */}
        <form
          className="flex-col w-full items-start gap-3 flex"
          onSubmit={handleSubmit}
        >
          <div className="h-12 items-center gap-3 px-4 py-3 w-full bg-[#0a17480d] rounded-xl flex transition-all focus-within:bg-[#0a174815] focus-within:ring-2 focus-within:ring-[#0a1748]/20">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full font-medium text-[#0a1748] text-base tracking-[-0.50px] leading-[21.6px] bg-transparent placeholder:text-[#0a1748]/50 focus:outline-none"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
          </div>

          <div className="h-12 items-center gap-3 px-4 py-3 w-full bg-[#0a17480d] rounded-xl flex transition-all focus-within:bg-[#0a174815] focus-within:ring-2 focus-within:ring-[#0a1748]/20">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 font-medium text-[#0a1748] text-base tracking-[-0.50px] leading-[21.6px] bg-transparent placeholder:text-[#0a1748]/50 focus:outline-none"
              placeholder="Password"
              aria-label="Password"
              required
            />

            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="w-6 h-6 cursor-pointer transition-opacity hover:opacity-70 focus:outline-none focus:opacity-70"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a1748" strokeWidth="2">
                {showPassword ? (
                  <>
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94L17.94 17.94z"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19l-6.84-6.84z"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </>
                ) : (
                  <>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </>
                )}
              </svg>
            </button>
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
              {isLoading ? 'Signing in...' : 'Sign in to DocRoster'}
            </span>
          </button>
        </form>

        {/* Forgot Password Link */}
        <button
          type="button"
          onClick={onRecover}
          className="text-[#0a1748]/70 text-sm hover:text-[#0a1748] transition-colors underline"
        >
          Forgot password?
        </button>

        {/* Register Link */}
        <p className="flex items-center justify-center w-fit font-medium text-sm tracking-[-0.41px] leading-[15.4px] text-center">
          <span className="text-[#0a1748] tracking-[-0.06px]">
            Don't have an account?{" "}
          </span>
          <button
            type="button"
            onClick={handleRegister}
            className="text-[#0a1748] tracking-[-0.06px] underline cursor-pointer transition-colors hover:text-[#0a1748]/80 focus:outline-none focus:text-[#0a1748]/80 ml-1"
          >
            Register now!
          </button>
        </p>
      </div>
    </div>
  );
};