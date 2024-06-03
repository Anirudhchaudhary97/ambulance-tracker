"use client";
import React, { useState } from "react";
import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import Link from "next/link";

import { useFormik } from "formik";

import * as Yup from 'yup';
 

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string()
    .min(8, 'Too short! must be 8 chars minimum.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      password:"",
      role:""
    },
    validationSchema:SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="text"
              label="FullName"
              placeholder="Enter Your FullName"
              isRequired
              size="lg"
              labelPlacement="outside"
              name="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
             {formik.errors.fullName ? <div className="text-red-600">{formik.errors.fullName}</div> : null}
      
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
             {formik.errors.phoneNumber ? <div className="text-red-600">{formik.errors.phoneNumber}</div> : null}
        
                 <Input
              type="email"
              label="Email"
              placeholder="Enter your Email"
              labelPlacement="outside"
              size="lg"
              isRequired
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
             {formik.errors.email ? <div className="text-red-600">{formik.errors.email}</div> : null}
      
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
             {formik.errors.password ? <div className="text-red-600">{formik.errors.password}</div> : null}
        
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap">
          <Select
              label="Register As"
              labelPlacement="outside"
              size="lg"
              name="role"
               onChange={formik.handleChange}
              value={formik.values.role}
            >
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="driver">Driver</SelectItem>
            </Select>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap justify-center items-center mt-4">
            <Button type="submit" size="lg" color="primary" >
              Register
            </Button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
