import { apiSlilce } from "../api/api";
import { setCartData } from "./slice";

const cartApi = apiSlilce.injectEndpoints({
  endpoints: (builder) => ({
    cart: builder.query<void, { userid: string }>({
      query: ({ userid }) => ({
        url: `/carts?populate=product&filters[userid]=${userid}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        console.log(" res",response);
        
        let total = 0;
        0;
        const transformData = response.data.map((item) => {
          const {
            id: cartid,
            attributes: {
              quantity,
              product: {
                data: {
                  id,
                  attributes: {
                    name,
                    price,
                    productid,
                    stock_quantity,
                    discount,
                  },
                },
              },
            },
          } = item;

          total += quantity;
          return {
            cartid,
            id,
            quantity,
            name,
            price,
            productid,
            stock_quantity,
            discount,
          };
        });
        return {
          total,
          carts: transformData,
        };
      },
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {        
        try {
          const {
            data: { total, carts },
          } = await queryFulfilled;
          dispatch(setCartData({ total, carts }));
        } catch (err) {}
        
      },

      providesTags: ["cart"],
    }),
    addTocart: builder.mutation({
      query: ({ id, quantity, userid }) => ({
        url: `/carts`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            quantity,
            userid: "naim999",
            product: id,
          },
        }),
      }),

      invalidatesTags: ["cart"],
    }),
    updateQuantity: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `/carts/${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            quantity,
          },
        }),
      }),

      invalidatesTags: ["cart"],
    }),
    removeFromCart: builder.mutation({
      query: ({ id }) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    })
  }),
});

export const { useCartQuery, useAddTocartMutation, useUpdateQuantityMutation,useRemoveFromCartMutation } =
  cartApi;
