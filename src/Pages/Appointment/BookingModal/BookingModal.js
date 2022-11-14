import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.selectedSlot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phn = form.phn.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phn,
        }
        // TODO: send data to the server
        // and once it is saved then close the modal and display success toast
        console.log(booking);
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 my-4'>
                        <input type="text" className="input input-bordered w-full" value={date} disabled />
                        <select name='selectedSlot' className="select select-bordered w-full">
                            {
                                slots.map((slot, idx) => <option
                                    key={idx}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="name" name='name' placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="text" name='phn' placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" className="btn btn-accent text-white" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;