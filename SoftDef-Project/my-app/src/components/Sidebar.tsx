import Header from "./Header"

function Sidebar() {

    return (

        <div className="flex w-full">

            <div className="flex flex-col justify-between rounded-md 
                relative sm:w-70 h-auto">

                <div className="flex flex-col justify-start gap-7 md:gap-15 lg:gap-10 xl:gap-35 
                    rounded-2xl sm:gap-4 xl:h-full">
                <ul className="flex flex-col gap-2 sm:gap-2 md:gap-2 
                    lg:gap-2 lg:p-2 rounded-2xl">

                    <li className="flex gap-2 p-4 justify-end items-start">
                        <span className="text-xs hidden sm:inline text-gray-300">Minimize</span>
                        <span className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                            >
                            <path
                                fill="white"
                                d="M22 13v-2H8.414V5.586L2 12l6.414 6.414V13z"
                            ></path>
                        </svg>
                        </span>
                    </li>

                    <li className="flex p-2 gap-2 justify-center sm:justify-start">
                        <span className="flex items-center gap-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1em"
                            height="1em"
                        >
                            <path
                                fill="#2D0A3A"
                                stroke="white"
                                d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
                            ></path>
                            </svg>
                        <span className="hidden sm:inline text-xs min-w-3 text-gray-300 md:text-base">Dashbord</span>
                        </span>
                    </li>

                    <li className="flex border-[#130618] bg-[#482457] p-2 py-4 gap-2 justify-center sm:justify-start rounded-lg">
                        <span className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 14 14"
                                width="1em"
                                height="1em"
                                className=""
                            >
                                <g
                                    fill="white"
                                    stroke="#2D0A3A"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 3.5v-3m3 3v-3m3 3v-3"></path>
                                    <rect width="13" height="11.5" x=".5" y="2" rx="1"></rect>
                                    <path d="M3.5 7h7m-7 3h4"></path>
                                </g>
                            </svg>
                        <span className="hidden sm:inline text-xs text-gray-300 md:text-base">Shifts</span>
                        </span>
                    </li>

                    <li className="flex p-2 gap-2 justify-center sm:justify-start">
                        <span className="flex items-center gap-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 14"
                            width="1em"
                            height="1em"
                            >
                            <g
                                fill="#2D0A3A"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                >
                                <circle cx="5" cy="3.75" r="2.25"></circle>
                                <path d="M9.5 13.5h-9v-1a4.5 4.5 0 0 1 9 0ZM9 1.5A2.25 2.25 0 0 1 9 6m1.6 2.19a4.5 4.5 0 0 1 2.9 4.2v1.11H12"></path>
                            </g>
                        </svg>
                        <span className="hidden sm:inline text-xs text-gray-300 md:text-base">Employees</span>
                        </span>
                    </li>

                    <li className="flex p-2 gap-2 justify-center sm:justify-start">
                        <span className="flex items-center gap-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1em"
                            height="1em"
                        >
                            <g
                                fill="#2D0A3A"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            >
                                <path d="M20 20H4V4"></path>
                                <path d="m4 7l8 8l3-3l4.5 4.5"></path>
                            </g>
                        </svg>
                        <span className="hidden sm:inline text-xs text-gray-300 md:text-base">Reports</span>
                        </span>
                    </li>

                    <li className="flex p-2 gap-2 justify-center sm:justify-start">
                        <span className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                >
                                <path
                                    fill="#2D0A3A"
                                    stroke="white"
                                    d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
                                    ></path>
                            </svg>
                        <span className="hidden sm:inline text-xs text-gray-300 md:text-base">Item5</span>
                        </span>
                    </li>

                    <li className="flex p-2 gap-2 justify-center sm:justify-start">
                        <span className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                >
                                <path
                                    fill="#2D0A3A"
                                    stroke="white"
                                    d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
                                    ></path>
                            </svg>
                        <span className="hidden sm:inline text-xs text-gray-300 md:text-base">Item6</span>
                        </span>
                    </li>

                    <li className="flex p-2 gap-2 justify-center sm:justify-start">
                        <span className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                >
                                <path
                                    fill="#2D0A3A"
                                    stroke="white"
                                    d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
                                    ></path>
                            </svg>
                        <span className="hidden sm:inline text-xs text-gray-300 md:text-base">Item7</span>
                        </span>
                    </li>

                    <li className="flex p-2 gap-2 justify-center sm:justify-start">
                        <span className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                >
                                <path
                                    fill="#2D0A3A"
                                    stroke="white"
                                    d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
                                    ></path>
                            </svg>
                        <span className="hidden sm:inline text-xs text-gray-300 md:text-base">Item8</span>
                        </span>
                    </li>

                    <li className="flex p-2 gap-2 justify-center sm:justify-start">
                        <span className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                >
                                <path
                                    fill="#2D0A3A"
                                    stroke="white"
                                    d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
                                ></path>
                            </svg>
                        <span className="hidden sm:inline text-xs text-gray-300 md:text-base">Item9</span>
                        </span>
                    </li>

                    <li className="flex p-2 gap-2 justify-center sm:justify-start">
                        <span className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                >
                                <path
                                    fill="#2D0A3A"
                                    stroke="white"
                                    d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
                                    ></path>
                            </svg>
                        <span className="hidden sm:inline text-xs text-gray-300 md:text-base">Item10</span>
                        </span>
                    </li>

                    <li className="flex p-2 gap-2 justify-center sm:justify-start">
                        <span className="flex items-center gap-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1em"
                            height="1em"
                            >
                            <g fill="#2D0A3A" stroke="gray" strokeWidth="2">
                                <path d="M3.082 13.945c-.529-.95-.793-1.426-.793-1.945s.264-.994.793-1.944L4.43 7.63l1.426-2.381c.559-.933.838-1.4 1.287-1.66c.45-.259.993-.267 2.08-.285L12 3.26l2.775.044c1.088.018 1.631.026 2.08.286s.73.726 1.288 1.659L19.57 7.63l1.35 2.426c.528.95.792 1.425.792 1.944s-.264.994-.793 1.944L19.57 16.37l-1.426 2.381c-.559.933-.838 1.4-1.287 1.66c-.45.259-.993.267-2.08.285L12 20.74l-2.775-.044c-1.088-.018-1.631-.026-2.08-.286s-.73-.726-1.288-1.659L4.43 16.37z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </g>
                        </svg>
                        <span className="hidden sm:inline text-xs text-gray-300 md:text-base">Settings</span>
                        </span>
                    </li>

                </ul>
                    <div className="flex p-2 items-center gap-2">
                        <svg
                            width={30}        // static width
                            height={30}       // static height
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                            >
                            <circle
                                cx={50}           // center x
                                cy={50}           // center y
                                r={40}            // radius
                                fill="white"       // fill color
                                stroke="black"    // stroke color
                                strokeWidth={5}   // stroke width
                            />
                        </svg>
                        <h2 className="hidden sm:inline text-xs lg:text-md 
                        lg:font-semibold text-white">Entie LD</h2>
                    </div>
                </div>
            </div>
            <Header />
        </div>

    )

}

export default Sidebar






