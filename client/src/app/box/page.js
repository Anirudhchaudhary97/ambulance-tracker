'use client'
import { changeHeight,changeWidth,changeShape,changeBackground } from '@/redux/reducerSlices/boxSlice'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'



const box = () => {
  const dispatch =useDispatch()
  
    const {height,backgroundColor,width,radius}=useSelector(state=>state.box)

  return (
    <div>
          <div style={{backgroundColor: backgroundColor, height: height, width:width , borderRadius:radius }}>
           hello
        </div>
        <Button onClick={()=>dispatch(changeWidth())}>+width</Button>
        <Button onClick={()=>dispatch(changeHeight())}>+Height</Button>
        <Button onClick={()=>dispatch(changeShape())}>change to circle</Button>
        <Input placeholder='enter color' onChange={(e)=>dispatch(changeBackground(e.target.value))}/>
    </div>
  )
}

export default box
