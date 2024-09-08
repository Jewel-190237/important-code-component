'use client'
import { useState } from 'react';
import Banner from '../HomePage/Banner';
import About from '../HomePage/About';
import Service from '../HomePage/Service';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('morning');

  return (
    <div className="p-4">
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-4 lato">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'morning' ? 'bg-[#FF3811] text-white' : 'bg-gray-200 text-black'
            }`}
          onClick={() => setActiveTab('morning')}
        >
          Morning
        </button>
        <button
          className={`px-4 py-2 rounded  ${activeTab === 'evening' ? 'bg-[#FF3811] text-white' : 'bg-gray-200 text-black'
            }`}
          onClick={() => setActiveTab('evening')}
        >
          Evening
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'night' ? 'bg-[#FF3811] text-white' : 'bg-gray-200 text-black'
            }`}
          onClick={() => setActiveTab('night')}
        >
          Night
        </button>
      </div>

      {/* Tab Content */}
      <div className=" p-4">
        {activeTab === 'morning' && <Banner />}
        {activeTab === 'evening' && <About />}
        {activeTab === 'night' && <Service />}
      </div>
    </div>
  );
}
export default Tab;
