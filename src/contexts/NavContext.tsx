import React, { createContext, PropsWithChildren, useState } from 'react'

const initialState = {
  items: ['Home', 'About', 'Contact'],
  selectedIndex: 0,
  selectItem: (index: number) => {},
}

export const NavContext = createContext<{
  items: React.ReactNode[]
  selectedIndex: number
  selectItem: (index: number) => void
}>(initialState)

export const NavContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectItem = (index: number) => {
    setSelectedIndex(index)
  }

  return <NavContext.Provider value={{ ...initialState, selectedIndex, selectItem }}>{children}</NavContext.Provider>
}
