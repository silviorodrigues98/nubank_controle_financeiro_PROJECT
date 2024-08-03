import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UploadContextProps {
  isUploaded: boolean;
  setIsUploaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadContext = createContext<UploadContextProps | undefined>(undefined);

export const UploadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isUploaded, setIsUploaded] = useState(false);

  return (
    <UploadContext.Provider value={{ isUploaded, setIsUploaded }}>
      {children}
    </UploadContext.Provider>
  );
};

export const useUpload = (): UploadContextProps => {
  const context = useContext(UploadContext);
  if (!context) {
    throw new Error('useUpload must be used within an UploadProvider');
  }
  return context;
};
