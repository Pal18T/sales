import React from 'react'
import gridIcon from '../assets/Frame 1010108889.svg'
import languageIcon from '../assets/Frame 427320543.svg'
import notificationIcon from '../assets/notifications_none.svg'
import profileIcon from '../assets/2.svg'
import logoIcon from '../assets/Vector.svg'
import backIcon from '../assets/Arrow forward ios.svg'

const Header = () => {
  return (
    <div className='bg-[#0747a6]'>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center gap-2">
            <button className="text-white flex items-center gap-2 cursor-pointer">
              <img src={backIcon} alt="Back" className="w-5 h-5" />
              <span className="text-sm font-medium">Proposal Listing</span>
            </button>
          </div>
          
          {/* Center - Logo */}
          <div className="flex items-center">
            <img src={logoIcon} alt="Logo" className="h-6" />
          </div>
          
          {/* Right section */}
          <div className="flex items-center gap-6">
            <button className="text-white cursor-pointer">
              <img src={gridIcon} alt="Grid View" className="w-6 h-6" />
            </button>
            
            <button className="text-white flex items-center gap-1 cursor-pointer">
              <img src={languageIcon} alt="Language" className="h-8" />
            </button>
            
            <div className="relative">
              <button className="text-white cursor-pointer">
                <img src={notificationIcon} alt="Notifications" className="w-6 h-6" />
              </button>
            </div>
            
            <button className="text-white cursor-pointer">
              <img src={profileIcon} alt="Profile" className="h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header