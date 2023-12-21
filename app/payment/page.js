"use client"
import Wrapper from '@/components/Wrapper'
import React from 'react'
import PaymentModes from './PaymentModes';
import Image from 'next/image';

const Page = () => {
 

  return (
    <div className="w-full md:py-20">
      <Wrapper>
      <div className="text-center max-w-[800px] mx-auto  mt-8 flex justify-center">
        <div className="text-[18px] ml-10 mt-7 md:mt-4 md:text-[23px] mb-5 font-bold leading-tight">
            Choose Payment Mode
         </div>
         <div className="p-5 pt-0 pr-0">
          <Image src="/payment-method.png" width={75} height={75}  />
         </div>
       </div>
       <div className="flex-[2]]">
        <div className="text-[28px] md:text-[34px] mb-5 font-bold leading-tight  ">
          <PaymentModes/>
         </div>
         
       </div>
       
      </Wrapper>
    </div>
  )
};

export default Page


