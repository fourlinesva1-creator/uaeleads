'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

/** Extra context a page can attach to a callback request (e.g. the tent calculator's setup). */
export type CallbackContext = {
  /** Merged into the lead payload; replaces formType/channel when given. */
  payload: Record<string, string | number | boolean>;
  location?: string;
  purpose?: string;
  /** One line shown in the modal so the visitor knows what is attached. */
  summary?: string;
};

type ModalContextType = {
  isCallbackOpen: boolean;
  callbackContext: CallbackContext | null;
  openCallback: (context?: CallbackContext) => void;
  closeCallback: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [callbackContext, setCallbackContext] = useState<CallbackContext | null>(null);

  // Ignores click events passed straight from onClick={openCallback}.
  const openCallback = useCallback((context?: CallbackContext) => {
    setCallbackContext(context && 'payload' in context ? context : null);
    setIsCallbackOpen(true);
  }, []);
  const closeCallback = useCallback(() => setIsCallbackOpen(false), []);

  return (
    <ModalContext.Provider value={{ isCallbackOpen, callbackContext, openCallback, closeCallback }}>
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
