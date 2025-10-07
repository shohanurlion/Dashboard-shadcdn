'use client'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Bell, LogOut, Monitor, Moon, Settings, Sun, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

const Header = () => {
     const { setTheme } = useTheme()
  return (
    <div className='w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4'>
        <div>
           <SidebarTrigger/>    
        </div>
        <div className='flex items-center gap-4'>
            <h1 className='text-2xl font-bold'>Dashborad</h1>
            <Bell />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                        <Sun className="w-5 h-5 block dark:hidden" />
                        <Moon className="w-5 h-5 hidden dark:block" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="w-40 mt-2 rounded-lg bg-gray-800 text-white shadow-lg ring-1 ring-black/10 border border-gray-700 p-2 z-50"
                >
                    <DropdownMenuLabel className="font-semibold px-2 py-1 text-gray-300">
                        Theme
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="my-1 h-px bg-gray-700" />
                    <DropdownMenuRadioGroup>
                        <DropdownMenuRadioItem value="light" className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer transition-colors" onClick={() => setTheme("light")}>
                            <Sun className="w-4 h-4" /> Light
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="dark" className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer transition-colors" onClick={() => setTheme("dark")}>
                            <Moon className="w-4 h-4" /> Dark
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="system" className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer transition-colors" onClick={() => setTheme("system")}>
                            <Monitor className="w-4 h-4" /> System
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="w-9 h-9 rounded-full border-2 border-white shadow-md transition-transform hover:scale-105 cursor-pointer">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            className="object-cover w-full h-full rounded-full"
                            alt="User Avatar"
                        />
                        <AvatarFallback className="bg-gray-600 text-white font-semibold flex items-center justify-center w-full h-full rounded-full">
                            CN
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="w-52 mt-2 rounded-lg bg-gray-800 text-white shadow-lg ring-1 ring-black/10 border border-gray-700 p-2 z-50"
                >
                    <DropdownMenuLabel className="font-semibold px-2 py-1 text-gray-300">
                        My Account
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="my-1 h-px bg-gray-700" />
                    <DropdownMenuItem className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer transition-colors">
                        <User className="w-4 h-4" /> Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer transition-colors">
                        <Settings className="w-4 h-4" /> Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-red-600 hover:text-white cursor-pointer transition-colors">
                        <LogOut className="w-4 h-4" /> Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
  )
}

export default Header