"use client"
import Wrapper from '@/components/Wrapper'
import React, { useEffect } from 'react'
import useCartStore from '../cartStore'

// import PaymentModes from './PaymentModes';
import Link from 'next/link';

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
  const {calculatedAmount, fetchData,selectedPaymentMode } = useCartStore();
  const [random, setRandom] = React.useState();
 
  // const [hrefValue, setHrefValue] = React.useState('/failed'); // Default value

  useEffect(() => {
    fetchData(); // Call fetchData when the component is mounted
  }, []);

  // useEffect(() => {
  //   // Update hrefValue whenever random changes
  //   setHrefValue(random === 1 ? '/success' : '/failed');
  //   console.log("hrefValue:", hrefValue);
  // }, [random]);

  // const handleMakePayment = () => {
  //   // Generate a random number (0 or 1)
  //   const randomResult = Math.round(Math.random());
  //   console.log(randomResult);
  //   setRandom(randomResult);
  //   // Redirect to the success or failed page based on the random number
  //   // router.push(randomResult === 0 ? '/success' : '/failed');
  // };
  // console.log(random);
  // const hrefValue = random===1 ? '/success' : '/failed';


  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-bold leading-tight">
            Order Confirmation
          </div>
        </div>
        <div className="flex-[2]">
          <div className="text-[28px] md:text-[34px] mb-5  leading-tight">
            Payment Mode: <span className='text-[20px] md:text-[24px] mb-5 leading-tight'>{selectedPaymentMode}</span>
          </div>
        </div>
        <div className="flex-[1]">
          <div className="text-lg font-bold">Summary</div>
          <div className="p-5 my-5 bg-black/[0.1]  rounded-xl  shadow-md hover:shadow-lg">
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
          <Link href="/success">
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium  mb-3 flex items-center gap-2 justify-center 
              hover:bg-black/[0.5] shadow-md hover:shadow-lg  ">
              Make Payment
            </button>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};
export default page


