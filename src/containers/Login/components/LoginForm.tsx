import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { EmailSvg, KeySvg } from '../../../components/utils/Icon';
import clsx from 'clsx';

type LoginForm = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors }  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    // Handle form submission
    console.log(data);
  };


  console.log(errors)

  return (
    <div className="w-full">
      <div className="w-full space-y-6  rounded shadow-md">
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100">Email</label>
            <div className={clsx("flex items-center border-2 rounded shadow-sm bg-white " , errors.email && 'border-red-400')} >
              <span className="px-2">
                {EmailSvg}
              </span>
              <input  
                id="email" 
                className="w-full h-full p-[0.775rem] text-gray-700 bg-white border-none rounded-r outline-none focus:ring-none focus:outline-none focus:border-none" 
                placeholder="example@gmail.com" 
                {...register("email" , {required : true , pattern : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-100">Password</label>
            <div className="flex items-center border rounded shadow-sm bg-white">
              <span className="px-2">
                {KeySvg}
              </span>
              <input 
                type="password" 
                id="password" 
                className="w-full p-[.775rem] text-gray-700 bg-white border-none rounded-r outline-none focus:ring-none focus:outline-none focus:border-none" 
                placeholder="********" 
                {...register("password" , {required : true})}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="text-purple-600 form-checkbox" />
              <span className="ml-2 text-sm text-gray-100">Remember me</span>
            </label>
            <a href="#" className="text-sm text-purple-600 hover:underline">Forgot Password?</a>
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;