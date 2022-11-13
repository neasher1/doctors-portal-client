import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Reviews from './Reviews';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            img: people1,
            userReview: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
        },
        {
            _id: 2,
            name: "Henry Nichols",
            img: people2,
            userReview: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "Canada",
        },
        {
            _id: 3,
            name: "Mariom",
            img: people3,
            userReview: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "United States",
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <h4 className="text-xl font-bold text-primary">Testimonial</h4>
                    <h2 className="text-3xl lg:text-4xl">What Our Patient Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;