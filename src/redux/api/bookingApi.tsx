import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BOOKING_URL = "/bookings";

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // CREATE FEEDBACK
        createOrder: build.mutation({
            query: (data) => ({
                url: `${BOOKING_URL}/create`,
                method: "POST",
                data: data,
            }),
            invalidatesTags: [tagTypes.bookingItem],
        }),

        // Get All Users
        Bookings: build.query({
            query: () => {
                return {
                    url: `${BOOKING_URL}`,
                    method: "GET",
                };
            },
            providesTags: [tagTypes.reviews],
        }),

        // get single User
        Booking: build.query({
            query: (id: string | string[] | undefined) => ({
                url: `${BOOKING_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.reviews],
        }),

        // update user
        updateBooking: build.mutation({
            query: (data: any) => ({
                url: `${BOOKING_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.reviews],
        }),

        // delete student
        deleteBooking: build.mutation({
            query: (id) => ({
                url: `${BOOKING_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.reviews],
        }),
    }),
});

export const {
    useCreateOrderMutation, useBookingsQuery, useUpdateBookingMutation, useDeleteBookingMutation
} = userApi;
