import React from 'react'
import DigitalDentistry from './DigitalDentistry'

function TreatmentProcesses() {
    return (
        <div className='bg-white'>
            <div className='flex max-tablet-large:flex-col h-full items-center px-8 py-20 gap-14'>
                <div className='w-full desktop-small:ml-6 mr-14 flex flex-col gap-5'>
                    <h1 className='text-[57px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25]'>
                        Dental treatment processes. <span> Giga Dental Chart.</span>
                    </h1>
                    <p className='text-[#5c6770] text-2xl font-[karla] leading-[1.6] tracking-[-0.5px]'>Treatment automation tools help dentists complete treatments according to clinical guidelines, create multiple treatment plans, keep records of treatment processes through a clinical notes, dental chart and templates and collaborate on treatment with team.</p>
                </div>
                <div className='w-full'>
                    <img src="https://dentaltap.com/wp-content/uploads/2022/10/Dentalta_screen_treatment_processes_22_10_2022.svg" width={526} alt="" />
                </div>
            </div>

            {/* Features  */}

            <div className='flex max-tablet-large:flex-col h-full items-center px-8 py-20 gap-14'>
                <div className='w-full h-full flex items-center'>
                    <img src="https://dentaltap.com/wp-content/uploads/2021/11/Dentaltap-contact-us-27-11-2021-750-750.png" width={526} alt="" />
                </div>
                <div className='w-full ml-6 mr-14 flex flex-col gap-5'>
                    <h1 className='text-[57px] text-[#272d3a] font-semibold tracking-[-2px] leading-[1.25]'>
                        Features.
                    </h1>
                    <p className='text-[#5c6770] text-2xl font-[karla] leading-[1.6] tracking-[-0.5px]'>The features of the section automate the duties and tasks of dentists in your practice and simplify and speed up the accounting of treatment processes. How to Run a successful dental practice? Take advantage of these features.</p>
                    <ul className='list-none flex flex-wrap'>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-solid fa-tooth mr-2.5 text-[#503ced]"></i> Dental Chart</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-solid fa-teeth mr-2.5 text-[#503ced]"></i> Periodontal Chart</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-regular fa-edit mr-2.5 text-[#503ced]"></i> Clinical notes</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-regular fa-sticky-note mr-2.5 text-[#503ced]"></i> Templates</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-solid fa-ellipsis mr-2.5 text-[#503ced]"></i> Treatment plan</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-solid fa-align-left mr-2.5 text-[#503ced]"></i> Questionnaire</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-solid fa-search mr-2.5 text-[#503ced]"></i> Diagnoses (ICD-10 )</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-solid fa-tag mr-2.5 text-[#503ced]"></i> Price list</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-solid fa-check mr-2.5 text-[#503ced]"></i> Procedures</li>
                        <li className='py-3 mr-5 flex items-center text-base text-[#1b2032] border-b w-[45%] '><i class="fa-regular fa-folder mr-2.5 text-[#503ced]"></i> Files</li>
                    </ul>
                    <button className="bg-[#503ced] mt-10 px-7 py-2 w-fit rounded text-base font-semibold text-white"><i class="fa-solid fa-arrow-right-long"></i> &nbsp; Get advantage</button>
                </div>
            </div>

            {/* Giga dental chart */}

            <div className='py-24 px-14 max-desktop-small:px-[30px]  flex max-tablet-large:flex-col gap-10 bg-white text-[#272d3a] '>
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

            {/* some details about the features  */}

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

export default TreatmentProcesses
