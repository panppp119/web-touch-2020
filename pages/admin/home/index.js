import React from 'react'

import AdminLayout from '../../../components/layout/AdminLayout'
// import { AdminContainer } from './admin.style'

const AdminHome = () => {
  return (
    <AdminLayout title='Home | Admin'>
      <h1>Home</h1>
    </AdminLayout>
  )
}

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   console.log(params)
//   return params
// }

export default AdminHome
