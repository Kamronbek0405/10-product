import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Footer } from '../footer'
export const MainLayout = () => {
    return (
        <>
            <header className=' shadow-lg shadow-gray-300 h-24 flex items-center  justify-between z-10 px-7'>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
