import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const CoreLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
`

const CoreLayout = (props) => {
  return (
    <CoreLayoutContainer>
      <Head>
        <title>{props.title}</title>
      </Head>

      {props.children}
    </CoreLayoutContainer>
  )
}

export default CoreLayout
