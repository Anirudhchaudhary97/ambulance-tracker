"use client";
import {
  changeHeight,
  changeWidth,
  changeShape,
  changeBackground,
} from "@/redux/reducerSlices/boxSlice";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const box = () => {
  const dispatch = useDispatch();

  const { height, backgroundColor, width, radius } = useSelector(
    (state) => state.box
  );


  const generateArea = () => {
    return Math.PI * (width/2) ** 2
  }

  return (

    <div className="flex flex-col gap-2 justify-center items-center mt-20">
     
      <div
        style={{
          backgroundColor: backgroundColor,
          height: height,
          width: width,
          borderRadius: radius,
        }}
        className="flex items-center justify-center"
      >
       <h1>hello</h1> 
      </div>
      <div className="mt-5">
        <div className="flex gap-2 mb-4">
        {generateArea()}
          <Button onClick={() => dispatch(changeWidth())} color="primary">+width</Button>
          <Button onClick={() => dispatch(changeHeight())} color="primary">+Height</Button>
          <Button onClick={() => dispatch(changeShape())} color="primary">
            change to circle
          </Button>
        </div>
        <Input
        variant="underlined"
          placeholder="enter background color"
          onChange={(e) => dispatch(changeBackground(e.target.value))}
        />
      </div>
    </div>
  );
};

export default box;
