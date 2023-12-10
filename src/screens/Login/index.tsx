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
                    className="rounded-xl border-2 border-neutral-300 p-2 mb-4 ml-2 w-full"
                    onChange={emailHandler}
                ></input>
                <label className="font-bold mb-2 ml-2">Password</label>
                <input
                    placeholder="Password"
                    className="rounded-xl  border-2 border-neutral-300 p-2 w-full mb-4 ml-2"
                    onChange={passwordHandler}
                    type={showPassword ? 'text' : 'password'}
                ></input>
                <div
                    className="flex flex-row-reverse w-full -mt-4"
                    onClick={() => setShowPassword((state) => !state)}
                >
                    {showPassword ? (
                        <p className=" text-xs">Hide password</p>
                    ) : (
                        <p className=" text-xs">Show password</p>
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
