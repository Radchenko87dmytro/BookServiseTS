import React, { useState, useMemo } from 'react';
import { Button } from '../../components/Button';

export const Login = () => {
    const [emailValue, setEmailValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        //React.MouseEvent<HTMLButtonElement, MouseEvent>
        setEmailValue(event.target.value);
    };

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value);
    };

    const saveDataInput = () => {
        let inputValue = {
            email: emailValue,
            password: passwordValue,
        };
        console.log(inputValue);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-start rounded-2xl border-2 border-neutral-300 w-2/5 max-w-3xl min-w-min my-40 p-10 shadow-xl">
                {/*w-2/5  */}
                {/*max-2xl:flex-col */}
                <div className="flex justify-center w-full">
                    <p className=" text-3xl font-bold p-2">Sign In</p>
                </div>

                <label className="font-bold my-2 ml-2">Email adress</label>
                <input
                    placeholder="Enter email"
                    className="rounded-xl border-2 border-neutral-300 p-2 mb-4 ml- w-full"
                    onChange={emailHandler}
                ></input>
                <label className="font-bold mb-2 ml-2">Password</label>
                <input
                    placeholder="Password"
                    className="rounded-xl  border-2 border-neutral-300 p-2 w-full mb-4 ml-1"
                    onChange={passwordHandler}
                    type={showPassword ? 'text' : 'password'}
                ></input>

                <div
                    className="flex  flex-row-reverse w-full -mt-4 "
                    onClick={() => setShowPassword((state) => !state)}
                >
                    {showPassword ? (
                        <p className="flex items-center text-xs ">
                            Hide password{' '}
                            <svg
                                className="ml-2 w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 14"
                            >
                                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                            </svg>
                        </p>
                    ) : (
                        <p className="flex items-center text-xs">
                            Show password{' '}
                            <svg
                                className="ml-2 w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 14"
                            >
                                <g
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                >
                                    <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                                </g>
                            </svg>
                        </p>
                    )}
                </div>

                <Button
                    content={'Submit'}
                    background="bg-indigo-600"
                    onClick={saveDataInput}
                    width="w-full"
                />

                <p className="ml-2 mt-2">
                    Forgot{' '}
                    <a
                        className="text-blue-500 underline "
                        href="#"
                        target="_blank"
                    >
                        password?
                    </a>
                </p>
            </div>
        </div>
    );
};
