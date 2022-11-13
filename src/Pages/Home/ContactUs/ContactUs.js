import React from 'react';
import bg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section className='bg-no-repeat bg-cover bg-center rounded-lg py-4 mt-28 p-8' style={{ backgroundImage: `url(${bg})` }}>
            <div className='text-center my-4'>
                <h4 className="text-xl font-bold text-primary">Contact Us</h4>
                <h3 className="text-3xl text-white">Stay connected with us</h3>
            </div>
            <div className="w-4/5 md:w-2/5 lg:w-1/4 mx-auto m-8">
                <div className="form-control">
                    <input type="text" placeholder="email" className="input input-bordered" />
                    <input type="text" placeholder="subject" className="input input-bordered my-6" />
                    <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                </div>
                <div className="form-control mt-6">
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;