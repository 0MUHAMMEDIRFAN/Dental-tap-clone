import React from 'react'
import DigitalDentistry from './DigitalDentistry'

function Office() {
    return (
        <div className='bg-white'>
            {/* Office tasks  */}
            <div className='flex max-tablet-large:flex-col max-tablet-large: h-full items-center px-8 py-20 gap-14'>
                <div className='w-full desktop-small:ml-6 mr-14 flex flex-col gap-5'>
                    <h1 className='text-[57px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25]'>
                        <span>Office tasks</span> in your dental practice.
                    </h1>
                    <p className='text-[#5c6770] text-2xl font-[karla] leading-[1.6] tracking-[-0.5px]'>We provide all the automation tools you need to organize your&nbsp; practice office. Know everything about your patients, schedule appointments, bill, collaborate with your team on mobile devices in real time with the new version of Dentaltap Jam ©.</p>
                </div>
                <div className='w-full'>
                    <img src="https://dentaltap.com/wp-content/uploads/2022/10/Dentaltap_screen_office_tasks_22_10_2022.svg" width={526} alt="" />
                </div>
            </div>

            {/* Features Software  */}

            <div className='flex max-tablet-large:flex-col h-full items-center px-8 py-20 gap-14'>
                <div className='w-full h-full flex items-center'>
                    <img src="https://dentaltap.com/wp-content/uploads/2021/11/Dentaltap-software-development-19-11-2021-750-750.png" width={526} alt="" />
                </div>
                <div className='w-full desktop-small:ml-6 mr-14 flex flex-col gap-5'>
                    <h1 className='text-[57px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25]'>
                        Features software.
                    </h1>
                    <p className='text-[#5c6770] text-2xl font-[karla] leading-[1.6] tracking-[-0.5px]'>The section features automates all the business processes of your practice and is the workspace of the front office. Please note that we provide licenses for assistants and administrators (co-pilots) free of charge.</p>
                    <ul className='list-none flex flex-wrap'>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-solid fa-child mr-2.5 text-[#503ced]"></i> Patient record</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-solid fa-tasks mr-2.5 text-[#503ced]"></i> Tasks</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-regular fa-calendar-check mr-2.5 text-[#503ced]"></i> Scheduling</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-regular fa-sticky-note mr-2.5 text-[#503ced]"></i> Notes</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-regular fa-credit-card mr-2.5 text-[#503ced]"></i> Invoices and Payments</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-solid fa-check mr-2.5 text-[#503ced]"></i> Inventory</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-regular fa-edit mr-2.5 text-[#503ced]"></i> Doc Flow</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-solid fa-chart-bar mr-2.5 text-[#503ced]"></i> Analytics</li>
                    </ul>
                    <button className="bg-[#503ced] mt-10 px-7 py-2 w-fit rounded text-base font-semibold text-white"><i class="fa-solid fa-arrow-right-long"></i> &nbsp; Start Automation</button>
                </div>
            </div>

            {/* Jam calendar  */}

            <div className='py-24 px-14 max-desktop-small:px-[30px] flex max-tablet-large:flex-col gap-10 bg-white text-[#272d3a] '>
                <div className='w-full flex flex-col gap-5'>
                    <h1 className='text-[46px] font-semibold '>Jam calendar.</h1>
                    <p className='text-[#5c6770] text-2xl leading-[1.6] tracking-[-0.5px]'>We paid special attention to the development of calendar features. These features help admin’s and assistants your practice effectively manage appointment booking processes.</p>
                    <div className='mt-20'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/12/Dentaltap-dental-software-free-01-12-2022.svg" width={524} alt="" />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-14 pl-10 mt-[30px]'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-solid fa-calendar-day h-5 pr-5 text-[#503ced]"></i>1. Interval options.</h4>
                        <p className='text-[#576770] text-lg pl-10'>All traffic is encrypted and data is transmitted over a secure protocol.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-regular fa-calendar h-5 pr-5 text-[#503ced]"></i>2. Selecting the date.</h4>
                        <p className='text-[#576770] text-lg pl-10'>Setting up data access rights and roles for all software users.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-regular fa-bookmark h-5 pr-5 text-[#503ced]"></i>3. All in one.</h4>
                        <p className='text-[#576770] text-lg pl-10'>We do backups for your data every hour, impossible to lose it.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-regular fa-clone h-5 pr-5 text-[#503ced]"></i>4. Or or.</h4>
                        <p className='text-[#576770] text-lg pl-10'>Keep track of all suspicious user sessions in the account’s log.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-solid fa-calendar-times h-5 pr-5 text-[#503ced]"></i>5. Waiting List.</h4>
                        <p className='text-[#576770] text-lg pl-10'>Our providers are fully compliant with medical data security standards.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-solid fa-mobile h-5 pr-5 text-[#503ced]"></i>6. A familiar look.</h4>
                        <p className='text-[#576770] text-lg pl-10'>Our providers are fully compliant with medical data security standards.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-solid fa-print h-5 pr-5 text-[#503ced]"></i>7. Print All.</h4>
                        <p className='text-[#576770] text-lg pl-10'>Our providers are fully compliant with medical data security standards.</p>
                    </div>
                </div>
            </div>

            {/* some details about the features */}

            <div className='h-full px-8 py-20'>
                <h1 className='text-[#1b2032] text-[46px] font-semibold pb-12'>Some detials about the features.</h1>
                <div className='flex max-tablet-large:flex-col gap-3 flex-wrap'>
                    <div className='border flex flex-col gap-5 tablet-large:w-[45%] text-[#454958] text-lg px-8 pt-8 pb-5'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/11/Dentaltap_assistant_22_10_2022.svg" width={71} alt="" />
                        <h5 className='font-semibold '>Patient management</h5>
                        <p>The patient database is managed through pass-through searches and the creation of patient groups (Tags).</p>
                    </div>
                    <div className='border flex flex-col gap-5 tablet-large:w-[45%] text-[#454958] text-lg px-8 pt-8 pb-5'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/11/Dentaltap_assistant_22_10_2022.svg" width={71} alt="" />
                        <h5 className='font-semibold '>Medical record</h5>
                        <p>A flexible medical record with the option of adding additional fields any format.</p>
                    </div>
                    <div className='border flex flex-col gap-5 tablet-large:w-[45%] text-[#454958] text-lg px-8 pt-8 pb-5'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/11/Dentaltap_assistant_22_10_2022.svg" width={71} alt="" />
                        <h5 className='font-semibold '>Team collaboration</h5>
                        <p>It is implemented by marking employees in the scheduled appointment calendar and setting tasks for them.</p>
                    </div>
                    <div className='border flex flex-col gap-5 tablet-large:w-[45%] text-[#454958] text-lg px-8 pt-8 pb-5'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/11/Dentaltap_assistant_22_10_2022.svg" width={71} alt="" />
                        <h5 className='font-semibold '>Invoices and payments</h5>
                        <p>Several customisable price lists, different types of discounts for groups of patients and all payment methods.</p>
                    </div>
                </div>
            </div>
            <DigitalDentistry />
        </div>
    )
}

export default Office
