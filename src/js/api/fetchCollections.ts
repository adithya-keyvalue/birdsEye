import { baseApi } from "../../services/api";

const CollectionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCollections: builder.query<any, void>({
      query: (params) => {
        return {
          url: "collections?userId=0b94cd7c-2ae6-46ae-ae6c-0e142000244b",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useLazyGetCollectionsQuery } = CollectionsApi;
