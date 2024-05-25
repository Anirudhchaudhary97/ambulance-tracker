"use client";
import React, { useState } from "react";
import { Input, Select, SelectItem, Button } from "@nextui-org/react";

const Register = () => {
  const [role, setRole] = useState("user");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({ name, email, password, phoneNumber, role });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="text"
              label="FullName"
              placeholder="Enter Your FullName"
              isRequired
              size="lg"
              labelPlacement="outside"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
          <div className="flex w-full flex-wrap md:flex-nowrap">
            <Select label="Register As" labelPlacement="outside" size="lg">
              <SelectItem>User</SelectItem>
              <SelectItem>Driver</SelectItem>
            </Select>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap justify-center items-center mt-4">
            <Button type="submit" size="lg" color="primary">
              Register
            </Button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
