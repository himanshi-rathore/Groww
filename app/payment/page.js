"use client"
import Wrapper from '@/components/Wrapper'
import React from 'react'
// import useCartStore from '../cartStore'
import PaymentModes from './PaymentModes';
// import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  // const {pay}=useCartStore();
  // const {data}=useCartStore();
  // let sum = 0,q=0;

  // // Iterate through data array and accumulate prices
  // data.forEach((item) => {
  //   sum += item.price*item.quantity || 0; 
  //   q+=item.quantity|| 0// Make sure item.price is defined
  // });
  // console.log(sum);
  // const formattedSum = sum.toFixed(2);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 flex justify-center">
        <div className="text-[15px] md:text-[28px] mb-5 font-bold leading-tight ml-7 p-7">
            Choose Payment Mode
         </div>
         <div className="p-5">
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

export default page


