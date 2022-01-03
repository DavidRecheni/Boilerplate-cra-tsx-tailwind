import {
  createContext, useContext, useState, useMemo, FunctionComponent,
} from 'react';

const utilsContext = createContext({});

const UtilsProvider: FunctionComponent = ({ children }) => {
  const loading = useState(false);
  const modal = useState({ open: false });

  const staticValues = useMemo(() => ({ loading, modal }), []);

  return (
    <utilsContext.Provider value={staticValues}>
      {children}
    </utilsContext.Provider>
  );
};

export default UtilsProvider;
export const useUtils = () => useContext(utilsContext);
