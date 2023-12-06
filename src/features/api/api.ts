import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlilce = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_BASEAPIURL
    }),
    endpoints:()=>({})
})