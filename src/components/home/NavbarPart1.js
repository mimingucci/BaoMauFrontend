import icons from '../../utils/icons'
const {FaArrowRightLong, FaStar, GoDotFill}=icons
const NavbarPart1=()=>{
    return (
        <div className="w-full border-[2px] rounded-t-md border-solid border-black mt-4">
           <div className="flex items-center text-blue-800">
              <FaArrowRightLong size={20} className='mx-[5px] '/>
              mimingucci
           </div>
           <hr/>
           <div>
              <div className='flex items-center'>
                <FaStar size={14} className='mx-[5px] text-blue-800'/>
                Contribution: 0
              </div>
              <div className='flex items-center'>
                <GoDotFill size={14} className='mx-[5px] text-blue-800'/>
                Settings
              </div>
              <div className='flex items-center'>
                <GoDotFill size={14} className='mx-[5px] text-blue-800'/>
                Blogs
              </div>
              <div className='flex items-center'>
                <GoDotFill size={14} className='mx-[5px] text-blue-800'/>
                Talks
              </div>
           </div>
        </div>
    )
}
export default NavbarPart1