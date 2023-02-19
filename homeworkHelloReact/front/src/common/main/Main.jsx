import {Route, Routes} from "react-router-dom";

import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";



import Side from "../../component/aside";

export function Main() {
   return (
    <main className="main">
        <Side/>
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </main>
   ) 
}