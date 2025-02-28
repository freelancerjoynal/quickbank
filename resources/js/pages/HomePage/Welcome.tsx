import WebsiteLayout from '@/layouts/WebsiteLayout';
import { Head } from '@inertiajs/react';
import Hero from './Hero';
import Features from './Features';

export default function Welcome() {
    return (
        <>
            <WebsiteLayout>
                <Head title="Home" />
                <Hero />
                <Features/>
            </WebsiteLayout>
        </>
    );
}
