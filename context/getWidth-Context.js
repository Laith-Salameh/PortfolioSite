import React, {useContext, useRef} from 'react';
import useWidth from '../customHooks/useWidth';

const WidthContext = React.createContext();

const useGetWidth= () =>{
    return useContext(WidthContext)
}
export default useGetWidth;


export const WidthContextProvider = ({children})=>{
    const container = useRef();
    const width = useWidth(container);
      
      return ( 
            <div ref={container}>
                <WidthContext.Provider  value={width}>
                    {children}
                </WidthContext.Provider>
            </div>
      )
}
;
