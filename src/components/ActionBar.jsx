import React, { useState } from 'react'
import dropdownIcon from '../assets/keyboard_arrow_down.svg'
import allocateIcon from '../assets/person_add.svg'
import filterIcon from '../assets/filter_alt.svg'
import personIcon from '../assets/person.svg'
import teamIcon from '../assets/group.svg'

const ActionBar = () => {
  const [activeTab, setActiveTab] = useState('self');

  return (
    <section className="container mx-auto px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                    
                    <div className="inline-flex rounded-lg bg-white border border-blue-900 overflow-hidden">
                        <button
                            onClick={() => setActiveTab('self')}
                            className={`px-6 py-1.5 text-sm font-medium flex items-center gap-2 cursor-pointer ${
                                activeTab === 'self'
                                ? 'bg-blue-900 text-white'
                                : 'bg-white text-blue-900'
                            }`}
                        >
                            <img 
                                src={personIcon} 
                                alt="" 
                                fill="currentColor"
                                className="w-4 h-4"
                                style={{ filter: activeTab === 'self' ? 'brightness(0) invert(1)' : 'none' }}
                            />
                            Self
                        </button>
                        <button
                            onClick={() => setActiveTab('team')}
                            className={`px-6 py-1.5 text-sm font-medium flex items-center gap-2 cursor-pointer ${
                                activeTab === 'team'
                                ? 'bg-blue-900 text-white'
                                : 'bg-white text-blue-900'
                            }`}
                        >
                            <img 
                                src={teamIcon} 
                                alt="" 
                                className="w-4 h-4"
                                fill="currentColor"
                                style={{ filter: activeTab === 'team' ? 'brightness(0) invert(1)' : 'none' }}
                            />
                            Team
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full sm:w-auto">
                        <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-between w-full sm:w-auto min-w-[200px] cursor-pointer">
                            <span>Select Hierarchy</span>
                            <img src={dropdownIcon} className="w-[20px] h-[20px]" alt="Dropdown" />
                        </button>
                        <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-between w-full sm:w-auto min-w-[200px] cursor-pointer">
                            <span>Circle Manager</span>
                            <img src={dropdownIcon} className="w-[20px] h-[20px]" alt="Dropdown" />
                        </button>
                    </div>
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 flex-1 sm:flex-none cursor-pointer">
                        <img src={allocateIcon} className="w-[16px] h-[16px]" alt="Allocate" />
                        Allocate
                    </button>
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 flex-1 sm:flex-none cursor-pointer">
                        <img src={filterIcon} className="w-[16px] h-[16px]" alt="Filter" />
                        Filter
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ActionBar