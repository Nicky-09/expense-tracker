import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getCategories } from "../../../server/controllers/controller";

const baseURI = "http://localhost:7001";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    //get categories
    getCategories: builder.query({
      query: () => "./api/categories",
    }),
    //get labels
    getLabels: builder.query({
      query: () => "./api/labels",
    }),

    //add new transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: "./api/transaction",
        method: "POST",
        body: initialTransaction,
      }),
    }),

    // delete transaction
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: "./api/transaction",
        method: "DELETE",
        body: recordId,
      }),
    }),
  }),
});

export default apiSlice;
