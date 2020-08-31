import React, { useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { withRouter, Router } from 'next/router'

import SideMenu from '../../components/layout/SideMenu'

const AdminLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
`

const AdminLayout = (props) => {
  const isAminLogin = props.title.includes('Login')

  useEffect(() => {
    if (props.router.pathname !== '/admin') {
      const isLoggedIn = localStorage.getItem('token') !== null

      if (!isLoggedIn) {
        // window.open(`${window.location.origin}/admin`, '_self')
      }
    }
  }, [])

  return (
    <AdminLayoutContainer>
      <Head>
        <title>{props.title}</title>
      </Head>

      {!isAminLogin && <SideMenu />}

      {props.children}
    </AdminLayoutContainer>
  )
}

export default withRouter(AdminLayout)
