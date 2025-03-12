import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { FaBars } from "react-icons/fa6";

export default function WebsiteTopNav() {
    const { auth } = usePage<SharedData>().props;

    const currentUrl = `${window.location.pathname}`;

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-black via-yellow-800 to-black py-3">
            <div className="container mx-auto">
                <div className="flex items-center justify-between pt-1">
                    <div className="logo">
                        <h3 className="text-2xl font-black text-white uppercase pl-3">
                            <Link href={route('home')}>quickbank</Link>
                        </h3>
                    </div>
                    <div className="flex items-center gap-3 text-white uppercase">
                        <div className="gap-3 items-center hidden lg:flex">
                            <Link href={route('home')}>Home</Link>
                            <Link href={route('website.apply.loan')}>apply for loan</Link>
                            <Link href={route('website.about')}>About</Link>
                        </div>

                        {auth.user ? (
                            auth.user.role === 1 || auth.user.role === 2 ? (
                                <Link href={route('dashboard')} className="bg-yellow-800 px-2">
                                    dashboard
                                </Link>
                            ) : (
                                <p>others</p>
                            )
                        ) : currentUrl === '/login' ? (
                            <Link href={route('register')} className="bg-yellow-800 px-2">
                                Register
                            </Link>
                        ) : (
                            <Link href={route('login')} className="bg-yellow-800 px-2">
                                log in
                            </Link>
                        )}
                        <FaBars className="mr-4 text-4xl lg:hidden" />
                    </div>
                </div>
            </div>
        </header>
    );
}
