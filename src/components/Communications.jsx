import React from 'react'
import DigitalDentistry from './DigitalDentistry'
function Communications() {
    return (
        <div className='bg-white'>
            <div className='flex max-tablet-large:flex-col h-full items-center px-8 py-20 gap-14'>
                <div className='w-full desktop-small:ml-6 mr-14 flex flex-col gap-5 animate'>
                    <h1 className='text-[57px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25] '>
                        <span className=' bg-gradient-to-t from-[#1455fe] to-transparent'> Communication</span>&nbsp; with patients in dentistry.
                    </h1>
                    <p className='text-[#5c6770] text-2xl font-[karla] leading-[1.6] tracking-[-0.5px]'>Several features implemented in our software that will help you take steps toward effective communication with your patients and they will become closer to your practice.</p>
                </div>
                <div className='w-full animate'>
                    <img src="https://dentaltap.com/wp-content/uploads/2022/10/Dentalta_screen_communications_22_10_2022.svg" width={526} alt="" />
                </div>
            </div>

            {/* Notification  */}

            <div className='flex max-tablet-large:flex-col h-full items-center px-8 py-20 gap-14'>
                <div className='w-full h-full flex items-center'>
                    <img src="https://dentaltap.com/wp-content/uploads/2021/11/Dentaltap-dentist-10-11-2021-750-750.png" width={526} alt="" />
                </div>
                <div className='w-full desktop-small:ml-6 mr-14 flex flex-col gap-5'>
                    <h1 className='text-[25px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25]'>
                        Notification.
                    </h1>
                    <h6 className='text-[#5c6770] pb-6 font-semibold tracking-[2px] border-b'>PARTNER SERVICE</h6>
                    <p className='text-[#5c6770] text-lg border-b pb-6 leading-[1.6] tracking-[-0.5px]'>The program will help you send a personalized notification to each patient in the situation you want. Before you start using it, configure the message template, signature and sending time. Please note that notification services are provided by our partners – several global SMS gateways.</p>
                    <div className='flex items-center justify-between'>
                        <i class="fa-solid fa-chevron-left w-8 h-8 bg-[#1b2032] grid place-items-center text-white rounded-full"></i>
                        <div className='flex justify-evenly w-full'>
                            <img src="https://dentaltap.com/wp-content/uploads/2023/07/Dentaltap_dental_software_Vonage_250_250.svg" width={115} alt="" />
                            <img src="https://dentaltap.com/wp-content/uploads/2023/07/Dentaltap_dental_software_Text_Local_250_250.svg" width={115} alt="" />
                        </div>
                        <i class="fa-solid fa-chevron-right w-8 h-8 bg-[#1b2032] grid place-items-center text-white rounded-full"></i>
                    </div>
                </div>
            </div>

            {/* Dialogs in social media  */}

            <div className='flex max-tablet-large:flex-col h-full items-center px-8 py-20 gap-14'>
                <div className='w-full desktop-small:ml-6 mr-14 flex flex-col gap-5'>
                    <h1 className='text-[25px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25]'>
                        Dialogs in Whatsapp and Telegram
                    </h1>
                    <h6 className='text-[#5c6770] pb-6 font-semibold tracking-[2px] border-b'>PARTNER SERVICE</h6>
                    <p className='text-[#5c6770] text-lg pb-6 leading-[1.6] tracking-[-0.5px]'>Organize communication with patients through the most popular communication channel and get —</p>
                    <ul className='list-none flex flex-wrap'>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-full '><i class="fa-solid fa-comment mr-2.5 text-[#503ced]"></i> Group newsletters about new services or promotions.</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-full '><i class="fa-solid fa-comments mr-2.5 text-[#503ced]"></i> Responses to your messages and dialogue with patients.</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-full '><i class="fa-solid fa-laugh mr-2.5 text-[#503ced]"></i> Long beautiful messages with links and emoji 👋</li>
                    </ul>
                    <div className='flex items-center justify-between'>
                        {/* <i class="fa-solid fa-chevron-left w-8 h-8 bg-[#1b2032] grid place-items-center text-white rounded-full"></i> */}
                        <div className='flex justify-around w-full'>
                            <img src="https://dentaltap.com/wp-content/uploads/2023/07/Dentaltap_dental_software_Twilio_250_250.svg" width={115} alt="" />
                            <img src="https://dentaltap.com/wp-content/uploads/2023/07/Dentaltap_Dental_Software_logo_Bevatel_250_250.svg" width={115} alt="" />
                        </div>
                        {/* <i class="fa-solid fa-chevron-right w-8 h-8 bg-[#1b2032] grid place-items-center text-white rounded-full"></i> */}
                    </div>
                </div>
                <div className='w-full h-full flex items-center'>
                    <img src="https://dentaltap.com/wp-content/uploads/2021/11/Dentaltap-loyalty-12-11-2021-750-750.png" width={526} alt="" />
                </div>
            </div>

            {/* Internet Telephony  */}

            <div className='flex max-tablet-large:flex-col h-full items-center px-8 py-20 gap-14'>
                <div className='w-full h-full flex items-center'>
                    <img src="https://dentaltap.com/wp-content/uploads/2021/11/Dentaltap-safe-09-11-2021-200-200.png" width={526} alt="" />
                </div>
                <div className='w-full desktop-small:ml-6 mr-14 flex flex-col gap-5'>
                    <h1 className='text-[25px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25]'>
                        Internet Telephony.
                    </h1>
                    <h6 className='text-[#5c6770] pb-6 font-semibold tracking-[2px] border-b'>PARTNER SERVICE</h6>
                    <p className='text-[#5c6770] text-lg border-b pb-6 leading-[1.6] tracking-[-0.5px]'>Start saving on calls to patients and improve communication between staff and customers with online telephony capabilities. To connect, just create an account with a partner provider and enter these data in our software. If your provider is not on our list, we will add it as soon as possible.</p>
                    <div className='flex items-center justify-between'>
                        {/* <i class="fa-solid fa-chevron-left w-8 h-8 bg-[#1b2032] grid place-items-center text-white rounded-full"></i> */}
                        <div className='flex justify-around w-full'>
                            <img src="https://dentaltap.com/wp-content/uploads/2023/07/Dentaltap_dental_software_MightyCall_logo_250_250.svg" width={115} alt="" />
                            <img src="https://dentaltap.com/wp-content/uploads/2023/07/Dentaltap_dental_software_Dialpad_logo_250_250.svg" width={115} alt="" />
                        </div>
                        {/* <i class="fa-solid fa-chevron-right w-8 h-8 bg-[#1b2032] grid place-items-center text-white rounded-full"></i> */}
                    </div>
                </div>
            </div>

            {/* Online booking */}

            <div className='flex max-tablet-large:flex-col h-full items-center px-8 py-20 gap-14'>
                <div className='w-full desktop-small:ml-6 mr-14 flex flex-col gap-5'>
                    <h1 className='text-[25px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25]'>
                        Online booking.
                    </h1>
                    <h6 className='text-[#5c6770] pb-6 font-semibold tracking-[2px] border-b'>SOFTWARE OPTIONS</h6>
                    <p className='text-[#5c6770] text-lg pb-6 leading-[1.6] tracking-[-0.5px]'>Being able to book an appointment with a specialist online will greatly reduce the workload on the front office of your practice. Set appointment slots, create services and price lists for publication, post a personalized link on the website, and make your practice open to patients 24 hours a day, 7 days a week. </p>
                    <button className="bg-transparent text-[#503ced] mt-10 px-7 py-2 w-fit rounded text-base font-semibold"><i class="fa-solid fa-arrow-right-long"></i> &nbsp; Add Online booking</button>

                </div>
                <div className='w-full h-full flex items-center'>
                    <img src="https://dentaltap.com/wp-content/uploads/2021/11/Dentaltap-iscounts-11-11-2021-750-750.png" width={526} alt="" />
                </div>
            </div>
            <div className='py-24 px-14 max-desktop-small:px-[30px] flex max-tablet-large:flex-col gap-10 bg-white text-[#272d3a] animate '>
                <div className='w-full flex flex-col gap-5'>
                    <h1 className='text-[46px] font-semibold '>Giga Dental Chart</h1>
                    <p className='text-[#5c6770] text-2xl leading-[1.6] tracking-[-0.5px]'>The graphical interactive dental chart that we developed combines data and visualization into a single workspace for the dentist and turns the creation of treatment plans into creativity.</p>
                    <div className='mt-20'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/12/Dentaltap-dental-software-Dental-formula-02-12-2022-19-50.svg" width={524} alt="" />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-14 pl-10 mt-[30px]'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-solid fa-calendar-day h-5 pr-5 text-[#503ced]"></i>1. Small Details.</h4>
                        <p className='text-[#576770] text-lg pl-10'>All traffic is encrypted and data is transmitted over a secure protocol.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-regular fa-calendar h-5 pr-5 text-[#503ced]"></i>2. High Style.</h4>
                        <p className='text-[#576770] text-lg pl-10'>Setting up data access rights and roles for all software users.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-regular fa-bookmark h-5 pr-5 text-[#503ced]"></i>3. Two Methods.</h4>
                        <p className='text-[#576770] text-lg pl-10'>We do backups for your data every hour, impossible to lose it.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-regular fa-clone h-5 pr-5 text-[#503ced]"></i>4. Group Actions.</h4>
                        <p className='text-[#576770] text-lg pl-10'>Keep track of all suspicious user sessions in the account’s log.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-solid fa-calendar-times h-5 pr-5 text-[#503ced]"></i>5. Informatin Part.</h4>
                        <p className='text-[#576770] text-lg pl-10'>Our providers are fully compliant with medical data security standards.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-solid fa-mobile h-5 pr-5 text-[#503ced]"></i>6. Print the Chart.</h4>
                        <p className='text-[#576770] text-lg pl-10'>Our providers are fully compliant with medical data security standards.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'><i className="fa-solid fa-print h-5 pr-5 text-[#503ced]"></i>7. Print All.</h4>
                        <p className='text-[#576770] text-lg pl-10'>Our providers are fully compliant with medical data security standards.</p>
                    </div>
                </div>
            </div>
            <div className='h-full px-8 py-20'>
                <h1 className='text-[#1b2032] text-[46px] font-semibold pb-12'>Some detials about the features.</h1>
                <div className='flex max-tablet-large:flex-col gap-3 flex-wrap'>
                    <div className='border flex flex-col gap-5 tablet-large:w-[45%] text-[#454958] text-lg px-8 pt-8 pb-5'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/10/Dentaltap_treatment_plan_22_10_2022.svg" width={71} alt="" />
                        <h5 className='font-semibold '>Treament Plan</h5>
                        <p>With temporary estimate plans, you can create and present different treatment options for your patients without affecting the main Patient dental chart. </p>
                    </div>
                    <div className='border flex flex-col gap-5 tablet-large:w-[45%] text-[#454958] text-lg px-8 pt-8 pb-5'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/10/Dentaltap_treatment_plan_22_10_2022.svg" width={71} alt="" />
                        <h5 className='font-semibold '>Dental formula</h5>
                        <p>All visualization and treatment information. On it, you can mark diagnoses and procedures, select groups of teeth, or link treatment data to an appointment, bill, employee.</p>
                    </div>
                    <div className='border flex flex-col gap-5 tablet-large:w-[45%] text-[#454958] text-lg px-8 pt-8 pb-5'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/10/Dentaltap_treatment_plan_22_10_2022.svg" width={71} alt="" />
                        <h5 className='font-semibold '>Procedures</h5>
                        <p>You can link an a procedure to Invoice, a appointment, change assigned teeth for the selected procedures and assigned user for the selected procedures.</p>
                    </div>
                    <div className='border flex flex-col gap-5 tablet-large:w-[45%] text-[#454958] text-lg px-8 pt-8 pb-5'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/10/Dentaltap_treatment_notes_22_10_2022.svg" width={71} alt="" />
                        <h5 className='font-semibold '>Clinical notes</h5>
                        <p>You can create and group templates for treatment notes. Mark a note as important and then it will appear in the calendar and will be the first in history.</p>
                    </div>
                    <div className='border flex flex-col gap-5 tablet-large:w-[45%] text-[#454958] text-lg px-8 pt-8 pb-5'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/10/Dentaltap_perio_chart_22_10_2022.svg" width={71} alt="" />
                        <h5 className='font-semibold '>Periodontal chart</h5>
                        <p>Dynamic observation of the periodontal condition has been implemented – examination results can be compared at intervals after the start of treatment.</p>
                    </div>
                    <div className='border flex flex-col gap-5 tablet-large:w-[45%] text-[#454958] text-lg px-8 pt-8 pb-5'>
                        <img src="https://dentaltap.com/wp-content/uploads/2022/10/Dentaltap_discounts_22_10_2022.svg" width={71} alt="" />
                        <h5 className='font-semibold '>Price list</h5>
                        <p>Create several price lists of your own. Apply the discount to the cost of the procedure. Create procedures templates for use in an invoice or online booking.</p>
                    </div>
                </div>
            </div>
            <DigitalDentistry />
        </div>
    )
}

export default Communications
