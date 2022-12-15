import { GlobalContext } from "./GlobalContext";

const GlobalProvider = ({ children, servers }) => {
  return (
    <GlobalContext.Provider value={servers}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
