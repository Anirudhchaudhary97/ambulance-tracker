"use client";
import React, { useState } from "react";
import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({ name, email, password, phoneNumber, role });
  };

  return (
    <div className="min-h-screen flex items-center justify-around bg-gray-400">
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="text"
              label="Phone Number"
              placeholder="Enter your Number"
              labelPlacement="outside"
              size="lg"
              isRequired
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              type="password"
              label="Password"
              placeholder="create your password"
              labelPlacement="outside"
              size="lg"
              isRequired
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap"></div>
          <div className="flex w-full flex-wrap md:flex-nowrap justify-center items-center mt-4">
            <Button type="submit" size="lg" color="primary">
              Login
            </Button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Do not have an account?{" "}
          <Link href="/register" className="text-blue-600">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
