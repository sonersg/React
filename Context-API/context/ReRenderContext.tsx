import React, {ReactNode, createContext, useState} from 'react';

type ReRenderContextType = {
  reRender: boolean;
  setReRender: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ReRenderContext = createContext<ReRenderContextType>({
  reRender: false,
  setReRender: () => {},
} as ReRenderContextType);

// export const ReRenderContext = createContext<Partial<ReRenderContextType>>({})

type ReRenderProviderProps = {
  children: ReactNode;
};
export default function ReRenderProvider({children}: ReRenderProviderProps) {
  const [reRender, setReRender] = useState(false);

  const values = {
    reRender,
    setReRender,
  };

  return (
    <ReRenderContext.Provider value={values}>
      {children}
    </ReRenderContext.Provider>
  );
}
