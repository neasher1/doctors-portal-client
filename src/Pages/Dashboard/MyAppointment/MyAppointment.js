import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='card shadow-2xl p-8 m-4'>
            <h3 className="text-2xl mb-4">My Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Time</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Payment</th>
                            <th>TransactionId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, idx) => <tr key={booking._id}>
                                <th>{idx + 1}</th>
                                <td>{booking?.patient}</td>
                                <td>{booking?.treatment}</td>
                                <td>{booking?.slot}</td>
                                <td>{booking?.phn}</td>
                                <td>{booking?.appointmentDate}</td>
                                <td>
                                    {
                                        booking?.price && !booking?.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-primary text-white btn-sm'>Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking?.price && booking?.paid &&
                                        <button className='btn btn-accent btn-sm'>Paid</button>
                                    }
                                </td>
                                <td>
                                    {
                                        booking?.paid &&
                                        <button className=''>{booking.transactionId}</button>
                                    }
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;