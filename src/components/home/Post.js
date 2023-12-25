import { useEffect, useState } from 'react'
import icons from '../../utils/icons'
import PostApi from '../../getApi/PostApi'
const {FaAnglesRight, RiAttachment2, BiSolidUpArrow, BiSolidDownArrow, FaUser, BsCalendar2DateFill, IoIosChatboxes}=icons
const Post=({post})=>{

   return (
    <div className="text-left mt-5">
        <h1 className="text-blue-800 text-[30px] font-bold">{post?.content || 'Educational top user'}</h1>
        <p>By <span className="underline">{post?.author || 'mimingucci'}</span>, {post?.postedtime.slice(0, 10) || '29 hours ago'}</p>
        <div className="border-l-[4px] border-solid border-gray-400 px-3">
           {post?.content || 'Lionel Messi'}
          </div>
        <div className="flex text-blue-800 items-center text-[12px]">
           Full text and comments 
           <FaAnglesRight size={10}/>
        </div>
        <div className="flex items-center text-[12px]">
           <RiAttachment2 size={15}/>
           Announcement of <span className='text-gray-500 mx-[5px]'>{post?.content || 'Educational top user'}</span> 
        </div>
        <div className='border-[2px] rounded-md border-solid h-[50px] mt-3 mr-5 border-gray-300 text-center'>
           <div className='inline-flex items-center h-full'>
              <BiSolidUpArrow size={20} className='text-green-300 mx-[5px] hover:cursor-pointer'/>
              <span className='text-[16px] text-green-700 font-bold'>{post?.agree.length-post?.disagree.length || 0}</span>
              <BiSolidDownArrow size={20} className='text-red-300 mx-[5px] hover:cursor-pointer'/>
           </div>
           <div className='h-full inline-flex'>
              <div className='flex h-full items-center pl-[470px] mx-[10px]'>
                 <FaUser className='mx-[5px]'/>
                 <span className='underline'>{post?.author || 'user'}</span>
              </div>
              <div className='flex h-full items-center mx-[10px]'>
                 <BsCalendar2DateFill className='mx-[5px]'/>
                 <span className='underline'>{post?.postedtime.slice(0, 10)}</span>
              </div>
              <div className='flex h-full items-center mx-[10px]'>
                 <IoIosChatboxes className='mx-[5px]'/>
                 <span className='underline'>{post?.comments.length || 0}</span>
              </div>
           </div>
        </div>
    </div>
   )
}
export default Post