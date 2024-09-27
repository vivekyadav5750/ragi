"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

export default function LoginCard() {
  const [isOtpLogin, setIsOtpLogin] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(true); // Track if OTP has been sent
  const [otp, setOtp] = useState("");
  const [isUserRegistered, setIsUserRegistered] = useState(true); // Simulate if the user is registered or not
  const [step, setStep] = useState(1); // Step 1: Login form, Step 2: OTP, Step 3: Register

  console.log(setStep);

  const handleOtpRequest = () => {
    // Simulate sending OTP
    console.log("Requesting OTP for mobile number", mobileNumber);
    if (mobileNumber === "1234567890") {
      setOtpSent(true);
    } else {
      setIsUserRegistered(false);
    }
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    console.log("logging with ", isOtpLogin ? "OTP" : "Email/Password");
    e.preventDefault();
    if (!isOtpLogin) {
      // Handle email/password login
      // handle email and password :  check if email  are exist in database or not
      // if not exist then "setIsUserRegistered(false)" and show register form
      // if exist then check password is correct or not
      // if correct then login user and redirect to home page
      // if not correct then show error message
      console.log("Logging in with email/password");
    } else {
      // Handle OTP request
      handleOtpRequest();
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering user");
  };

  return (
    <main className="h-[calc(100vh-4rem)] flex justify-center items-center ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{!isUserRegistered ? "Register" : "Login"}</CardTitle>
          <CardDescription>
            {!isUserRegistered ? "Please register your account" : "Welcome back! Please login to your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isUserRegistered ? (

            <form onSubmit={handleLoginSubmit}>
              {step === 1 && (
                <>
                  <div className="grid w-full items-center gap-4">
                    {!isOtpLogin ? (
                      <>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" placeholder="xyz@gmail.com" required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="password">Password</Label>
                          <Input id="password" type="password" placeholder="12345" required />
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="mobile">Mobile Number</Label>
                        <Input
                          id="mobile"
                          type="tel"
                          placeholder="Enter mobile number"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          required
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button variant="link" className="bg-gray-200" type="button" onClick={() => setIsOtpLogin(!isOtpLogin)}>
                      {isOtpLogin ? "Login with Email/Pass" : "Login with OTP"}
                    </Button>
                    <Button type="submit">{isOtpLogin ? "Request OTP" : "Submit"}</Button>
                  </div>
                </>
              )}

              {step === 2 && otpSent && (
                <div className="mt-4">
                  <Label>Enter OTP</Label>
                  <InputOTP maxLength={6} value={otp} onChange={handleOtpChange}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <Button className="mt-4 w-full" onClick={() => console.log("Verifying OTP")}>
                    Verify OTP
                  </Button>
                </div>
              )}
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a password" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
                </div>
              </div>
              <Button className="mt-4 w-full" type="submit">
                Register
              </Button>
            </form>
          )}
        </CardContent>
        {/* <CardFooter>
          <Button className="w-full">{isUserRegistered ? "Login" : "Register"}</Button>
        </CardFooter> */}
      </Card>
    </main>
  );
}
