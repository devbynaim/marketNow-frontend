import { useEffect } from "react"
import { useGetProductQuery, useGetProductsQuery } from "./features/products/api"

const App = () => {
  const {data,isLoading} = useGetProductQuery('product-1')
  useEffect(()=>{
   console.log("innter",data);
    
  })
  return (
    <div>
      {isLoading&&"loading"}
    </div>
  )
}

export default App