import React from 'react'

import AdminLayout from '../../components/layout/AdminLayout'
import { AdminContainer } from './admin.style'

const Admin = () => {
  return (
    <AdminLayout title='Login | Admin'>
      <AdminContainer>
        <div className='login-form'>
          <h1>Login</h1>

          <div className='form-field'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
          </div>

          <div className='form-field'>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' />
          </div>

          <div className='form-field'>
            <button>Login</button>
          </div>
        </div>
      </AdminContainer>
    </AdminLayout>
  )
}

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   console.log(params)
//   return params
// }

export default Admin
