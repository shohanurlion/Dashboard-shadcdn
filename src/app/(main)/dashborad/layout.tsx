import React from 'react'
import Header from './_components/Header'
import { ThemeProvider } from '@/components/ui/theme-provider'
import SideBar from './_components/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

const Layout = ({children}: { children: React.ReactNode }) => {
  return (
    <div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SidebarProvider>
        <SideBar />
         <main className='w-full'>
         <Header />
       <div className='p-4'> {children}</div>
       </main>
        </SidebarProvider>
       </ThemeProvider>
    </div>
  )
}

export default Layout