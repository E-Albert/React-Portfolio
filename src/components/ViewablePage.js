import React from 'react'
import DisplayField from './DisplayField'
import Sidebar from './Sidebar'

const ViewablePage = () => {

    return (
        <>
            <div className="View">
                <Sidebar />
                <DisplayField />
            </div>
        </>
    )
}

export default ViewablePage;