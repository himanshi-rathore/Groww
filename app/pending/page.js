import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex-shrink-0">
        <Image
          src="/pending.gif"
          alt="Pending GIF"
          width={150}
          height={150}
        />
      </div>
      <div className='mt-6 font-bold text-lg'>Sorry! It might take sometime</div>
    </div>
  )
}

export default Page;
