import React from 'react';
import chair from '../../../assets/images/chair.png';
import chairBg from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className='bg-no-repeat bg-cover bg-center rounded-lg py-4' style={{ backgroundImage: `url(${chairBg})` }}>
            <div className="hero my-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;