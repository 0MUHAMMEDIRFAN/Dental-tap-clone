import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Topbar() {
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
    const [topbarOpen, setTopbarOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="flex bg-[#1B2032] h-[146px] justify-center  w-full">
            <div className='bg-[#503ced] max-tablet-large:w-full flex items-center justify-center tablet-large:mx-6' onClick={() => { navigate("/"); setTopbarOpen(false) }}>
                <img src="https://dentaltap.com/wp-content/uploads/2023/08/Free-dental-software-Dentaltap-white-logo-24-08-2023-1.svg" className='w-40 mx-[17px]' alt="" />
            </div>
            <div className='flex items-center tablet-large:max-desktop-small:w-full justify-center max-tablet-large:w-1/4 max-tablet-small:w-1/3'>
                <i className={`${topbarOpen && "rotate-[630deg]"} fa-solid fa-ellipsis cursor-pointer desktop-small:hidden text-center w-full text-white text-3xl custom-transition`} onClick={() => { setTopbarOpen(!topbarOpen) }}></i>
                <div className={`${topbarOpen ? "max-desktop-small:opacity-100" : "max-desktop-small:opacity-0 max-desktop-small:pointer-events-none"} max-desktop-small:overflow-hidden flex max-desktop-small:flex-col max-desktop-small:gap-10 font-medium max-desktop-small:py-5 max-desktop-small:bg-[#503ced] z-10 max-desktop-small:top-[146px] left-0 max-desktop-small:absolute text-white items-center justify-around text-sm max-desktop-small:w-full desktop-small:w-[926px] desktop-small:mx-6 custom-transition`}>
                    <div onClick={() => setIsFeaturesOpen(!isFeaturesOpen)} onMouseOver={() => window.innerWidth > 1200 && setIsFeaturesOpen(true)} onMouseLeave={() => window.innerWidth > 1200 && setIsFeaturesOpen(false)} className='relative flex max-desktop-small:flex-col max-desktop-small:justify-center items-center desktop-small:gap-2 cursor-pointer'>
                        <p>Software Features <i className='fa-solid fa-chevron-down' /></p>
                        <div className={`${isFeaturesOpen ? "desktop-small:translate-y-0 opacity-100 max-desktop-small:mt-6" : "desktop-small:translate-y-5 max-desktop-small:h-0 pointer-events-none opacity-0"} h-fit overflow-hiden desktop-small:absolute max-desktop-small:flex max-desktop-small:flex-col max-desktop-small:gap-6  items-center top-10 bg-[#503ced] text-white w-[350px] list-none custom-transition`}>
                            <li className='py-3.5 pl-6 pr-8' onClick={() => { navigate("/practice-office/"); setTopbarOpen(false) }}>
                                <i className="fa-solid fa-cloud pr-2 max-desktop-small:hidden"></i>Office tasks
                            </li>
                            <li className='py-3.5 pl-6 pr-8' onClick={() => { navigate("/treatment-processes/"); setTopbarOpen(false) }}>
                                <i className="fa-solid fa-tooth pr-2 max-desktop-small:hidden"></i>Treatment processes
                            </li>
                            <li className='py-3.5 pl-6 pr-8' onClick={() => { navigate("/communications/"); setTopbarOpen(false) }}>
                                <i className="fa-solid fa-comment pr-2 max-desktop-small:hidden"></i>Communications
                            </li>
                        </div>
                    </div>
                    <p className='cursor-pointer' onClick={() => { navigate("/help-center"); setTopbarOpen(false) }}>
                        <i className="fa-regular fa-circle-question"></i> Help center
                    </p>
                    <p className='cursor-pointer'>Pricing</p>
                    <button className="bg-[#503ced] desktop-small:h-11 w-[195px] rounded font-semibold">Create an account</button>
                    <button className=""><i className="fa-solid fa-ellipsis max-desktop-small:hidden"></i> Login</button>
                </div>
            </div>
        </div>
    )
}

export default Topbar
