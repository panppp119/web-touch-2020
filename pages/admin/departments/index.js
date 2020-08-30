import React from 'react'

import AdminLayout from '../../../components/layout/AdminLayout'
// import { AdminContainer } from './admin.style'

const AdminDepartment = () => {
  return (
    <AdminLayout title='Deparments | Admin'>
      <h1>Departments</h1>
    </AdminLayout>
  )
}

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   console.log(params)
//   return params
// }

export default AdminDepartment
