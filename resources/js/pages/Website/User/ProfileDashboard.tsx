import WebsiteLayout from '@/layouts/WebsiteLayout'
import { usePage } from '@inertiajs/react'
import { Link } from 'lucide-react';
import React from 'react'

export default function ProfileDashboard() {
    const {auth} = usePage().props;
  return (
    <WebsiteLayout>
        <section className='min-h-screen'>
            <div className="container">
                <div className="max-w-4xl mx-auto py-12">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Account</h1>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="border-b pb-4">
                                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h2>
                                    <div className="space-y-2">
                                        <p className="text-gray-600">Name: {auth.user.name}</p>
                                        <p className="text-gray-600">Email: {auth.user.email}</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Account Settings</h2>
                                    <div className="space-y-3">
                                        <Link
                                            href={route('profile.edit')}
                                            className="block w-full text-center bg-yellow-800 text-white py-2 rounded hover:bg-yellow-900 transition"
                                        >
                                            Edit Profile
                                        </Link>
                                        <Link
                                            href={route('password.edit')}
                                            className="block w-full text-center border border-yellow-800 text-yellow-800 py-2 rounded hover:bg-yellow-50 transition"
                                        >
                                            Change Password
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
                                <div className="space-y-3">
                                    <Link
                                        href={route('website.apply.loan')}
                                        className="block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                                    >
                                        Apply for Loan
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                                    >
                                        View Transactions
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block w-full text-center bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
                                    >
                                        Support
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </WebsiteLayout>
  )
}
