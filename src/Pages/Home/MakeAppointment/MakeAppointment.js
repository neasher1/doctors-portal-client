import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='my-16 md:my-32 bg-no-repeat bg-cover bg-center' style={{ background: `url(${appointment})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img src={doctor} className="-mt-28 lg:w-1/2 hidden md:block rounded-lg " alt='' />
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Appointment</h3>
                        <h1 className="text-3xl lg:text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;