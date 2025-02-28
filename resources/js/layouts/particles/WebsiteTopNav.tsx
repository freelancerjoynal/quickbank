import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export default function WebsiteTopNav() {
    const { auth } = usePage<SharedData>().props;

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-black via-yellow-800 to-black">
            <div className="container mx-auto">
                <div className="flex items-center justify-between pt-1">
                    <div className="logo">
                        <h3 className="text-xl font-black text-white uppercase"><Link href={route('home')}>quickbank</Link></h3>
                    </div>
                    <div className="flex items-center gap-3 text-white uppercase">
                        <Link href={route('home')}>Home</Link>
                        <Link href={route('about')}>About</Link>

                        {auth.user ? (
                            <Link href={route('dashboard')} className="bg-yellow-800 px-2">
                                dashboard
                            </Link>
                        ) : (
                            <Link href={route('login')} className="bg-yellow-800 px-2">
                                log in
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
