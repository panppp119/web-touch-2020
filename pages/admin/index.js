import React from 'react'

import CoreLayout from '../../components/layout/CoreLayout'
import { AdminContainer } from './admin.style'

const Admin = () => {
  return (
    <CoreLayout title='Careers Page'>
      <AdminContainer>
        <h1>Admin Page</h1>
      </AdminContainer>
    </CoreLayout>
  )
}

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   console.log(params)
//   return params
// }

export default Admin
