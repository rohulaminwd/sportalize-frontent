import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BOOKING_ITEM_URL = "/bookingItems";

export const bookingItemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get All bookingItems
    getBookingItems: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${BOOKING_ITEM_URL}`,
          method: "GET",
          params: arg,
        };
      },
      // transformResponse: (response: IStudent[], meta: IMeta) => {
      //   return {
      //     students: response,
      //     meta,
      //   };
      // },
      providesTags: [tagTypes.bookingItem],
    }),

    // get single bookingItem
    bookingItem: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BOOKING_ITEM_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    // update bookingItems
    updateBookingItems: build.mutation({
      query: (data) => ({
        url: `${BOOKING_ITEM_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // delete bookingItem
    deleteBookingItems: build.mutation({
      query: (id) => ({
        url: `${BOOKING_ITEM_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetBookingItemsQuery,
  useBookingItemQuery,
  useUpdateBookingItemsMutation,
  useDeleteBookingItemsMutation,
} = bookingItemApi;
