import React from 'react';

const MainSection = () => {
  return (
    <main>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="flex flex-wrap justify-around">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">1. Request an Ambulance</h3>
                <p>Use our app to quickly request an ambulance to your location.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">2. Track in Real-Time</h3>
                <p>Track the ambulance's location and get real-time updates.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">3. Arrive Safely</h3>
                <p>Our professional team ensures you arrive at the hospital safely and quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-around">
            <div className="w-full md:w-1/4 p-4">
              <div className="bg-[#920B3A] text-white p-6 rounded-lg shadow-lg hover:bg-[#310413]">
                <h3 className=" font-bold mb-4">Emergency Transport</h3>
                <p>Immediate response and transportation for emergencies.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <div className="bg-[#920B3A] text-white p-6 rounded-lg shadow-lg hover:bg-[#310413]">
                <h3 className="font-bold mb-4">Non-Emergency Transport</h3>
                <p>Safe and reliable transport for non-emergency medical needs.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <div className="bg-[#920B3A] text-white p-6 rounded-lg shadow-lg hover:bg-[#310413]">
                <h3 className=" font-bold mb-4">Medical Escorts</h3>
                <p>Professional medical escorts for patient transfers.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <div className="bg-[#920B3A] text-white p-6 rounded-lg shadow-lg hover:bg-[#310413]">
                <h3 className=" font-bold mb-4">Event Coverage</h3>
                <p>On-site medical support for events and gatherings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
