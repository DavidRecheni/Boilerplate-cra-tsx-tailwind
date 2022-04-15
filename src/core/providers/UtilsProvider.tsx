import {
  createContext, useContext, useState, useMemo,
} from 'react'

const utilsContext = createContext({})

const UtilsProvider: React.FC<{children?: React.ReactNode;}> = ({ children }) => {
  const loading = useState(false)
  const modal = useState({ open: false })

  const staticValues = useMemo(() => ({ loading, modal }), [])

  return (
    <utilsContext.Provider value={staticValues}>
      {children}
    </utilsContext.Provider>
  )
}

export default UtilsProvider
export const useUtils = () => useContext(utilsContext)
