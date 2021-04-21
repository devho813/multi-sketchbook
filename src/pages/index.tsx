import styled from '@emotion/styled'
import React from 'react'
import Nav from '../components/Nav'
import SketchBook from '../components/SketchBook'
function Home() {
  return (
    <HomeContainer>
      <Nav />
      <SketchBook />
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: black;
`
