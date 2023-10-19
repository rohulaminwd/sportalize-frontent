import { IMeta, IStudent, IUser } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REVIEW_URL = "/feedback";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // CREATE FEEDBACK
    createReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.reviews],
    }),

    // Get All Users
    reviews: build.query({
      query: () => {
        return {
          url: `${REVIEW_URL}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.reviews],
    }),

    // get single User
    review: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.reviews],
    }),

    // update user
    updateReview: build.mutation({
      query: (data: any) => ({
        url: `${REVIEW_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.reviews],
    }),

    // delete student
    deleteReview: build.mutation({
      query: (id) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.reviews],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useReviewQuery,
  useReviewsQuery,
} = userApi;
