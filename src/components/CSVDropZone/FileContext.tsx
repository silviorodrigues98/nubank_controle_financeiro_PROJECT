import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FileObject {
  name: string;
  size: number;
  data: string;
  categoryTotals: Record<string, number>;
}

interface FileContextProps {
  fileObject: FileObject | null;
  setFileObject: React.Dispatch<React.SetStateAction<FileObject | null>>;
}

const FileContext = createContext<FileContextProps | undefined>(undefined);

export const FileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fileObject, setFileObject] = useState<FileObject | null>(null);

  return (
    <FileContext.Provider value={{ fileObject, setFileObject }}>{children}</FileContext.Provider>
  );
};

export const useFile = (): FileContextProps => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFile must be used within a FileProvider');
  }
  return context;
};
