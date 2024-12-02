import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Cart from "./Cart";


const OnlineDelivery=()=>{
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
        <div>

      
        <div className=" max-w-[1200px] mx-auto">
       <div className="flex my-3 items-center justify-between">
        <div className=" text-[25px] font-bold">Restaurent with online food delivery in Jabalpur</div>
        </div>
        </div>
        <hr className=" my-6 border-[2px] "  />
        <div className=" ml-32">
            <div>
                <div className=" max-w-[1200px] gap-10 flex cursor-pointer mb-4 ">
                    <div className=" p-3 rounded-md shadow  hover:shadow-2xl  ">Filter</div>
                    <div className=" p-3 rounded-md shadow hover:shadow-2xl">Sort by</div>
                    <div className=" p-3 rounded-md shadow  hover:shadow-2xl">Cost</div>
                    <div className=" p-3 rounded-md shadow  hover:shadow-2xl">Offers and Discounts</div>
                    <div className=" p-3 rounded-md shadow  hover:shadow-2xl">Order Packed</div>
                    <div className=" p-3 rounded-md shadow  hover:shadow-2xl">Chat with Support</div>
                    <div className=" p-3 rounded-md shadow  hover:shadow-2xl">Help Center</div>
                    <div className=" p-3 rounded-md shadow  hover:shadow-2xl">Order Cancellation</div>


                </div>
            </div>

       
       <div className=" grid grid-cols-4 gap-3">
        {
            data.map((d,i)=>{
                return <Cart {...d}/>

            })
        }

       </div>
      </div>
       </div>
        
        </>
    )
}
export default OnlineDelivery