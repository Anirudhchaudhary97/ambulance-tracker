"use client";
import {
  changeHeight,
  changeWidth,
  changeShape,
  changeBackground,
  changePosition,
} from "@/redux/reducerSlices/boxSlice";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const box = () => {
  const dispatch = useDispatch();

  const { height, backgroundColor, width, radius, right, top } = useSelector(
    (state) => state.box
  );

  // function to generate area of shape
  const generateArea = () => {
    if (radius === "50%") {
      return Math.PI * (width / 2) ** 2;
    } else {
      return width * height;
    }
  };

  const [value,setValue]=useState(0)

  return (
    <div className="flex flex-col gap-2 justify-center items-center mt-28">
      <div
        style={{
          backgroundColor: backgroundColor,
          height: height,
          width: width,
          borderRadius: radius,
          right: right,
          top: top,
          position: "relative",
        }}
        className="flex items-center justify-center "
      >
        <h1>hello</h1>
      </div>
      <div className="mt-28">
        <div className="data-section m-4 flex gap-2">
          <span className=" bg-green-600 p-3 font-bold text-white shadow-md rounded-lg">
            Area of shape :{generateArea()}
          </span>
          <span><Input 
           type="number"
           value={value}
           onChange={(e)=>setValue(e.target.value)}
          variant="flat"
           placeholder="Enter value to shift position"
           size="lg"
           />
           </span>
           
        </div>

        <div className="flex gap-2 mb-4">
            
            <div className=" flex gap-2">
          <Button onClick={() => dispatch(changeWidth())} color="primary">
            +width
          </Button>
          <Button onClick={() => dispatch(changeHeight())} color="primary">
            +Height
          </Button>
          <Button onClick={() => dispatch(changeShape())} color="primary">
            change to circle
          </Button>
          </div>

          <div className="flex gap-2">
          <Button
            onClick={() =>
              dispatch(changePosition({ value:100, alignment: "horizontal" }))
            }
            color="primary"
          >
            shiftLeft 
          </Button>
          <Button
            onClick={() =>
              dispatch(changePosition({ value: -100, alignment: "horizontal" }))
            }
            color="primary"
          >
            shiftRight
          </Button>
          <Button
            onClick={() =>
              dispatch(changePosition({ value: -100, alignment: "vertical" }))
            }
            color="primary"
          >
            shiftTop
          </Button>
          <Button
            onClick={() =>
              dispatch(changePosition({ value: 100, alignment: "vertical" }))
            }
            color="primary"
          >
            shiftBottom
          </Button>
          </div>
        </div>
        <Input
          variant="underlined"
          size="lg"
          placeholder="change background color"
          onChange={(e) => dispatch(changeBackground(e.target.value))}
        />
      </div>
    </div>
  );
};

export default box;
