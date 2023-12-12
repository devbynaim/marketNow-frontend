import { apiSlilce } from "../api/api";

const productsApi = apiSlilce.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], number>({
      query: (pageNumber = 1) =>
        `products?populate=thumbnail&pagination[page]=${pageNumber}&pagination[pageSize]=10`,
      transformResponse: (response) => {
        const transformData = response.data.map((item) => {
          const {
            discount,
            name,
            price,
            productid,
            publishedAt,
            stock_quantity,
            thumbnail: {
              data: {
                attributes: {
                  formats: { thumbnail },
                },
              },
            },
          } = item.attributes;

          return {
            discount,
            name,
            price,
            productid,
            publishedAt,
            stock_quantity,
            thumbnail: `${import.meta.env.VITE_BASEURL}${thumbnail.url}`,
          };
        });

        return transformData;
      },
    }),
    getProduct: builder.query<Product, string>({
      query: (productId) =>
        `products?populate=*&filters[productid]=${productId}`,
      transformResponse: (response) => {
        const product = response.data[0].attributes;
        const {
          name,
          description,
          price,
          stock_quantity,
          category,
          brand,
          discount,
          variants,
          images,
        } = product;
        return {
          name,
          description,
          price,
          stock_quantity,
          category,
          brand,
          discount,
          images: images.data.map(({ attributes }) => {
            const {
              url: original,
              formats: {
                thumbnail: { url: thumbnail },
              },
            } = attributes;
            return {
              original: `${import.meta.env.VITE_BASEURL}${original}`,
              thumbnail: `${import.meta.env.VITE_BASEURL}${thumbnail}`,
            };
          }),
          variants: variants.data.map((item) => item.attributes),
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
