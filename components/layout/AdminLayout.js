import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const AdminLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
`

const AdminLayout = (props) => {
  return (
    <AdminLayoutContainer>
      <Head>
        <title>{props.title}</title>
      </Head>

      {props.children}
    </AdminLayoutContainer>
  )
}

export default AdminLayout
