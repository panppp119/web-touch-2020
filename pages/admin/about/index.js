import React from 'react'

import AdminLayout from '../../../components/layout/AdminLayout'
// import { AdminContainer } from './admin.style'

const AdminAbout = () => {
  return (
    <AdminLayout title='About | Admin'>
      <h1>About</h1>
    </AdminLayout>
  )
}

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   console.log(params)
//   return params
// }

export default AdminAbout
