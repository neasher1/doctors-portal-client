import React from 'react';

const Reviews = ({ review }) => {

    const { name, img, userReview, location } = review;

    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex items-center gap-4 mt-4">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl">{name}</h3>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;