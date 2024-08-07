import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productsAPI = () => createApi(
    {
        reducerPath: "productAPI",
        baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5005" }),
        endPoints: (builder) => ({
            getAllProducts: builder.query(
                {
                    query: () => "products"
                }
            )
        })
    }
)

export const { useGetAllProductsQuery } = productsAPI