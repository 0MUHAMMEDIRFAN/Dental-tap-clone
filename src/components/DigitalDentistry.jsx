import React from 'react'

function DigitalDentistry() {
    return (
        <div className='flex h-full px-8 pt-36 pb-32 bg-[#1b2032] bg-blend-soft-light bg-cover bg-[url("https://dentaltap.com/wp-content/uploads/2022/10/Dentaltap-dental-software-free-office-tasks-18-10-2022-2750-х.png")]  '>
            <div className='w-full max-tablet-large:order-2 max-tablet-large:hidden'></div>
            <div className='w-full text-white max-tablet-large:text-center'>
                <h1 className='text-[46px] font-semibold'>Your Digital Dentistry.</h1>
                <p className='text-2xl font-[karla] mt-4'>Even more opportunities for your practice.</p>
                <div className='flex flex-wrap '>
                    <li className='min-w-[200px] w-[40%] flex flex-col py-8 items-center gap-3'>
                        <i className="fa-solid fa-cloud bg-[#503ced] w-[66px] h-[66px] rounded-full flex items-center justify-center text-[34px]"></i>
                        <p>Office tasks</p>
                    </li>
                    <li className='min-w-[200px] w-[40%] flex flex-col py-8 items-center gap-3'>
                        <i className="fa-solid fa-teeth-open bg-[#503ced] w-[66px] h-[66px] rounded-full flex items-center justify-center text-[34px]"></i>
                        <p>Treatment processes</p>
                    </li>
                    <li className='min-w-[200px] w-[40%] flex flex-col py-8 items-center gap-3'>
                        <i className="fa-solid fa-comments bg-[#503ced] w-[66px] h-[66px] rounded-full flex items-center justify-center text-[34px]"></i>
                        <p>Communication</p>
                    </li>
                    <li className='min-w-[200px] w-[40%] flex flex-col py-8 items-center gap-3'>
                        <i className="fa-solid fa-mobile bg-[#503ced] w-[66px] h-[66px] rounded-full flex items-center justify-center text-[34px]"></i>
                        <p>Mobile App</p>
                    </li>
                    <li className='min-w-[200px] w-[40%] flex flex-col py-8 items-center gap-3'>
                        <i className="fa-solid fa-child bg-[#503ced] w-[66px] h-[66px] rounded-full flex items-center justify-center text-[34px]"></i>
                        <p>Patient portal</p>
                    </li>
                    <li className='min-w-[200px] w-[40%] flex flex-col py-8 items-center gap-3'>
                        <i className="fa-brands fa-cloudsmith bg-[#503ced] w-[66px] h-[66px] rounded-full flex items-center justify-center text-[34px]"></i>
                        <p>Integrations</p>
                    </li>
                    <li className='min-w-[200px] w-[40%] flex flex-col py-8 items-center gap-3'>
                        <i className="fa-solid fa-clou bg-[#503ced] w-[66px] h-[66px] rounded-full flex items-center justify-center text-[34px]"></i>
                        <p></p>
                    </li>

                </div>
            </div>
        </div>
    )
}

export default DigitalDentistry
