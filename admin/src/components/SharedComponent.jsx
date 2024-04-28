import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './topbar/Topbar'
import Sidebar from './sidebar/Sidebar'

function SharedComponent() {
    return (
        <>
            <Topbar />
            <Outlet />
            <Sidebar />
        </>
    )
}

export default SharedComponent
