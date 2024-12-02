import React from "react";
const Cart = (props) => {
  return (
    <>
      <div className=" w-full md:w-[273px] shrink-0 grow">
        <div className=" group h-[182px] w-[200px] rounded-[15px] overflow-hidden relative">
          <img
            className="group-hover:scale-110 duration-200  object-cover h-full w-full"
            src={"http://localhost:5000/images/" + props.image}
            alt=""
          />
          <div className=" image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter">
            {props.offer}
          </div>
        </div>
        <div className=" mt-3 text-xl font-bold">
                        {props.title}

                     </div>
                     <div className=" flex gap-1">
                   
                    <div>
                        <img className=" h-5 w-5" src="/images/rating.jpg" alt="" />
                    </div> 
                    <div className=" font-extralight">
                        {props.rating}
                      <span className="ml-2">  {props.minTime}-{props.maxTime} mins </span> 
                        </div>     
                        
                    </div>
                    <div className=" font-extralight">
                            {props.name}
                            <br />
                            {props.place}
                        </div>
                       
        
        
        
      </div>
    </>
  );
};
export default Cart;
