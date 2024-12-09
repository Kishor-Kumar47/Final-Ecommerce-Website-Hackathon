import React from 'react'

const Ourinsta = () => {
  return (
    <main
      className=" relative flex items-center justify-center h-[430px] w-[1363px] bg-instagram-section bg-cover bg-center justify-center mb-9    "
      style={{ backgroundImage: "url('/insta-bg.png')" }}
    >
      <div className="text-center  ">
        <h1 className="text-[60px] font-bold leading-[90px] font-['Poppins'] text-black">Our Instagram</h1>
        <p className="text-lg text-black mt-2">Follow our store on Instagram</p>
        <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-100">
          Follow Us
        </button>
      </div>
    </main>
  )
}

export default Ourinsta