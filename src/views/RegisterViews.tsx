'use client';

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateRegisterForm } from '@/helper/validate';
import { useRouter } from 'next/navigation'; 
import register from '@/helper/auth.helper';

const RegisterViews = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 pt-16">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Register to Store
                </h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        name: '',
                        address: '',
                        phone: '',
                    }}
                    onSubmit={async (values) => {
                        await register(values);
                        router.push('/login');
                    }}
                    validate={validateRegisterForm}
                >
                    {({ errors }) => (
                        <Form className="space-y-4">
                            <div>
    <label
        htmlFor="address" 
        className="block text-sm font-medium text-gray-700"
    >
        Email
    </label>
    <Field
        type="email"
        id="email" 
        name="email" 
        placeholder="Johncorreo@gmail.com"
        className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <ErrorMessage
        name="address" 
        component="div"
        className="text-xs text-red-500"
    />
</div>


                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="*******"
                                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-xs text-red-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John"
                                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-xs text-red-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="adress"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Address
                                </label>
                                <Field
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Argentina"
                                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage
                                    name="adress"
                                    component="div"
                                    className="text-xs text-red-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Phone
                                </label>
                                <Field
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="+11 659843"
                                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className="text-xs text-red-500"
                                />
                            </div>

                            <button
                                disabled={
                                    !!(
                                        errors.email ||
                                        errors.password ||
                                        errors.name ||
                                        errors.address ||
                                        errors.phone
                                    )
                                }
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default RegisterViews;
