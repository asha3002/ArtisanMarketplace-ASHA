import React from 'react'
import AdminDashboard from './AdminDashboard'
import Adminpage from './Adminpage'
import ArtistAllRequests from './ArtistAllRequests'

function AdminMain() {
  return (
    <div>
        <div className='row'>
            <div className='col-2'>
                <AdminDashboard/>
            </div>
            <div className='col-10'>
                <Adminpage/>
                
            </div>
        </div>
    </div>
  )
}

export default AdminMain