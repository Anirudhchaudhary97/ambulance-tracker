"use client";
import React, { useState } from "react";
import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Register from "../register/page";
import NavBar from "@/components/navBar/NavBar";

import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



const Login = () => {
  const router=useRouter()
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password:""
     
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values)
      LoginUser(values)

    },
  });

  const LoginUser = async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const response = await fetch('http://localhost:8000/login', requestOptions);
       const data= await response.json()
       if(response.status=="200"){
        toast.success(data.msg)
         router.push("/box")
       } else{
        toast.error(data.msg)
       }
      //  alert(data.msg)
  }

  return (
    <>
     <NavBar/>
    <div className="min-h-screen flex items-center justify-around bg-gray-400">
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="text"
              label="Phone Number"
              placeholder="Enter your Number"
              labelPlacement="outside"
              size="lg"
              isRequired
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
            <Input
              type="password"
              label="Password"
              placeholder="create your password"
              labelPlacement="outside"
              size="lg"
              isRequired
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
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
    </>
  );
};

export default Login;
