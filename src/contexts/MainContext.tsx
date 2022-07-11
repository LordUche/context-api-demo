import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import Overview from '../components/Overview'
import Settings from '../components/Settings'
import Transactions from '../components/Transactions'

type Props = {
  pages: React.ReactNode[]
  users: any[]
}

const initialState: Props = {
  pages: [<Overview />, <Transactions />, <Settings />],
  users: [],
}

export const MainContext = createContext(initialState)

export const MainContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return <MainContext.Provider value={{ ...initialState, users }}>{children}</MainContext.Provider>
}
