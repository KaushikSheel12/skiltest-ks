import Image from 'next/image'
import React from 'react'
import { ChevronRightIcon } from 'react-icons';
import LandingCryptoStatistic from './Leanding';

const CheckTemp = () => {
  return (
  <>
  <>
  <div className="w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6" v-bind="$attrs">
    <div className="w-full flex items-center justify-between">
      <span className="font-medium">hello</span>
      <button
        href="#"
        className="px-3 py-1 text-sm font-medium text-blue-500 flex items-center space-x-1 rounded-md hover:bg-blue-50 transition duration-300"
      >
        <span>More</span>
        {/* <ChevronRightIcon size="16" /> */}
      </button>
    </div>
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-gray-500">Name</th>
                <th className="text-left text-sm font-medium text-gray-500">Price</th>
                <th className="hidden sm:block text-left text-sm font-medium text-gray-500">Chart</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in datasets" key="data.id" className="border-b border-gray-200">
                <td className="py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <Image src="" width={50} height={50} alt="" />
                    <span>College</span>
                  </div>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {/* <PlusThickIcon v-if="data.increase" size="14" className="text-emerald-500" /> */}
                    {/* <MinusThickIcon v-else size="14" className="text-red-500" /> */}
                    <span>$500</span>
                  </div>
                </td>
                <td className="hidden sm:block whitespace-nowrap">
                  <div>
                    {/* <LineChart className="w-28 h-12 -mx-2" datasets="data.data" increase="data.increase" /> */}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</>

<div>
  <div class="flex items-center space-x-4">
    <div class="lg:max-w-[336px] w-full flex items-center relative px-5 py-3 border border-[#0c66ee] rounded-xl">
      <span class="text-sm font-medium pr-5 py-3 text-[#0c66ee] border-r border-[#0c66ee]"> 555 </span>
      <input
        type="type"
        class="w-full text-lg font-medium text-right border-none ring-0 focus:outline-none focus:ring-0"
        name="name"
        value="defaultValue"
      />
    </div>
    <div class="relative w-full max-w-[106px] sm:max-w-[159px]">
      <button
        type="button"
        class="w-full flex items-center justify-center space-x-1 relative sm:px-6 py-[1.35rem] border border-[#0c66ee] rounded-xl text-sm font-medium"
     
      >
        <img src="require(`~/assets/img/${exchangeSelected.img}`)" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
        <span class="ml-3 block truncate">heloo</span>
   
      </button>
    
        <ul
          v-if="openDropdown"
          class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm border border-[#0c66ee]"
          tabindex="-1"
        >
          <li
            v-for="exchange in exchanges"
            id="listbox-option-0"
            key="exchange.name"
            class="text-gray-900 cursor-default select-none relative px-3 sm:px-5 py-2"
            role="option"
          >
            <div class="flex items-center">
              <img src="require(`~/assets/img/${exchange.img}`)" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
              <span class="font-normal ml-3 block truncate"> ok </span>
            </div>
          </li>
        </ul>

    </div>
  </div>
</div>




<LandingCryptoStatistic/>


  </>
  )
}

export default CheckTemp