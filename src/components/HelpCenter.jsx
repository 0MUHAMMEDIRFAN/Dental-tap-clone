import React from 'react'
import DigitalDentistry from './DigitalDentistry'

function HelpCenter() {
    return (
        <div className='bg-white'>

            {/* Banner  */}

            <div className='flex max-tablet-large:flex-col h-full items-center px-8 py-20 gap-14'>
                <div className='w-full desktop-small:ml-6 mr-14 flex flex-col gap-5 animate'>
                    <h1 className='text-[57px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25] '>
                        <span className=' bg-gradient-to-t from-[#1455fe] to-transparent'> Help center</span></h1>
                    <p className='text-[#5c6770] text-2xl font-[karla] leading-[1.6] tracking-[-0.5px]'>Click on the desired section of the software and go to the description of the functionality and features. Do you have any questions? Chat with us.</p>
                    <button className="bg-[#503ced] mt-10 px-9 py-4 w-fit rounded-md text-base font-semibold text-white"><i class="fa-solid fa-arrow-right-long"></i> &nbsp; Ask a question</button>
                </div>
                <div className='w-full animate'>
                    <img src="https://dentaltap.com/wp-content/uploads/2023/06/Free_dental_software_Dentaltap_help_center_black.svg" width={526} alt="" />
                </div>
            </div>

            {/* Calendar  */}

            <div className=' h-full px-14 max-desktop-small:px-[30px] py-20 gap-14'>
                <h1 className='text-[46px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25] mb-10'>Calendar.</h1>
                <ul className='list-none flex max-tablet-large:flex-col flex-wrap box-border w-full text-[#503ced]'>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-calendar-alt mr-4"></i> Overview</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-regular fa-edit mr-4"></i> Simple Notes</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-calendar-day mr-4"></i> Appointments</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-clock mr-4"></i> Waiting List</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-regular fa-hourglass mr-4"></i> Time Slots</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-list mr-4"></i> Tasks List</li>
                </ul>
            </div>

            {/* Tranining to use  */}

            <div className='py-24 px-10 max-desktop-small:px-[30px] bg-[#503CED] bg-cover bg-[url(https://dentaltap.com/wp-content/uploads/2022/01/bg-crypto-brand-transparent.png)] text-white '>
                <div className='flex max-tablet-large:flex-col pb-10'>
                    <h1 className='text-[46px] font-semibold w-full'>Training to use.</h1>
                    <p className='text-2xl w-full'>There are several ways to get to know the features of the software and start using it the day you create your account. What are these ways.</p>
                </div>
                <div>
                    <div className='flex max-tablet-large:flex-col gap-10'>
                        <div className='w-full border-[#aaaaaa88] border-[.1px] flex flex-col gap-5 p-12'>
                            <i class="fa-brands fa-youtube text-3xl ml-4"></i>
                            <h3 className='font-semibold text-[26px]'>Video <br />lessons</h3>
                            <p className='text-lg'>We have created several video clips on the main features of the software, which take 10 minutes to watch.</p>
                            <p className='text-sm flex items-center gap-3 justify-center font-semibold text-center'>Start browing <i class="fa-solid fa-arrow-right-long "></i></p>
                        </div>
                        <div className='w-full border-[#aaaaaa88] border-[.1px] flex flex-col gap-5 p-12'>
                            <i class="fa-solid fa-circle-info text-3xl ml-4"></i>
                            <h3 className='font-semibold text-[26px]'>User <br />manual</h3>
                            <p className='text-lg'>For a deep dive into our innovations and a complete understanding of the software, please see the User Manual.</p>
                            <p className='text-sm flex items-center gap-3 justify-center font-semibold text-center'>Learn more <i class="fa-solid fa-arrow-right-long "></i></p>
                        </div>
                        <div className='w-full border-[#aaaaaa88] border-[.1px] flex flex-col gap-5 p-12'>
                            <i class="fa-solid fa-file-powerpoint text-3xl ml-4"></i>
                            <h3 className='font-semibold text-[26px]'>Presentation <br />of features</h3>
                            <p className='text-lg'>If you are already using the software, but you still have many questions, and we will answer them at the presentation.</p>
                            <p className='text-sm flex items-center gap-3 justify-center font-semibold text-center'>Book a meeting <i class="fa-solid fa-arrow-right-long "></i></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Patients  */}

            <div className=' h-full px-14 max-desktop-small:px-[30px] py-20 gap-14'>
                <h1 className='text-[46px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25] mb-10'>Patients.</h1>
                <ul className='list-none flex max-tablet-large:flex-col flex-wrap box-border w-full text-[#503ced]'>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-calendar-alt mr-4"></i> Profiles</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-regular fa-edit mr-4"></i> Insurances</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-calendar-day mr-4"></i> Groups</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-clock mr-4"></i> Tasks</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-regular fa-hourglass mr-4"></i> Discounts</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-list mr-4"></i> Questionnaire</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-list mr-4"></i> Family</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-list mr-4"></i> Documents</li>
                </ul>
            </div>

            {/* Treatment */}

            <div className=' h-full px-14 max-desktop-small:px-[30px] py-20 gap-14'>
                <h1 className='text-[46px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25] mb-10'>Treatment.</h1>
                <ul className='list-none flex max-tablet-large:flex-col flex-wrap box-border w-full text-[#503ced]'>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-calendar-alt mr-4"></i> Overview</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-regular fa-edit mr-4"></i> Simple Notes</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-calendar-day mr-4"></i> Appointments</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-clock mr-4"></i> Waiting List</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-regular fa-hourglass mr-4"></i> Time Slots</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-list mr-4"></i> Tasks List</li>
                </ul>
            </div>

            {/* customer support head message  */}

            <div className='flex max-tablet-large:flex-col max-tablet-large:items-center py-24 px-7 bg-[#503CED]  tracking-[2px] bg-cover bg-[url(https://dentaltap.com/wp-content/uploads/2022/01/bg-crypto-brand-transparent.png)] text-white '>
                <div className='flex flex-col gap-8 w-[35%] items-center'>
                    <img src="https://dentaltap.com/wp-content/uploads/2022/10/Dental-Cloud-Team-1-500-500-200x200.png" className='rounded-full' alt="" />
                    <div className='text-center grid gap-5'>
                        <p>VIKI,</p>
                        <p>HEAD OF CUSTOMER SUPPORT</p>
                    </div>
                    <i class="fa-solid fa-comment text-3xl"></i>
                </div>
                <div className='flex pb-10 w-[65%] mt-20'>
                    <p className='text-2xl w-full leading-[1.6]'>«It is very important for us to know about your experiences with our products so that we can continually improve them. We treat every user question as a shared experience, so it won’t go unanswered.»</p>
                </div>
            </div>

            {/* Billing  */}

            <div className=' h-full px-12 max-desktop-small:px-[30px] py-20 pb-32 gap-14'>
                <h1 className='text-[46px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25] mb-10'>Billing.</h1>
                <ul className='list-none flex max-tablet-large:flex-col flex-col box-border w-full text-[#503ced]'>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-receipt mr-4"></i> Invoices</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-regular fa-credit-card mr-4"></i> Payments</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-regular fa-bell mr-4"></i> Balance</li>
                </ul>
            </div>

            {/* How else to learn more  */}

            <div className=' h-full px-12 max-desktop-small:px-[30px] py-20 pb-32 gap-14'>
                <h1 className='text-[46px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25] mb-10'>How else to learn more?</h1>
                <ul className='list-none flex flex-col box-border w-full text-[#503ced]'>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-solid fa-chalkboard-teacher mr-4"></i> User manual</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-regular fa-comments mr-4"></i> Chat Room</li>
                    <li className='py-3 mr-16 flex items-center text-base border-b box-border tablet-large:w-[calc(50%-64px)] '><i class="fa-regular fa-message mr-4"></i> Send a message</li>
                </ul>
            </div>

            {/* Impoving the quality of use  */}

            <div className='py-24 px-10 max-desktop-small:px-[30px]  bg-[#503CED] bg-cover bg-[url(https://dentaltap.com/wp-content/uploads/2022/01/bg-crypto-brand-transparent.png)] text-white '>
                <div className='flex max-tablet-large:flex-col pb-10'>
                    <h1 className='text-[46px] font-semibold w-full'>Impoving the <br />quality of use.</h1>
                    <p className='text-2xl w-full leading-[1.6]'>Employees can get additional advice on how to use all the features of the programme. Certification at the end of the consultation will confirm high skills in using our software. The consultations consist of theoretical and practical parts and are held remotely via ZOOM Cloud Meetings.</p>
                </div>
                <div>
                    <div className='flex max-tablet-large:flex-col gap-10'>
                        <div className='w-full border-[#aaaaaa88] border-[.1px] flex flex-col gap-5 p-12'>
                            <i class="fa-solid fa-teeth-open text-3xl ml-4"></i>
                            <h3 className='font-semibold text-[26px]'>Dentist</h3>
                            <p className='text-lg'>During counselling, the doctor acquires the knowledge and skills necessary to make the most of the Treatment section.</p>
                            <p className='text-[60px] flex items-center gap-3 justify-center font- text-center '>$350</p>
                        </div>
                        <div className='w-full border-[#aaaaaa88] border-[.1px] flex flex-col gap-5 p-12'>
                            <i class="fa-solid fa-laptop text-3xl ml-4"></i>
                            <h3 className='font-semibold text-[26px]'>Administrator</h3>
                            <p className='text-lg'>The administrator dental practice gains skills in working with sections of office tasks and communications.</p>
                            <p className='text-[60px] flex items-center gap-3 justify-center font- text-center '>$450</p>
                        </div>
                        <div className='w-full border-[#aaaaaa88] border-[.1px] flex flex-col gap-5 p-12'>
                            <i class="fa-solid fa-user-friends text-3xl ml-4"></i>
                            <h3 className='font-semibold text-[26px]'>Assistant</h3>
                            <p className='text-lg'>After the consultation, the dental assistant will be able to use all the features of the software on a whole new level.</p>
                            <p className='text-[60px] flex items-center gap-3 justify-center font- text-center '>$550</p>
                        </div>
                    </div>
                </div>
            </div>
            <DigitalDentistry />
        </div >
    )
}

export default HelpCenter
