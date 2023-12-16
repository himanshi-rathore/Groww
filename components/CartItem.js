"use client"
// CartItem.js
import React, { useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useCartStore from '@/app/cartStore';

const CartItem = () => {
  const { data, fetchData } = useCartStore();

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="flex py-5 gap-3 md:gap-5 border-b">
          {/* Image */}
          <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </div>

          <div className="w-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                {/* product title */} {item.title}
              </div>

              <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                {/* PRODUCT SUBTITLE {item.subtitle} */}
              </div>
              <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                {/* PRODUCT PRICE */} {item.price}
              </div>
            </div>

            <div className="text-md font-medium text-black/[0.5] hidden md:block">
              {/* PRODUCT SUBTITLE {item.subtitle} */}
            </div>
            <div className="flex items-center justify-between mt-4">
             
              <RiDeleteBin6Line
                className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                // Add onClick handler for deleting the item
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
