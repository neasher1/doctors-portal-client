import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (data, event) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success("Successfully Created a User");
                console.log(user);
                event.target.reset();
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/');
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className='h-[500px] flex justify-center items-center my-16'>
            <div className='w-96 card shadow-2xl p-8'>
                <h2 className="text-4xl font-bold text-accent mb-4 text-center">Register</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: "Please provided your name",
                            })}
                            type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='text-error'>{errors.name.message}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: "email address is required"
                            })}
                            type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-error'>{errors.email.message}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: "password is required",
                                pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/, message: "Password should be minimum six characters, at least one uppercase, one lowercase and one number" },
                                minLength: { value: 6, message: "password should be at least 6 characters or long" },
                            })}
                            type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <span className='text-error'>{errors.password.message}</span>}
                    </div>

                    <input className='btn btn-accent w-full text-white my-4' type="submit" value="Register" />
                </form>
                <span className='text-sm my-2 text-center'>Already have an account? <Link to="/login" className='text-primary'>Please Login</Link> </span>
                <div className="divider">OR</div>
                <button className='uppercase btn btn-outline text-sm'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;