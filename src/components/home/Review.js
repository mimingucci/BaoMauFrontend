import icons from '../../utils/icons'
const {FaAnglesRight, RiAttachment2, BiSolidUpArrow, BiSolidDownArrow, FaUser, BsCalendar2DateFill, IoIosChatboxes}=icons
const Review=({review})=>{
   return (
    <div className="text-left mt-3">
        <h1 className='text-yellow-400 text-[20px] font-bold'>Rating: {review?.rating || 0}</h1>
        <h1 className="text-blue-800 text-[20px] font-bold">{review?.headline || 'Headline'}</h1>
        <p>By <span className="underline">{review?.author || 'author'}</span>, {(new Date()-new Date(review?.reviewtime))/ (1000 * 60 * 60) | 0} hours ago</p>
        <div className="border-l-[4px] border-solid border-gray-400 px-3">
           {review?.content || 'content'}
            </div>
        <div className='border-[2px] rounded-md border-solid h-[50px] mt-3 mr-3 border-gray-300 text-center'>
           <div className='inline-flex items-center h-full'>
              <BiSolidUpArrow size={20} className='text-green-300 mx-[5px] hover:cursor-pointer'/>
              <span className='text-[16px] text-green-700 font-bold'>{review?.agree.length-review?.disagree.length || 0}</span>
              <BiSolidDownArrow size={20} className='text-red-300 mx-[5px] hover:cursor-pointer'/>
           </div>
           <div className='h-full inline-flex'>
              <div className='flex h-full items-center pl-[440px] mx-[10px]'>
                 <FaUser className='mx-[5px]'/>
                 <span className='underline'>{review?.author || 'author'}</span>
              </div>
              <div className='flex h-full items-center mx-[10px]'>
                 <BsCalendar2DateFill className='mx-[5px]'/>
                 <span className='underline'>{review?.reviewtime?.slice(0, 10) || 'time'}</span>
              </div>
           </div>
        </div>
    </div>
   )
}
export default Review