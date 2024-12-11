import React, { useRef, useState } from 'react'

function Main() {
  const [scrolled, setscrolled] = useState(document.documentElement.scrollTop / 7 - 100)
  window.addEventListener('scroll',
    () => {
      setscrolled(document.documentElement.scrollTop / 7 - 100)
    }
  )
  return (
    <>
      {/* banner  */}
      <div id='bannerBgRef' style={{ backgroundPositionX: scrolled, backgroundPositionY: "center" }} className='h-[calc(100vh-146px)] text-white flex flex-col pl-32 max-desktop-small:pl-[30px]  items-start justify-center bg-[110%,100%] bg-[url("https://dentaltap.com/wp-content/uploads/2023/04/Free_dental_Software_Dentaltap_14_04_2023.webp")] bg-no-repeat bg-[#1B2032] bg-blend-soft-light'>
        <h1 className='text-[55px] font-semibold'>Cloud dental software for the best teams.</h1>
        <p className='text-lg font-medium'>Dental practice management and cloud <br />automation dentistry: office tasks, dental treatment <br />processes and patients communications. All dental <br />processes and software features on any mobile <br />device. <span className='bg-[#1455FE]'>Free use is available.</span> For dental clinics and <br />your solo practice.</p>
      </div>
      {/* For whome section  */}
      <div className='relative flex max-tablet-large:flex-col w-full items-center py-24 px-8'>
        <div className='flex items-center sticky h-fit justify-center w-full'>
          <img className='w-[548px] sticky' src="https://dentaltap.com/wp-content/uploads/2022/10/Dentaltap_main_screen_22_10_2022.svg" alt="" />
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='flex flex-col gap-5 border-b pb-10'>
            <h1 className='font-semibold text-[46px] text-[#272D3A] '>For whom we <br />created our <br />software?</h1>
            <p className='text-[#5C6770] text-2xl font-medium font-[karla] tracking-[-0.5] leading-[1.6]'>The dental software features and values ​​are <br />the same for solo dentists, private <br />clinics, and networked dental clinics. <br />With us, dentists of all specializations will <br />be able to automate treatment processes, <br />and clinic front desk will organize all the <br />business processes.</p>
            <p className='text-[#503ced] text-sm font-semibold pl-5 py-5'><i className="fa-solid fa-arrow-right"></i> Free subscription</p>
          </div>
        </div>
      </div>
      {/* Basic Feature  */}
      <div className='py-24 px-14 max-desktop-small:px-[30px] bg-[#503CED] bg-cover bg-[url(https://dentaltap.com/wp-content/uploads/2022/01/bg-crypto-brand-transparent.png)] text-white '>
        <div className='flex max-tablet-large:flex-col pb-10'>
          <h1 className='text-[46px] font-semibold w-full'>Basic Features.</h1>
          <p className='text-2xl w-full'>We have automated the main areas of dental <br />practice and our tools are available not only to large <br />clinics but also to practicing dentists.</p>
        </div>
        <div>
          <h2 className='text-[26px] font-semibold py-5 max-tablet-large:hidden'>Software for the automation of dental practices.</h2>
          <div className='flex max-tablet-large:flex-col gap-12 max-desktop-small:gap-9 w-full'>
            <div className='border-[#aaaaaa88] w-full border-[.1px] flex flex-col gap-5 p-10'>
              <img src="https://dentaltap.com/wp-content/uploads/2023/01/Dentaltap_calendar_white_08_01_2023.svg" className='w-[70px]' alt="" />
              <h3 className='font-semibold text-[26px] max-desktop-small:text-[24px]'>Office <br />tasks</h3>
              <p className='text-lg'>Manage all important your dental practice processes and tasks online. Real–time analytics and reporting.</p>
              <p className='text-sm font-semibold text-center'>Learn more</p>
            </div>
            <div className='border-[#aaaaaa88] w-full border-[.1px] flex flex-col gap-5 p-10'>
              <img src="https://dentaltap.com/wp-content/uploads/2023/01/Dentaltap_dental_chair_white_08_01_2023.svg" className='w-[70px]' alt="" />
              <h3 className='font-semibold text-[26px] max-desktop-small:text-[24px]'>Treatment <br />processes</h3>
              <p className='text-lg'>Creation of treatment plans. Dental chart. Diagnosis and procedures. Clinical notes and treatment diary.</p>
              <p className='text-sm font-semibold text-center'>Learn more</p>
            </div>
            <div className='border-[#aaaaaa88] w-full border-[.1px] flex flex-col gap-5 p-10'>
              <img src="https://dentaltap.com/wp-content/uploads/2023/01/Dentaltap_chat_white_08_01_2023.svg" className='w-[70px]' alt="" />
              <h3 className='font-semibold text-[26px] max-desktop-small:text-[24px]'>Patient <br />communications</h3>
              <p className='text-lg'>Manage all important your dental practice processes and tasks online. Real–time analytics and reporting.</p>
              <p className='text-sm font-semibold text-center'>Learn more</p>
            </div>
          </div>
        </div>

        {/* Software for the automation of dental practice  */}

        <div>
          <h2 className='text-[26px] font-semibold py-5 max-tablet-large:hidden'>Software for the automation of dental practices.</h2>
          <div className='flex max-tablet-large:flex-col gap-12 max-desktop-small:gap-9 w-full'>
            <div className='border-[#aaaaaa88] border-[.1px] flex flex-col gap-5 p-10'>
              <img src="https://dentaltap.com/wp-content/uploads/2023/01/Dentaltap_calendar_white_08_01_2023.svg" className='w-[70px]' alt="" />
              <h3 className='font-semibold text-[26px]'>Office <br />tasks</h3>
              <p className='text-lg'>Manage all important your dental practice processes and tasks online. Real–time analytics and reporting.</p>
              <p className='text-sm font-semibold text-center'>Learn more</p>
            </div>
            <div className='border-[#aaaaaa88] border-[.1px] flex flex-col gap-5 p-10'>
              <img src="https://dentaltap.com/wp-content/uploads/2023/01/Dentaltap_dental_chair_white_08_01_2023.svg" className='w-[70px]' alt="" />
              <h3 className='font-semibold text-[26px]'>Treatment <br />processes</h3>
              <p className='text-lg'>Creation of treatment plans. Dental chart. Diagnosis and procedures. Clinical notes and treatment diary.</p>
              <p className='text-sm font-semibold text-center'>Learn more</p>
            </div>
            <div className='border-[#aaaaaa88] border-[.1px] flex flex-col gap-5 p-10'>
              <img src="https://dentaltap.com/wp-content/uploads/2023/01/Dentaltap_chat_white_08_01_2023.svg" className='w-[70px]' alt="" />
              <h3 className='font-semibold text-[26px]'>Patient <br />communications</h3>
              <p className='text-lg'>Manage all important your dental practice processes and tasks online. Real–time analytics and reporting.</p>
              <p className='text-sm font-semibold text-center'>Learn more</p>
            </div>
          </div>
        </div>
      </div>
      {/* User support  */}
      <div className='px-8 pt-28 pb-14'>
        <div className='flex max-tablet-large:flex-col'>
          <h1 className='font-semibold text-[46px] text-[#272D3A] w-full'>User Support.</h1>
          <div className='flex flex-col gap-10 w-full'>
            <p className='text-[#5C6770] font-medium text-2xl font-[karla]'>User support has a special place in our philosophy. We have created a Help Center and many guides to help you get started using the program the day you sign up. Check out our help resources or ask us a question.</p>
            <button className='bg-[#503ced] h-[69px] w-[158px] rounded font-semibold text-sm text-white'>Help center</button>
          </div>
        </div>
        <div className='flex max-tablet-large:flex-col items-center'>
          <div className='w-full flex flex-col gap-5'>
            <div className='text-[#503CED] w-[64px] h-[64px] rounded-full bg-[#3B24EB1F] flex items-center justify-center text-[32px]'>
              <i className="fa-solid fa-graduation-cap "></i>
            </div>
            <h3 className='font-semibold text-[26px]'>Alice, Robertson College, Canada.</h3>
            <p className='text-2xl text-[#5C6770] pb-10 border-b font-[karla]'>“The program interface is very user – friendly and intuitive, and my students gain tremendous confidence while developing the core skills needed to succeed in dentistry.”</p>
            <div className='flex pt-10 gap-3'>
              <i className="fa-solid fa-asterisk pt-1"></i>
              <p className='text-[#1b2032]'> Modern and clear interface design makes using the program more efficient.</p>
            </div>
          </div>
          <div className='w-full flex items-center justify-center'>
            <img src="https://dentaltap.com/wp-content/uploads/2022/01/Dentaltap-partners-01-01-2022-750-750.png" className='w-[524px]' alt="" />
          </div>
        </div>
      </div>

      {/* For memebers of user community section  */}

      <div className='flex flex-col items-center px-8 py-20 bg-[#f5f6f7]'>
        <h1 className='text-[46px] font-semibold text-[#1d1d1f] mb-[100px] '>For Members Of Our User Community.</h1>
        <div className='flex max-tablet-large:flex-col w-full'>
          <div className='flex flex-col items-center rounded-3xl justify-between p-10 mx-3 w-full h-[750px] bg-[#1D1D1F] text-white '>
            <h5 className='text-xl font-medium  '>Free Improvements.</h5>
            <div>
              <img src="https://dentaltap.com/wp-content/uploads/2023/01/Dentaltap_settings_white_10_01_2023_150_150_1.svg" className='w-[150px]' alt="" />
            </div>
            <p className='text-lg text-center font-medium'>
              We make small changes to the software free of charge for your tasks when you pay for a subscription. This approach helps us develop new features, and you solve your tasks.
            </p>
          </div>
          <div className='flex flex-col items-center rounded-3xl justify-between p-10 mx-3 w-full h-[750px] bg-white text-[#1d1d1f] '>
            <h5 className='text-xl font-medium  '>Invite Friends.</h5>
            <div className='text-[80px] font-extrabold '>
              25%
            </div>
            <p className='text-base text-center'>
              Invite your colleagues and friends to use our dental software at an attractive discount.
            </p>
            <div className='text-[80px] font-extrabold '>
              100%
            </div>
            <p className='text-base text-center'>
              Tell them your promo code. Get a month of free use after invitees pay for their subscription.
            </p>
          </div>
          <div className='flex flex-col items-center rounded-3xl justify-between p-10 mx-3 w-full h-[750px] bg-[#503ced] text-white '>
            <h5 className='text-xl font-medium  '>Involvement In The Creation.</h5>
            <div>
              <img src="https://dentaltap.com/wp-content/uploads/2023/01/Dentaltap_like_white_08_01_2023.svg" className='w-[70px]' alt="" />
            </div>
            <h1 className='text-[48px] font-semibold '>
              Become a user of the β –version.
            </h1>
            <p className='text-lg font-medium text-center'>
              Influence the development of software functionality through feedback to our team.
            </p>
            <p className='text-lg font-bold text-center'>
              Join now
            </p>
          </div>
        </div>
      </div>
      {/* Secure Cloud  */}
      <div className='py-24 px-14 max-desktop-small:px-[30px] flex max-tablet-large:flex-col bg-[#503CED] bg-cover bg-[url(https://dentaltap.com/wp-content/uploads/2022/01/bg-crypto-brand-transparent.png)] text-white '>
        <div className='w-full flex flex-col gap justify-between'>
          <h1 className='text-[46px] font-semibold '>Secure Cloud.</h1>
          <p className='text-2xl'>With the our cloud, along with savings and convenience, you get the security of your patients’ work and data. How do we do it?</p>
          <p className='px-7 py-3'>Migrate to a trusted cloud</p>
          <div>
            <img src="https://dentaltap.com/wp-content/uploads/2019/01/how-it-works.jpg" width={514} alt="" />
          </div>
        </div>
        <div className='w-full flex flex-col gap-14 pl-10 mt-[30px]'>
          <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-semibold'><i className="fa-solid fa-lock h-5 pr-5"></i>1. Encryption.</h4>
            <p className='text-[#f3f3f3b2] text-lg pl-10'>All traffic is encrypted and data is transmitted over a secure protocol.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-semibold'><i className="fa-solid fa-users h-5 pr-5"></i>2. Access.</h4>
            <p className='text-[#f3f3f3b2] text-lg pl-10'>Setting up data access rights and roles for all software users.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-semibold'><i className="fa-solid fa-database h-5 pr-5"></i>3. Backup.</h4>
            <p className='text-[#f3f3f3b2] text-lg pl-10'>We do backups for your data every hour, impossible to lose it.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-semibold'><i className="fa-solid fa-fingerprint h-5 pr-5"></i>4. Control.</h4>
            <p className='text-[#f3f3f3b2] text-lg pl-10'>Keep track of all suspicious user sessions in the account’s log.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-semibold'><i className="fa-solid fa-server h-5 pr-5"></i>5. Provider.</h4>
            <p className='text-[#f3f3f3b2] text-lg pl-10'>Our providers are fully compliant with medical data security standards.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
