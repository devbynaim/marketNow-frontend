import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
  

export const apiSlilce = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3500/"}),
    endpoints:()=>({})
})