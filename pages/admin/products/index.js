import React from 'react'

import AdminLayout from '../../../components/layout/AdminLayout'
// import { AdminContainer } from './admin.style'

const AdminProducts = () => {
  return (
    <AdminLayout title='Products | Admin'>
      <h1>Products</h1>
    </AdminLayout>
  )
}

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   console.log(params)
//   return params
// }

export default AdminProducts
