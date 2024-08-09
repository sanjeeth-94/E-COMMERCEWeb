import { createContext, useContext, useState } from 'react';

const DataContext = createContext({
  cartCountList: [],
  setCartCountList: () => {},
});

export const DataProvider = ({ children }) => {
  const [cartCountList, setCartCountList] = useState(null);

  return (
    <DataContext.Provider value={{ cartCountList, setCartCountList }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
