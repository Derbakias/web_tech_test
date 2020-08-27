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
  editView: {
    status: boolean;
    item: any;
  };
  setEditView: any;
  error: string;
  setError: any;
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
  const [editView, setEditView] = useState({
    status: false,
    item: undefined,
  });
  const [error, setError] = useState("");

  return (
    <DataContext.Provider
      value={{
        questions,
        setQuestions,
        loading,
        setLoading,
        editView,
        setEditView,
        error,
        setError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
export { DataContext };
