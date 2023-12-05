import React from 'react';
import { Button } from '../../components/Button';

export const Login = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="flex flex-col justify-center items-start rounded-2xl border-2 border-neutral-300 w-3/12 min-w-min m-40 p-8 shadow-xl">
                {/*max-2xl:flex-col */}
                <p className="text-2xl font-medium p-5">Sign In</p>
                <label className="flex items-start">Email adress</label>
                <input
                    placeholder="Enter email"
                    className="rounded-xl border-2 border-neutral-300 p-1 mb-2 w-full"
                ></input>
                <label>Password</label>
                <input
                    placeholder="Password"
                    className="rounded-xl border-2 border-neutral-300 p-1 w-full"
                ></input>
                <div className="w-full">
                    <button className="bg-indigo-600 w-full rounded-xl p-1 m-2">
                        Submit
                    </button>
                </div>
                <p>
                    Forgot <a className="text-blue-400 underline">password?</a>
                </p>
            </div>
        </div>
    );
};
