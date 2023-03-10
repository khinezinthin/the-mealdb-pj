import React from 'react'

const Contact = () => {
  return (
    <div className='flex bg-[rgba(252,214,218,0.85)] items-center'>
      <div>
        <h1 className='text-5xl font-bold text-center'>Contact Us</h1><br />
        <div className='border-2 border-black mx-10 mb-10 p-6  text-center'>
        <form action="">
          <input type="text" placeholder='Full Name' className='w-full bg-transparent border-b-2 border-black mb-5' />
          <input type="email" placeholder='E-mail' className='w-full bg-transparent border-b-2 border-black mb-5' />
          <input type="text" placeholder='Message' className='w-full bg-transparent border-b-2 border-black mb-5' />

          {/* <div> */}
            <button className='bg-black px-6 py-1 text-white rounded-2xl'>Contact Us</button>

          {/* </div> */}
        </form>
        </div>
      </div>
      <div className='w-[100%]'>
      <img src="https://img.freepik.com/free-vector/cute-chef-girl-smiling-uniform-welcoming-inviting-his-guests-cartoon-art-illustration_56104-578.jpg?w=740&t=st=1678378499~exp=1678379099~hmac=9230d5269d5b6296872f3c81d6dc7d7628ed47063cb1fbbefa55743dbf8aa2cc"  />
      </div>
        
    </div>
  )
}

export default Contact