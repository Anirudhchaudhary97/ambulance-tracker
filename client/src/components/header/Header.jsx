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











// 'use client'
// import { Button } from '@nextui-org/react';
// import Image from 'next/image';
// import React from 'react';
// import "./Header.css"

// const Header = () => {
//   return (
//     <div className=" header flex flex-col md:flex-row h-screen">
//       {/* Header Section */}
//       <div className=" text-black flex flex-col justify-center items-center w-full md:w-1/2">
//         <div className="text-center px-4">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Reliable Ambulance Services</h1>
//           <p className="text-lg md:text-2xl mb-8">Track and book ambulances with ease and speed.</p>
//           <Button color='warning'
//             href="/book"
//             className="text-white px-6 py-3 rounded-md text-lg font-semibold"
//           >
//             Book an Ambulance
//           </Button>
//         </div>
//       </div>

//       {/* Image Section
//       <div className="image flex justify-center items-center w-full md:w-1/2">
//         <Image src="/image1.jpeg" width={600} height={600} alt="Ambulance Image" className="object-contain" />
//       </div> */}
//     </div>
//   );
// };

// export default Header;
















'use client'
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import "./Header.css"

const Header = () => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const checkAvailability = () => {
    // Handle the logic to check ambulance availability
    alert(`Checking availability for location: ${location}`);
  };

  return (
    <div className="header flex flex-col md:flex-row h-screen">
      {/* Header Section */}
      <div className="text-white flex flex-col justify-center items-center w-full md:w-1/2 bg-overlay">
        <div className="text-center px-4 md:px-8">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">Reliable Ambulance Services</h1>
          <p className="text-xl md:text-2xl mb-8">Track and book ambulances with ease and speed.</p>
          
        </div>
      </div>

      {/* Form Section */}
      <div className="text-white flex flex-col justify-center items-center w-full md:w-1/2 bg-overlay">
        <div className="text-center px-4 md:px-8 ">
          <div className="location-form mt-8 flex flex-col">
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter your location"
              className="location-input px-4 py-2 rounded-md text-black"
            />
           <Button color='warning'
            href="/book"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold mt-8"
          >
            Book an Ambulance
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
