

function Header() {


  return (

    <>
      
        <div className="flex border text-xs justify-between w-full h-20">

            <ul className="border flex gap-10 w-180">
                <div className="border-purple-200 flex bg-purple-200 text-black  rounded-md">   
                    <li className="border w-20">Shift view</li>
                    <li className="border w-20">Staff view</li>
                </div>
                <li className="border w-20">Status All</li>
                <li className="border w-20">Team all</li>
                <li className="border w-25">+Advanced filter</li>
            </ul>

            <ul className="border flex w-100 gap-5 p-1 justify-center items-center">
                <div className="border flex gap-3 p-2 w-1/3 rounded-2xl justify-center items-center">
                    <li className="border w-15 p-1 text-center rounded-2xl">Week</li>
                    <li className="w-20 text-center">Month</li>
                </div>
                <li className="border w-1/3 p-2 rounded-2xl text-center">Current Week</li>
            </ul>
            
        </div>

    </>

  )

}

export default Header

