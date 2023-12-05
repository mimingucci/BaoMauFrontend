import Post from "./Post"
import { Route, Routes } from 'react-router-dom'
import Profile from "./Profile"
import path from '../../utils/path'
const Main=()=>{
    return (
       <div className="w-[75%]">
          <Routes>
            <Route path={path.PUBLIC} element={<Post/>}>
               <Route path={path.HOME} element={<Post/>}/>
            </Route>
            <Route path={'/'+path.USER} element={<Profile/>}/>
          </Routes>
       </div>
    )
}
export default Main