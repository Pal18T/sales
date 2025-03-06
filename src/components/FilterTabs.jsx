import React from 'react'
import tableViewIcon from '../assets/Component 107.svg'

const FilterTabs = () => {
  return (
    <div class="bg-blue-700 h-[74px] flex items-center">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap gap-3 items-center justify-between">
                <div class="flex flex-wrap gap-2">
                    <button class="text-sky-400 border-2 border-sky-400 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-blue-600 transition-colors cursor-pointer">
                        All
                    </button>
                    <button class="text-sky-400 border-2 border-sky-400 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-blue-600 transition-colors cursor-pointer">
                        Pending
                    </button>
                    <button class="text-sky-400 border-2 border-sky-400 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-blue-600 transition-colors cursor-pointer">
                        Processing
                    </button>
                    <button class="text-sky-400 border-2 border-sky-400 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-blue-600 transition-colors cursor-pointer">
                        Issued
                    </button>
                </div>
                
                <div class="flex items-center gap-2 text-white cursor-pointer">
                    <img src={tableViewIcon} class="w-6 h-6" alt="Table View" />
                    <span class="text-sm font-medium">Switch to Tabular view</span>
                </div>
            </div>
        </div>
    </div>
          
  )
}

export default FilterTabs 