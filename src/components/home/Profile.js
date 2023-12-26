import Reviews from './Reviews'
import icons from '../../utils/icons'
import { useEffect, useState } from 'react'
import UserApi from '../../getApi/UserApi'
import { useLocation } from 'react-router-dom'
const {IoIosChatboxes, IoIosSettings, IoDocumentText, MdEmail, FaStar, BsCalendar2DateFill, FaLocationDot, FaChartLine}=icons
let url='mimingucci'
const Profile=()=>{
   const [user, setUser]=useState()
   const location=useLocation()
//    console.log(location?.pathname?.split('/')[2]) 
   useEffect(()=>{
      url=location?.pathname?.split('/')[2]
      console.log(url)
      UserApi.getUserByNickname(url).then(res=>{
        console.log(res.data)
        setUser(res.data)
      })
      UserApi.getResultBySearch('mimingucci').then(res=>{
        console.log(res)
      })
   }, [])
   return (
    <div className="w-full">
        <div className="border-[2px] rounded-md border-solid mt-[15px] mr-5 border-gray-300 text-left p-3">
            <h1 className="text-[20px] text-blue-800 font-bold">Nanny</h1>            
            <h1 className="text-[20px] text-blue-800 font-bold">{user?.fullname || 'Nickname'}</h1>
            <div className='flex items-center'>
                <FaChartLine className='mr-[5px]'/>
                <span>Rating: {user?.rating || 5}</span>
            </div>
            <div className='flex items-center'>
                <FaLocationDot className='mr-[5px]'/>
                Location: <span className='ml-[5px] underline hover:cursor-pointer'>Hanoi</span>, <span className='ml-[5px] underline hover:cursor-pointer'>Vietnam</span>
            </div>
            <div className='flex items-center'>
                <FaStar className='mr-[5px]'/>
                Contribution: <span className='ml-[5px] text-green-600 font-bold'>{user?.reviews.length || 0}</span>
            </div>
            <div className='flex items-center'>
                <IoIosSettings className='mr-[5px]'/>
                <span className=' underline hover:cursor-pointer'>Change settings</span>
            </div>
            <div className='flex items-center'>
                <MdEmail className='mr-[5px]'/>
                <span>{user?.email || 'email'}</span>
            </div>
            <div className='flex items-center'>
                <BsCalendar2DateFill className='mr-[5px]'/>
                <span>Registered: {user?.createdtime.slice(0, 10) || 'time'}</span>
            </div>
            <div className='flex items-center'>
                <IoDocumentText className='mr-[5px]'/>
                <span className='underline hover:cursor-pointer'>Write post</span>
            </div>
            <div className='flex items-center'>
                <IoIosChatboxes className='mr-[5px]'/>
                <span className='underline hover:cursor-pointer'>Message</span>
            </div>
        </div>
        <Reviews reviews={user?.reviews}/>
    </div>
   )
}
export default Profile