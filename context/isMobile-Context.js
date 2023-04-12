import React, {useContext, useRef} from 'react';
import useMobile from '../customHooks/useMobile.js';

const MobileContext = React.createContext();

const useIsMobile= () =>{
    return useContext(MobileContext)
}
export default useIsMobile;


export const MobileContextProvider = ({children})=>{
    const container = useRef();
    const isMobile = useMobile(container);
      
      return ( 
            <div ref={container}>
                <MobileContext.Provider  value={isMobile}>
                    {children}
                </MobileContext.Provider>
            </div>
      )
}
;
