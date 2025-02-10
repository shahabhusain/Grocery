import { createRoutesFromChildren, Route, createBrowserRouter } from 'react-router-dom';
import Layout from "../layout/Layout"
import Home from '../pages/Home';
import About from '../pages/About';
import JoinUs from '../pages/JoinUs';
import Community from '../pages/Community';
import Members from '../pages/Members';
export const router =  createBrowserRouter(
    createRoutesFromChildren(
        <>
        <Route path='/' element={<Layout />} >
           <Route index element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/join' element={<JoinUs />} />
           <Route path='/community' element={<Community />} />
           <Route path='/member' element={<Members />} />
        </Route>
        </>
    )
)