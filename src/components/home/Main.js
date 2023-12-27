import Post from "./Post"
import Posts from "./Posts"
import { Route, Routes } from 'react-router-dom'
import Profile from "./Profile"
import Rating from "./Rating"
import Calendar from "./Calendar"
import path from '../../utils/path'
import Login from "./Login"
import { SearchList } from "."
import { useLocation } from "react-router-dom"

const Main=()=>{
   const location=useLocation()
   let inLoginPage=false
   if(location?.pathname=='/login'){
      inLoginPage=true
   }else{
      inLoginPage=false
   }  
    return (
       <div className={inLoginPage ? "w-full" : "w-[75%]"}>
          <Routes>
            <Route path={path.PUBLIC} element={<Posts/>}>
               <Route path={path.HOME} element={<Posts/>}/>
            </Route>
            <Route path={path.SEARCH} element={<SearchList/>}/>
            <Route path={path.RATING} element={<Rating/>}/>
            <Route path={path.USER} element={<Profile/>}/>
            <Route path={path.CALENDAR} element={<Calendar/>}/>
            <Route path={path.LOGIN} element={<Login/>}/>
          </Routes>
       </div>
    )
}
export default Main