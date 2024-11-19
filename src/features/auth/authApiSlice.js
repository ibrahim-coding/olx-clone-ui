import { apiSlice } from "../../app/api/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => {
        return {
          url: "/user/login",
          method: "POST",
          body: {
            email,
            password,
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
