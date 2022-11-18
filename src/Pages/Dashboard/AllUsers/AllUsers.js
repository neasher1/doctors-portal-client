import { useQuery } from '@tanstack/react-query';
import id from 'date-fns/esm/locale/id/index.js';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = _id => {
        fetch(`http://localhost:5000/users/admin/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Make Admin successfully");
                    refetch();
                }
            })
    }

    return (
        <div>
            <h3 className="text-2xl mb-4">All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role !== 'admin' &&
                                    <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary text-white'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs btn-error text-white'>Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;