'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

type ModalContextType = {
  isCallbackOpen: boolean;
  openCallback: () => void;
  closeCallback: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const openCallback = useCallback(() => setIsCallbackOpen(true), []);
  const closeCallback = useCallback(() => setIsCallbackOpen(false), []);

  return (
    <ModalContext.Provider value={{ isCallbackOpen, openCallback, closeCallback }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
