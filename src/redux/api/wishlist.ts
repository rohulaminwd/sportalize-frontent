import { IMeta, IStudent, IUser } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const WISHLIST_URL = "/wishlist";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // CREATE FEEDBACK
    createWishlist: build.mutation({
      query: (data) => ({
        url: `${WISHLIST_URL}/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.wishlist],
    }),

    // Get All Users
    getWishlist: build.query({
      query: () => {
        return {
          url: `${WISHLIST_URL}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.wishlist],
    }),

    // get single User
    myWishlist: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${WISHLIST_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.wishlist],
    }),

    // delete student
    deleteWishlist: build.mutation({
      query: (id) => ({
        url: `${WISHLIST_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.wishlist],
    }),
  }),
});

export const {
  useCreateWishlistMutation,
  useGetWishlistQuery,
  useDeleteWishlistMutation,
  useMyWishlistQuery,
} = userApi;
