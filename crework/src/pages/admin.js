import React from 'react'
import AdminContact from '../components/AdminContact'
import AdminJoin from '../components/AdminJoin'
import AdminTalent from '../components/AdminTalent'

const Admin = () => {
  return (
    <div>
      <div>
        <AdminContact/>
      </div>
      <div>
        <AdminJoin/>
      </div>
      <div>
        <AdminTalent/>
      </div>
    </div>
  )
}

export default Admin
