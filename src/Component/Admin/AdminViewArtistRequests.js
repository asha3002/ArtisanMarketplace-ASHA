import React from 'react'
import ArtistAllRequests from './ArtistAllRequests'
import AdminDashboard from './AdminDashboard'
import Adminpage from './Adminpage'

function AdminViewArtistRequests() {
  return (
    <div>
         <div className='row'>
            <div className='col-2'>
                <AdminDashboard/>
            </div>
            <div className='col-10'>
            
                <ArtistAllRequests/>
            </div>
        </div>
    </div>
  )
}

export default AdminViewArtistRequests