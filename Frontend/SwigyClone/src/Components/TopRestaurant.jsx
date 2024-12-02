import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import Cart from "./Cart";
const TopRestaurant=()=>{
    const [data,showdata]=useState([])
    const ApiData=async()=>{
        const Fetchdata=await axios.get('http://localhost:5000/top-restaurant-chains')
        showdata(Fetchdata.data)
    }
    useEffect(()=>{
   ApiData()
    },[])
    return(
        <>
        <div className=" max-w-[1200px] mx-auto">
       <div className="flex my-3 items-center justify-between">
        <div className=" text-[25px] font-bold">Top Restaurant chains in Jabalpur </div>
        <div className=" flex">
            <div className=" flex cursor-pointer items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2  "><FaArrowLeft  /></div>
            <div className=" flex  cursor-pointer items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 "><FaArrowRight  /></div>
        </div>
     
       </div>
       <div className=" flex overflow-hidden ">
        {
            data.map((d,i)=>{
                return <Cart {...d}  key={i} />
            })
        }
        
      

       </div>
       </div>
       
        </>
    )
}
export default TopRestaurant