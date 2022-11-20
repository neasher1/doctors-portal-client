import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgbbHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>;
    }

    const handleMakeAdmin = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: imgData.data.url,
                        userEmail: user?.email,
                    }

                    //save doctor information in database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`,
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success(`${data.name} is added successfully`);
                                navigate('/dashboard/manage-doctors');
                            }
                            else {
                                toast.error("Something is wrong");
                            }
                        })
                        .catch(error => console.log(error));
                }
            })
    }


    return (
        <div className='mx-8 card shadow-2xl p-8 mt-4'>
            <h3 className="text-2xl mb-4">Add a New Doctor</h3>
            <div className='w-96 card shadow-2xl p-8'>
                <form onSubmit={handleSubmit(handleMakeAdmin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: "Please provided your name",
                            })}
                            type="text" className="input input-bordered w-full max-w-xs" placeholder='Enter Name' />
                        {errors.name && <span className='text-error'>{errors.name.message}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs my-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: "email address is required"
                            })}
                            type="email" className="input input-bordered w-full max-w-xs" placeholder='Email' />
                        {errors.email && <span className='text-error'>{errors.email.message}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select
                            {...register("specialty", {
                                required: "specialty is required"
                            })}
                            className="select select-bordered w-full max-w-xs">
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }
                        </select>
                        {errors.specialty && <span className='text-error'>{errors.specialty.message}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs my-2">
                        <label className="label">
                            <span className="label-text">Upload Image</span>
                        </label>
                        <input
                            {...register("image", {
                                required: "Image is required"
                            })}
                            type="file" className="input input-bordered w-full max-w-xs" />
                        {errors.img && <span className='text-error'>{errors.img.message}</span>}
                    </div>

                    <input className='btn btn-accent w-full text-white my-4' type="submit" value="Add Doctor" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;