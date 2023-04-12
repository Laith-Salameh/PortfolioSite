import React, {useContext, useRef} from 'react';
import useTablet from '../customHooks/useTablet.js';

const TabletContext = React.createContext();

const useIsTablet= () =>{
    return useContext(TabletContext)
}
export default useIsTablet;


export const TabletContextProvider = ({children})=>{
    const container = useRef();
    const isTablet = useTablet(container);
      
      return ( 
            <div ref={container}>
                <TabletContext.Provider  value={isTablet}>
                    {children}
                </TabletContext.Provider>
            </div>
      )
}
;
