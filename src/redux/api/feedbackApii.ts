import { IMeta, IStudent, IUser } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const FEEDBACK_URL = "/feedback";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // CREATE FEEDBACK
    createFeedback: build.mutation({
      query: (data) => ({
        url: `${FEEDBACK_URL}/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.bookingItem],
    }),

    // Get All Users
    feedbacks: build.query({
      query: () => {
        return {
          url: `${FEEDBACK_URL}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.feedback],
    }),

    // get single User
    Feedback: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${FEEDBACK_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.feedback],
    }),

    // update user
    updateFeedback: build.mutation({
      query: (data: any) => ({
        url: `${FEEDBACK_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),

    // delete student
    deleteFeedback: build.mutation({
      query: (id) => ({
        url: `${FEEDBACK_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
  }),
});

export const {
  useFeedbackQuery,
  useCreateFeedbackMutation,
  useFeedbacksQuery,
  useDeleteFeedbackMutation,
  useUpdateFeedbackMutation,
} = userApi;
