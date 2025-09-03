'use client'
import { useState } from "react";
import BarStaff from "./BarStaff";
import Janitors from "./Janitors";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import WaiterShifts from "./WaiterShifts";


function Header() {

    const [dark, setDark] = useState(false);

    console.log('this is dark color :: ', dark);
    
    return (

        <header className={`w-full rounded-3xl ${dark ? 'bg-[#291c2e]' : 'bg-white'}`}>

            <div className="flex items-center justify-between w-full px-1 lg:px-4 py-2 
                text-sm rounded-3xl self-start h-15">

                <ul className="flex items-center gap-2 xl:gap-4">

                    <li>
                        <ul className={`flex items-center md:gap-1 rounded-xl ${dark ? 'bg-[#493452]' : 'bg-gray-200'} p-1 cursor-pointer`}>
                            <li className="flex items-center md:gap-1 text-gray-400 lg:px-3 lg:py-1 rounded-2xl">
                                <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 
                                    10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 
                                    1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 
                                    0 0 1.414-1.414L13 11.586V8Z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                <span className={` ${dark ? 'text-gray-200' : 'text-black'}`}>Shift view</span>
                            </li>

                            <li className={`flex items-center gap-1 
                                px-2 py-1 rounded-2xl ${dark? 'bg-[#7b528b]': 'bg-white'} shadow-sm font-medium`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 14 14"
                                    className="w-4 h-4 text-white"
                                    >
                                    <g
                                    fill="black"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    >
                                    <circle cx="5" cy="3.75" r="2.25"></circle>
                                    <path d="M9.5 13.5h-9v-1a4.5 4.5 0 0 1 9 0ZM9 1.5A2.25 2.25 0 0 1 9 6m1.6 2.19a4.5 4.5 0 0 1 2.9 4.2v1.11H12"></path>
                                    </g>
                                </svg>
                                <span className={`font-semibold ${dark ? 'text-white' : 'text-black'}`}>Staff view</span>
                            </li>
                        </ul>
                    </li>


                    <li className={`flex items-center gap-1 px-1 lg:px-3 py-2 
                        rounded-xl cursor-pointer ${dark ? 'bg-[#493452]' : 'bg-gray-200'}`}>
                        <svg
                            className={'w-4 h-4 transform scale-150 hidden lg:inline'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="black"
                            viewBox="0 0 24 24"
                            >
                            <path
                                stroke={`${dark ? 'white': 'black'}`}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m16 17-4-4-4 4m8-6-4-4-4 4"
                            />
                        </svg>
                        <span className={`font-medium ${dark ? 'text-white' : 'text-black'}`}>Status All</span>
                    </li>


                    <li className={`flex items-center gap-1 px-1 lg:px-3 py-2 
                        rounded-xl cursor-pointer ${dark ? 'bg-[#493452]' : 'bg-gray-200'}`}>
                        <svg
                            className="w-4 h-4 transform scale-150 hidden lg:inline"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="black"
                            viewBox="0 0 24 24"
                        >
                            <path
                            stroke={`${dark ? 'white': 'black'}`}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m16 17-4-4-4 4m8-6-4-4-4 4"
                            />
                        </svg>
                        <span className={`font-medium ${dark ? 'text-white' : 'text-black'}`}>Team All</span>
                    </li>


                    <li className="px-1 xl:px-2 py-1 cursor-pointer">
                        <span className="text-blue-500 border-b border-blue-500 text-xs hover:text-blue-600">
                            +Advanced filter
                        </span>
                    </li>
                </ul>

              

                <ul className="flex items-center gap-2 xl:gap-5">

                    <li>
                        <button
                            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                            className={`relative w-14 h-7 rounded-full border flex items-center 
                                ${dark ? 'bg-gray-700 border-gray-600' : 'bg-gray-300 border-gray-300'} 
                                transition-colors duration-300`}
                            onClick={() => setDark((prev) => !prev)}
                            >

                            <span className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white 
                                shadow-md transform transition-transform duration-300 ${dark ? 'translate-x-7' : 'translate-x-0'}`}>
                            </span>

                            <span className="absolute left-1 top-1 text-yellow-400 text-sm">{!dark && '🌞'}</span>
                            <span className="absolute right-1 top-1 text-indigo-200 text-sm">{dark && '🌙'}</span>
                        </button>
                    </li>

                    <li className="cursor-pointer">
                        <ul className={`flex items-center gap-1 
                            rounded-xl p-1 ${dark ? 'bg-[#493452]' : 'bg-zinc-200'}`}>
                            <li className={`px-1 lg:px-3 py-1 rounded-2xl  
                                shadow-sm font-medium ${dark ? 'bg-[#7b528b] text-white': 'bg-white text-black'}`}>
                            Week
                            </li>
                            <li className=" xl:px-3 py-1 text-gray-400">Month</li>
                        </ul>
                    </li>


                    <li className={`flex items-center gap-1 px-1 xl:px-3 py-2 
                        rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white 
                        transition-colors duration-200 ${dark ? "bg-[#7b528b]" : "bg-zinc-200"}`}>

                        <span className={`font-bold ${dark ? 'text-white' : 'text-black'}`}>Current Week</span>
                        <svg
                            className="w-5 h-5 hidden lg:inline"
                            xmlns="http://www.w3.org/2000/svg"
                            fill={`${dark ? 'white' : 'black'}`}
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18.425 10.271C19.499 8.967 18.57 7 16.88 
                                7H7.12c-1.69 0-2.618 1.967-1.544 
                                3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>

                </ul>

            </div>

            <div className="flex w-full mt-5 text-xs lg:text-sm ">

                <div className={`flex-[2] brder px-4 py-3 lg:px-6 lg:py-6 border ${dark ? 'bg-[#472a52] border-[#868388]' : 'bg-purple-100 border-[#e3d9e7]'}`}>
                    <p className={`text-[10px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>W33</p>
                    <h2 className={`font-bold text-lg lg:text-xl ${dark ? 'text-white' : 'text-black'}`}>$16.5k</h2>
                    <p className={`font-medium text-[11px] lg:text-sm cursor-pointer ${dark ? 'text-blue-400' : 'text-green-600 '}`}>
                    Weekly Budget →
                    </p>
                </div>

                <div className={`flex-1 px-4 py-3 lg:px-6 lg:py-3 
                    border ${dark ? 'bg-[#654e6e] border-[#868388]' : 'bg-purple-50 border-[#e3d9e7]'}`}>
                    <p className={`text-[10px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>MON</p>
                    <h2 className={`font-bold text-lg lg:text-xl ${dark ? 'text-white' : 'text-black'}`}>22</h2>
                    <p className={`text-[11px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>12h · $1.2k</p>
                </div>

                <div className={`flex-1 px-4 py-3 lg:px-6 lg:py-3 
                    border ${dark ? 'bg-[#654e6e] border-[#868388]' : 'bg-purple-50 border-[#e3d9e7]'}`}>
                    <p className={`text-[10px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>TUE</p>
                    <h2 className={`font-bold text-lg lg:text-xl ${dark ? 'text-white' : 'text-black'}`}>23</h2>
                    <p className={`text-[11px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>12h · $1.2k</p>
                </div>

                <div className={`flex-1 px-4 py-3 lg:px-6 lg:py-3 
                    border ${dark ? 'bg-[#654e6e] border-[#868388]' : 'bg-purple-50 border-[#e3d9e7]'}`}>
                    <p className={`text-[10px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>WED</p>
                    <h2 className={`font-bold text-lg lg:text-xl ${dark ? 'text-white' : 'text-black'}`}>24</h2>
                    <p className="text-red-500 text-[11px] lg:text-sm"> 
                        <span className={`${dark ? 'text-white' : 'text-gray-500'}`}>12h ·</span>$1.2k</p>
                </div>

                <div className={`flex-1 px-4 py-3 lg:px-6 lg:py-3 
                    border ${dark ? 'bg-[#654e6e] border-[#868388]' : 'bg-purple-50 border-[#e3d9e7]'}`}>
                    <p className={`text-[10px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>THU</p>
                    <h2 className={`font-bold text-lg lg:text-xl ${dark ? 'text-white' : 'text-black'}`}>25</h2>
                    <p className={`text-[11px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>12h · $1.2k</p>
                </div>

                <div className={`flex-1 px-4 py-3 lg:px-6 lg:py-3 
                    border ${dark ? 'bg-[#654e6e] border-[#868388]' : 'bg-purple-50 border-[#e3d9e7]'}`}>
                    <p className={`text-[10px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>FRI</p>
                    <h2 className={`font-bold text-lg lg:text-xl ${dark ? 'text-white' : 'text-black'}`}>26</h2>
                    <p className={`text-[11px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>12h · $1.2k</p>
                </div>

                <div className={`flex-1 px-4 py-3 lg:px-6 lg:py-3 
                    border ${dark ? 'bg-[#654e6e] border-[#868388]' : 'bg-purple-50 border-[#e3d9e7]'}`}>
                    <p className={`text-[10px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>SAT</p>
                    <h2 className={`font-bold text-lg lg:text-xl ${dark ? 'text-white' : 'text-black'}`}>27</h2>
                    <p className={`text-[11px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>12h · $1.2k</p>
                </div>

                <div className={`flex-1 px-4 py-3 lg:px-6 lg:py-3 
                    border ${dark ? 'bg-[#654e6e] border-[#868388]' : 'bg-purple-50 border-[#e3d9e7]'}`}>
                    <p className={`text-[10px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>SUN</p>
                    <h2 className={`font-bold text-lg lg:text-xl ${dark ? 'text-white' : 'text-black'}`}>28</h2>
                    <p className={`text-[11px] lg:text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>12h · $1.2k</p>
                </div>
            </div>

        <Accordion
            type="multiple"
            // collapsible={true}
            className="w-full mt-5 p-1"
            defaultValue={["item-1"]}
        >
            <AccordionItem value="item-1" className="border-none">

                <AccordionTrigger className="[&>svg]:hidden" >

                    <div className="flex items-center">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={`${dark ? 'white' : 'black'}`} viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clipRule="evenodd"/>
                        </svg>
                        <h2 className={`text-2xl font-semibold ${dark ? 'text-white' : 'text-black'}`}>Bar Staff (2)</h2>
                    </div>
                    <span className={`p-2 rounded-3xl 
                        mr-3 hover:bg-gray-300 transition-colors ${dark ? 'bg-[#654e6e]' : 'bg-gray-200'}`}>
                        <svg className="w-6 h-6" fill="none" stroke={dark ? 'white' : 'black'} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span> 

                </AccordionTrigger>

                <AccordionContent className="flex flex-col gap-4 text-balance">
                    {/* for bar staff */}
                    <BarStaff dark={dark}/>
                </AccordionContent>

            </AccordionItem>
            <AccordionItem value="item-2" className="border-none">
                 <AccordionTrigger className="[&>svg]:hidden" >

                    <div className="flex items-center">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={`${dark ? 'white' : 'black'}`} viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clipRule="evenodd"/>
                        </svg>
                        <h2 className={`text-2xl font-semibold ${dark ? 'text-white' : 'text-black'}`}>Janitors (2)</h2>
                    </div>

                    <span className={`p-2 rounded-3xl 
                        mr-3 hover:bg-gray-300 transition-colors ${dark ? 'bg-[#654e6e]' : 'bg-gray-200'}`}>
                        <svg className="w-6 h-6" fill="none" stroke={dark ? 'white' : 'black'} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span> 

                </AccordionTrigger>
                <AccordionContent className="gap-4 text-balance">
                    {/* for janitors */}
                    <Janitors dark={dark}/>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="[&>svg]:hidden" >

                    <div className="flex items-center">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={`${dark ? 'white' : 'black'}`} viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clipRule="evenodd"/>
                        </svg>
                        <h2 className={`text-2xl font-semibold ${dark ? 'text-white' : 'text-black'}`}>Waiters/Waitresses (6)</h2>
                    </div>

                    <span className={`p-2 rounded-3xl 
                        mr-3 hover:bg-gray-300 transition-colors ${dark ? 'bg-[#654e6e]' : 'bg-gray-200'}`}>
                        <svg className="w-6 h-6" fill="none" stroke={dark ? 'white' : 'black'} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span> 

                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    {/* for waitress */}
                    <WaiterShifts dark={dark}/>
                </AccordionContent>
            </AccordionItem>
        </Accordion> 
        
        </header>

    );
}

export default Header;

