import { Button } from '@/components/ui/button';
import { BookmarkCheck, Briefcase, FileText, Home, SidebarIcon, TrendingUp, User, X } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    

    const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, route:"/mainPage" },
    { id: 'platforms', label: 'Job Platforms', icon: Briefcase, route:"/platforms" },
    { id: 'saved', label: 'Saved Jobs', icon: BookmarkCheck, route:"/mainPage1" },
    { id: 'applications', label: 'Applications', icon: TrendingUp, route:"/mainPage2" },
    { id: 'resume', label: 'Resume', icon: FileText , route:"/mainPage3"},
    { id: 'profile', label: 'Profile', icon: User, route:"/mainPage4" }
  ];
  return (
    <div>

        <Button variant='outline' size='icon' onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="fixed top-3 left-2 z-[60]  cursor-pointer">{isSidebarOpen ? <X className='text-muted rounded-sm border border-default size-icon hover:bg-surface'/> : <SidebarIcon className='text-muted hover:bg-surface'/> }</Button>
   <aside className={`fixed z-50 top-0 w-[70%] sm:w-[40%] lg:w-[30%]  flex flex-col justify-evenly  min-h-screen transition-all duration-300 ease-in-out border-1 border-default bg-bg ${!isSidebarOpen ? `translate-x-[-100%]`:``}`}>
    <div className=' px-8 pt-10 pb-6 flex flex-col gap-2 border-b-2 border-default'>
    
    <div><b className="text-primary text-xl sm:text-2xl font-bold">resuMATER</b><p className='text-[10px] text-muted'>learn, Analyze, Achieve</p></div>
    </div>

    <div className=' flex flex-col px-8 py-6 border-b-2 border-default'>
        {
            navItems.map((item) => (
                <NavLink to={item.route} className={({isActive, isPending}) => isActive ? "p-4 bg-surface flex gap-4 rounded-lg text-white cursor-pointer" : "flex gap-4 p-4 text-white cursor-pointer" }>
                    <item.icon/>
                    {item.label}
                </NavLink>
            ))
        }
    </div>

    <div className=' px-6 '>
        <div className='py-8 px-6 rounded-lg bg-surface text-muted text-sm'>
            <p ><b className='font-bold'>150+ </b>platforms available</p>
        </div>

    </div>



   </aside>
   <Outlet/>
    </div>
  )
}

export default Sidebar
