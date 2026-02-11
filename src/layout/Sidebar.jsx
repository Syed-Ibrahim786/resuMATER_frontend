import { Button } from '@/components/ui/button';
import { BookmarkCheck, Briefcase, FileText, Home, SidebarIcon, TrendingUp, User, X } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    

    const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, route:"/dashboard", tag:"" },
    { id: 'platforms', label: 'Job Platforms', icon: Briefcase, route:"/platforms", tag:"" },
    { id: 'saved', label: 'Saved Jobs', icon: BookmarkCheck, route:"/savedJobs", tag:"soon" },
    { id: 'applications', label: 'Applications', icon: TrendingUp, route:"/applications", tag:"" },
    { id: 'resume', label: 'Resume', icon: FileText , route:"/resume",tag:"preview"},
    { id: 'profile', label: 'Profile', icon: User, route:"/profile" ,tag:"soon"}
  ];
  return (
    <div>

        <Button variant='outline' size='icon' onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="fixed top-3 left-2 z-[60]  cursor-pointer">{isSidebarOpen ? <X className='text-muted rounded-sm border border-default size-icon hover:bg-surface'/> : <SidebarIcon className='text-muted hover:bg-surface'/> }</Button>
   <aside className={`fixed z-50 top-0 w-[70%] sm:w-[40%] lg:w-[30%]  flex flex-col justify-evenly  min-h-screen transition-all duration-300 ease-in-out border-1 border-default bg-bg ${!isSidebarOpen ? `translate-x-[-100%]`:``}`}>
    <div className=' px-8 pt-10 pb-6 flex flex-col gap-2 border-b-2 border-default'>
    
    <div><b className="text-primary text-xl sm:text-2xl font-bold">resuMATER</b><p className='text-[10px] text-muted'>learn, Analyze, Achieve</p></div>
    </div>

    <div className=' flex flex-col px-4 md:px-6 py-4 md:py-6 border-b-2 border-default'>
        {
            navItems.map((item) => (
                <NavLink to={item.route} className={({isActive, isPending}) => isActive ? "p-4 bg-surface flex justify-between rounded-lg text-white shadow-2xl cursor-pointer" : " p-4 flex justify-between text-muted cursor-pointer" }>
                    <div className='flex gap-4'>
                    <item.icon/>
                    {item.label}
                    </div>
                    {
                        item.tag &&
                        <p className='text-sm border  rounded-2xl  px-2 border-amber-400'>{item.tag}</p>

                    }

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
