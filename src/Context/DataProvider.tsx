import React, {
  createContext,
  useState,
  ReactNode,
} from "react";

type DataContextType = {
  questions: any;
  setQuestions: any;
  loading: boolean;
  setLoading: any;
};
const DataContext = createContext<Partial<DataContextType>>(
  {}
);

type Props = {
  children: ReactNode;
};
const DataProvider = ({ children }: Props) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <DataContext.Provider
      value={{
        questions,
        setQuestions,
        loading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
export { DataContext };
