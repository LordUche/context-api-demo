import Link from 'next/link'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavContext } from '../contexts/NavContext'

const Wrapper = styled.div`
  background-color: lightblue;
  display: grid;
`

const Sidebar: React.FC = () => {
  const { items, selectItem } = useContext(NavContext)
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Link key={index} href={`?tab=${index}`}>
          {item}
        </Link>
      ))}
    </Wrapper>
  )
}

export default Sidebar
