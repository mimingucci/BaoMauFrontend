import { useState } from 'react'
import logo from '../assets/image/logo.jpg'
import icons from '../utils/icons'
const {IoIosNotifications, IoMdSearch}=icons
const Header=()=>{
    const [value, setValue]=useState()
    return(
        <div>
            <div className="upper_header flex justify-between">
                <div className='w-[120px]'><a href='http://localhost:3000/'><img src={logo} className='w-full'/></a></div>
                <div className='text-center'>
                    <div className='relative block'>
                    <IoIosNotifications size={20} className='mx-auto absolute right-0'/>
                    </div>
                    <div className='underline mt-[15px]'>
                        <a href='http://localhost:3000/profile/mimingucci'>mimingucci</a> | Logout
                    </div>
                </div>
            </div>
            <div className='downer_header border-r-[50%] rounded-md border-2 w-full h-[50px] border-black border-solid justify-between flex'>
                <div className='w-full h-full flex space-x-4 content-center py-[10px] pl-[10px]'>
                    <div className='underline hover:cursor-pointer'>
                        HOME
                    </div>
                    <div className='hover:cursor-pointer'>
                        HELP
                    </div>
                    <div className='hover:cursor-pointer'>
                        CATALOG
                    </div>
                </div>
                <div className='py-[10px] pr-[10px] flex'>
                <IoMdSearch size={20} className='my-auto'/>
                <input 
                    // onKeyPress={handleKeyUp}
                    type={'text'} 
                    placeholder='Search' 
                    className='flex-1 bg-gray-200 outline-none'
                    onChange={(e)=>setValue(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}
export default Header