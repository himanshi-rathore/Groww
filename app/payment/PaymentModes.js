// PaymentModes.js
import React, { useEffect } from 'react';
import useCartStore from '@/app/cartStore';
import Link from 'next/link';
import Image from 'next/image';

const PaymentModes = () => {
  const { pay, fetchData, selectedPaymentMode, setSelectedPaymentMode } = useCartStore();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {pay?.map((item) => (
        <div key={item} className="flex flex-col hover:bg-black/[0.25]  w-full md:w-64 items-center justify-around p-6 bg-white border border-gray-300 rounded-xl shadow-md ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="mb-4">{item}</div>
          {item === "UPI" ? (
            <Image
              alt="UPI"
              src="/images.png"
              width={150}
              height={150}
              className="rounded-lg"
            />
          ) : (
            <Image
              alt="Card"
              src="/card.png"
              width={150}
              height={150}
              className="rounded-lg"
            />
          )}
          <Link href="/orderConfirmation">
            <button
              className="w-full p-3 mt-8 rounded bg-black text-white text-sm font-medium hover:opacity-75"
              onClick={() => setSelectedPaymentMode(item)}
            >
              Make Payment
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PaymentModes;
