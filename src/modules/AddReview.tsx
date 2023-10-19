"use client"

import TextAreaField from "@/components/profile/TextAreaField";
import ProgressSpeener from "@/components/ui/ProgressSpeener";
import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import { getUserInfo } from "@/service/auth.service";
import { message } from "antd";
import { useState } from "react";


const AddReview = ({ setReviewItem, reviewItem }: any) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [rating, setRating] = useState<string>("1-1-1-1-1")
    const [review, setReview] = useState<string>()
    const [error, setError] = useState<string>()
    const userInfo: any = getUserInfo()
    const id = userInfo ? userInfo?.userId : ''
    const [createReview] = useCreateReviewMutation(reviewItem?.id)

    const handleAddReview = async () => {
        setLoading(true)
        const reviewData = {
            userId: id,
            bookingItemId: reviewItem,
            review,
            rating,
        }
        try {
            const res: any = await createReview(reviewData);
            console.log(res)
            if (res) {
                setLoading(false)
                setReviewItem(null)
                message.success("Review Add successfully!");
            }
            setLoading(false)
            console.log(res);
        } catch (err: any) {
            setLoading(false)
            console.error(err.message);
            setError(err?.message)
        }
    }

    return (
        <div>
            <input type="checkbox" id="review-module" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box bg-[#5335c0f3]">
                    <div>
                        <TextAreaField label={"Add Your Review"} value={review} setValue={setReview} />
                        <div className="flex justify-end">
                            <div className="rating mt-4 text-right">
                                <input onClick={() => setRating('1')} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input onClick={() => setRating('1-1')} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input onClick={() => setRating('1-1-1')} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input onClick={() => setRating("1-1-1-1")} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input onClick={() => setRating("1-1-1-1-1")} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                        <ProgressSpeener loading={loading} />
                    </div>
                    {
                        error && <p className='text-[#e24242]'>{error}</p>
                    }
                    <div className="flex items-center justify-center gap-3">
                        <button onClick={handleAddReview} className="btn btn-success w-[100px] text-white btn-sm">Send</button>
                        <label htmlFor="review-module" className="btn btn-sm w-[100px] ">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;