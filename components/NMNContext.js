
import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';


const NMNContext = createContext();

export const NMNContextProvider = ({ children }) => {

 const [categories,setCategories] = useState([]);


 async function getCategories(){

    const {data,error} = await supabase.from('categories').select('*');
    if(data){
        setCategories(data)
    }
 }

 useEffect(()=>{

    getCategories()
 },[])


  return (
    <NMNContext.Provider 
    value={{categories}}>
      {children}
    </NMNContext.Provider>
  );
};
export const useNMNContext = () => {
    // Consume the context
    const context = useContext(NMNContext);
    if (!context) {
      throw new Error('useSharedState must be used within a SharedStateProvider');
    }
    return context;
  };

