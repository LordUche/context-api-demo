import { NextPage } from 'next'
import React from 'react'
import MainContent from '../components/MainContent'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { NavContextProvider } from '../contexts/NavContext'
import { MainContextProvider } from '../contexts/MainContext'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
  gap: 20px;
`

const HomePage: NextPage = () => {
  return (
    <NavContextProvider>
      <MainContextProvider>
        <Wrapper>
          <Sidebar />
          <MainContent />
        </Wrapper>
      </MainContextProvider>
    </NavContextProvider>
  )
}

export default HomePage
