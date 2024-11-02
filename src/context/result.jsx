import { createContext,useState } from "react";



export let ContextResult = createContext();



let ResultContext = ({children})=>{
    let [result , setResult] = useState(0)
  return ( 
  <ContextResult.Provider value={{result , setResult}}>
        {children }
    </ContextResult.Provider>
  )
}
export default ResultContext