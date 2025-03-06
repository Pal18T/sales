import React from 'react'
import kababMenu from '../assets/kabab menu.svg'

const ProposalCard = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-full h-[232px]">
        <div className="flex flex-col mb-4 pb-2 border-b border-gray-200 relative">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-medium">
                        BM
                    </div>
                    <div className="min-w-0">
                        <h3 className="text-gray-900 font-medium text-sm truncate">Bikram Mahapatra</h3>
                        <p className="text-gray-500 text-xs truncate">Aviva SIP-Signature Investment Plan</p>
                    </div>
                </div>
                <div className="items-center gap-2 hidden sm:flex">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-lg whitespace-nowrap">
                        Login WIP - Proposal Draft
                    </span>
                    <button className="text-gray-400">
                        <img src={kababMenu} className="w-5 h-5" alt="More options" />
                    </button>
                </div>
                <button className="text-gray-400 sm:hidden">
                    <img src={kababMenu} className="w-5 h-5" alt="More options" />
                </button>
            </div>
            <div className="sm:hidden absolute bottom-[-8px] right-0 bg-white px-1">
                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-lg whitespace-nowrap">
                    Login WIP - Proposal Draft
                </span>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-2 mb-3">
            <div className="min-w-0">
                <p className="text-gray-900 font-medium text-sm truncate">UPFDV014397</p>
                <p className="text-gray-500 text-xs">Proposal Number</p>
            </div>
            <div className="min-w-0">
                <p className="text-gray-900 font-medium text-sm truncate">Not opted for e-Nach</p>
                <p className="text-gray-500 text-xs">e-NACH Status</p>
            </div>
            <div className="min-w-0">
                <p className="text-gray-900 font-medium text-sm truncate">20</p>
                <p className="text-gray-500 text-xs">Premium Type</p>
            </div>
            <div className="min-w-0">
                <p className="text-gray-900 font-medium text-sm truncate">1</p>
                <p className="text-gray-500 text-xs">Policy Term</p>
            </div>
            <div className="min-w-0">
                <p className="text-gray-900 font-medium text-sm truncate">29/07/2024</p>
                <p className="text-gray-500 text-xs">Draft Date</p>
            </div>
            <div className="min-w-0">
                <p className="text-gray-900 font-medium text-sm truncate">240000</p>
                <p className="text-gray-500 text-xs">Premium Amount</p>
            </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-col min-w-0">
                <span className="text-orange-500 font-medium text-xs">Pending</span>
                <span className="text-gray-500 text-xs">Payment Status</span>
            </div>
            <button className="bg-blue-900 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium ml-2">
                <span className="text-sm">»</span>
                Resume
            </button>
        </div>
    </div>
  )
}

export default ProposalCard 