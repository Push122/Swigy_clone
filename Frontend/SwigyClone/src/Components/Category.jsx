import React, { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios"
const Category=()=>{
    const [slide,showslide]=useState(0)
    const [Categories,showcategory]=useState([]);
    const FetchApi=async()=>{
        const response=await axios.get('http://localhost:5000/categories')
        const data1=response.data
        showcategory(data1)
       
    }
    useEffect(()=>{
        FetchApi()
     
    },[])
    const NextSlide=()=>{
        console.log(Categories.length);
        if (Categories.length-8==slide) return false
        console.log(slide+3);  
        showslide(slide+3)
    }
    const PrevSlide=()=>{
        if(slide==0) return false
        showslide(slide-3)
    }
    return(
        <div className=" max-w-[1200px] mx-auto">
       <div className="flex my-3 items-center justify-between">
        <div className=" text-[25px] font-bold">What's on your mind</div>
        <div className=" flex">
            <div className=" flex cursor-pointer items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2  "><FaArrowLeft onClick={PrevSlide} /></div>
            <div className=" flex  cursor-pointer items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 "><FaArrowRight onClick={NextSlide} /></div>
        </div>
     
       </div>
      
       <div className=" flex overflow-hidden">
 {
            Categories.map(
                (cat,index)=>{
                    return(
                        <>
                        <div style={{
                            transform:`translateX(-${slide*100}%)`
                        }} key={index} className=" w-[150px] shrink-0">
                            <img src={"http://localhost:5000/images/"+ cat.image} alt="hiiii"  className=" "/>
                        </div>
                        </>
                    )



                }
            )
        }
       </div>
       <hr className=" my-6 border-[1px] "  />
    
      
        </div>
    )
}
export default Category