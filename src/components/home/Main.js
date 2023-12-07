import Post from "./Post"
import { Route, Routes } from 'react-router-dom'
import Profile from "./Profile"
import Rating from "./Rating"
import Calendar from "./Calendar"
import path from '../../utils/path'
const Main=()=>{
    return (
       <div className="w-[75%]">
          <Routes>
            <Route path={path.PUBLIC} element={<Post/>}>
               <Route path={path.HOME} element={<Post/>}/>
            </Route>
            <Route path={path.RATING} element={<Rating/>}/>
            <Route path={path.USER} element={<Profile/>}/>
            <Route path={path.CALENDAR} element={<Calendar/>}/>
          </Routes>
       </div>
    )
}
export default Main