import Reviews from './Reviews'
import icons from '../../utils/icons'
const {IoIosChatboxes, IoIosSettings, IoDocumentText, MdEmail, FaStar, BsCalendar2DateFill, FaLocationDot, FaChartLine}=icons
const Profile=()=>{
   return (
    <div className="w-full">
        <div className="border-[2px] rounded-md border-solid mt-[15px] mr-5 border-gray-300 text-left p-3">
            <h1 className="text-[20px] text-blue-800 font-bold">Nanny</h1>            
            <h1 className="text-[20px] text-blue-800 font-bold">Nguyễn Tiến Vũ</h1>
            <div className='flex items-center'>
                <FaChartLine className='mr-[5px]'/>
                <span>Rating: 5</span>
            </div>
            <div className='flex items-center'>
                <FaLocationDot className='mr-[5px]'/>
                Location: <span className='ml-[5px] underline hover:cursor-pointer'>Hanoi</span>, <span className='ml-[5px] underline hover:cursor-pointer'>Vietnam</span>
            </div>
            <div className='flex items-center'>
                <FaStar className='mr-[5px]'/>
                Contribution: <span className='ml-[5px] text-green-600 font-bold'>+29</span>
            </div>
            <div className='flex items-center'>
                <IoIosSettings className='mr-[5px]'/>
                <span className=' underline hover:cursor-pointer'>Change settings</span>
            </div>
            <div className='flex items-center'>
                <MdEmail className='mr-[5px]'/>
                <span>gtvvunguye@gmail.com</span>
            </div>
            <div className='flex items-center'>
                <BsCalendar2DateFill className='mr-[5px]'/>
                <span>Registered: 29/07/2012</span>
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
        <Reviews/>
    </div>
   )
}
export default Profile