import Codegeneration from "../components/Codegeneration"
import { MultiStepLoaderDemo } from "../components/Loader"
import { useState } from "react"
const AIcode = () => {
    const [loading,setLoading] = useState(true)
    setTimeout(()=>{
        setLoading(false)
    },10000)
  return (
    <div>
        {
            loading ? (
                <MultiStepLoaderDemo/>
            ):(
                <div>
                   <Codegeneration/>
                </div>
            )
        }
      
    </div>
  )
}

export default AIcode
