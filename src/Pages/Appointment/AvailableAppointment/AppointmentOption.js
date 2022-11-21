import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {

    const { user } = useContext(AuthContext);
    const { name, slots, price } = appointmentOption;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center text-primary font-bold text-xl">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <p>Price: ${price}</p>
                {
                    user?.email ?
                        <div className="card-actions justify-center">
                            <label
                                disabled={slots.length === 0}
                                onClick={() => setTreatment(appointmentOption)}
                                htmlFor="booking-modal"
                                className="btn btn-primary text-white"
                            >Book Appointment</label>
                        </div>
                        :
                        <div className='card-actions justify-center'>
                            <Link to='/login' className='btn btn-primary text-white'>Login to Book Appointment</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default AppointmentOption;