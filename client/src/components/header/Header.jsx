//  'use client'
// import Image from 'next/image';
// import React from 'react';


// const Header = () => {
//   return (
//     <div className='flex'>
//     <div className='header'>
//     <header className="bg-red-200 text-white h-screen flex flex-col justify-center items-center">
//       <div className="text-center px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Reliable Ambulance Services</h1>
//         <p className="text-lg md:text-2xl mb-8">Track and book ambulances with ease and speed.</p>
//         <a
//           href="/book"
//           className="bg-[#f31260] text-white hover:bg-red-900 px-6 py-3 rounded-md text-lg font-semibold"
//         >
//           Book an Ambulance
//         </a>
//       </div>
//     </header>
//     </div>
//       <div className='image bg-red-200 flex justify-center items-center'>
//         <Image src="/image1.jpeg" width={500} height={500} />
//       </div>
//     </div>
//   );
// };

// export default Header;











'use client'
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Header Section */}
      <div className="header text-black flex flex-col justify-center items-center w-full md:w-1/2">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Reliable Ambulance Services</h1>
          <p className="text-lg md:text-2xl mb-8">Track and book ambulances with ease and speed.</p>
          <a
            href="/book"
            className="bg-[#a90840] text-black hover:bg-red-900 px-6 py-3 rounded-md text-lg font-semibold"
          >
            Book an Ambulance
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="image flex justify-center items-center w-full md:w-1/2">
        <Image src="/image1.jpeg" width={800} height={800} alt="Ambulance Image" className="object-contain" />
      </div>
    </div>
  );
};

export default Header;

