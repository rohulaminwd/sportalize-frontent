import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // user login
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // User Sign up
    userSignup: build.mutation({
      query: (signUPData) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        data: signUPData,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // password change
    changePassword: build.mutation({
      query: (data: any) => ({
        url: `${AUTH_URL}/change-password/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserSignupMutation,
  useChangePasswordMutation,
} = authApi;
