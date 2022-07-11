import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { MainContext } from '../contexts/MainContext'
import { NavContext } from '../contexts/NavContext'

const Wrapper = styled.div`
  display: grid;
  /* place-items: center; */
`

const MainContent: React.FC = () => {
  const { users } = useContext(MainContext)
  const { query } = useRouter()
  return (
    <Wrapper>
      <pre>{JSON.stringify(users[Number(query.tab) ?? 0], null, 3)}</pre>
    </Wrapper>
  )
}

export default MainContent
