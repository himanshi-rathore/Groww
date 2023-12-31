"use client"
import Wrapper from '@/components/Wrapper'
import React, { useEffect } from 'react'
import useCartStore from '../cartStore'
import Link from 'next/link';
import Card from './Card';
import Upi from './Upi';


const Page = () => {
  
  const {calculatedAmount, fetchData,selectedPaymentMode } = useCartStore(); 
  
  useEffect(() => {
    fetchData(); // Call fetchData when the component is mounted
  }, []);

   return (
    <div className="w-full md:py-20">
      <Wrapper>
       
          <div className="text-[28px] md:text-[34px]  font-bold leading-tight text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            Order Confirmation
          </div>
       
        <div className='sm:flex'>
        
        <div className="flex-[1] mt-10 ">
         
          <div className="p-5 my-5  rounded-xl  shadow-md hover:shadow-lg">
          <div className="text-lg font-bold text-center">Summary</div>
            <div className="flex justify-between">
              <div className="uppercase text-md md:text-lg font-medium text-black">Order Amount</div>
              <div className="text-md md:text-lg font-medium text-black">₹{calculatedAmount}</div>
            </div>
            <div className="text-sm md:text-md py-5 border-t mt-5">
              <div className="flex justify-between">
                <div className="text-md md:text-lg font-medium text-black/[0.7]">Delivery Fee</div>
                <div className="text-md md:text-lg font-sm text-black/[0.7]">₹0</div>
              </div>
              <div className="flex justify-between">
                <div className="text-md md:text-sm font-sm text-black/[0.7]">Additional Taxes</div>
                <div className="text-md md:text-sm font-sm text-black/[0.7] ">₹0</div>
              </div>
            </div>
            <span className="flex items-center gap-2 justify-center text-sm text-black/[0.7]">Click on Make Payment to proceed...</span>
          </div>
        </div>
        <div className='flex-[1] mr-5 mt-7 ml-6'>
          {selectedPaymentMode==="UPI"?<Upi/>:<Card/>}
        </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Page


