import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67ed28164387d9117bbc7da1.mockapi.io/api/v1/",
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
      providesTags: ["Todos"],
    }),

    getTodoById: builder.query({
      query: (id) => `todos/${id}`,
    }),

    createTodo: builder.mutation({
      query: (newTodo) => ({
        url: "todos",
        method: "POST",
        body: newTodo,
      }),
      //invalidatesTags: ["Todos"],
    }),

    updateTodo: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Todos"],
    }),

    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = api;
