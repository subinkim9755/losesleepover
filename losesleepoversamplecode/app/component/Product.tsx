import React from 'react'
import Image from 'next/image'
import notfound from "../../public/Image-not-found.png";

function Product({ title, price }: { title: string; price: number }) {
  return (
    <div className='flex flex-col items-start justify-start bg-white w-[300px] h-[500px] border-2 border-black py-2 px-4'>
      <div className='flex flex-col items-start justify-start bg-[ffffff]/50 pb-40'>
        <Image src={notfound} alt={title} width={300} height={400} />
      </div>
      <p>
        title: {title}
      </p>
      <span>
        price: ₩{price.toLocaleString('ko-KR')}
      </span>

    </div>
  )
}

export default Product
