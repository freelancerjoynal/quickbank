import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { FaBars } from 'react-icons/fa6';

export default function WebsiteTopNav() {
    const { auth } = usePage<SharedData>().props;

    const currentUrl = `${window.location.pathname}`;

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-black via-yellow-800 to-black py-3">
            <div className="container mx-auto">
                <div className="flex items-center justify-between pt-1">
                    <div className="logo">
                        <h3 className="pl-3 text-2xl font-black text-white uppercase">
                            <Link href={route('home')}>quickbank</Link>
                        </h3>
                    </div>
                    <div className="flex items-center gap-3 text-white uppercase">
                        <div className="hidden items-center gap-3 lg:flex">
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
                                <a className="bg-yellow-800 px-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className='focus:outline-0 cursor-pointer'>My Account</DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel><Link href={route('my.account')}>Dashboard</Link></DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>Profile</DropdownMenuItem>
                                            <DropdownMenuItem>Billing</DropdownMenuItem>
                                            <DropdownMenuItem>Team</DropdownMenuItem>
                                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </a>
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
