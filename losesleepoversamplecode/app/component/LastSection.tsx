import React from 'react'
import Image from 'next/image'
import LogoBlack from "../../public/Logo_black.png";
function LastSection() {
  return (
    <div className='flex  snap-start flex-col items-start justify-center gap-4 [scroll-snap-align:start]'>
        <Image
            src={LogoBlack}
            alt="Logo"
            width={1920}
            height={300}        />

        <div className='flex flex-row items-start justify-start text-[10px] gap-10 py-2 px-4'>
            <div className='flex flex-col items-start justify-start text-[10px] gap-2'>
                <button className='cursor-pointer font-bold outline-none focus:outline-none'>Terms and Conditions</button>
                <button className='cursor-pointer font-bold outline-none focus:outline-none'>Privacy Policy</button>
                <button className='cursor-pointer font-bold outline-none focus:outline-none'>Shop Guide</button>
            </div>
            <div className='flex flex-col items-start justify-start text-[10px] gap-2'>
                <button className='cursor-pointer font-bold outline-none focus:outline-none'>notice</button>
            </div>
            <div className='flex flex-col items-start justify-center text-[10px] gap-2'>
                <button className='cursor-pointer font-bold outline-none focus:outline-none'>Instargram</button>
                <button className='cursor-pointer font-bold outline-none focus:outline-none'>Kakao</button>
            </div>

        </div>

        <div className='text-[10px] px-4 py-2 '>
            CHAQUE CEO : 김효민 ADDRESS : 04912 서울 광진구 동일로70길 35 1층 대표 번호 : 070-8779-8095 BUSINESS NUMBER : 788-65-00318 사업자정보확인 MAIL ORDER SALES REGISTRATION NUMBER : 제 2023-서울성동- 1969 호 개인정보보호책임자 : HYOMIN KIM
        </div>
      
    </div>
  )
}

export default LastSection
