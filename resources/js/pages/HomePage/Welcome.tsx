import WebsiteLayout from '@/layouts/WebsiteLayout';
import { Head } from '@inertiajs/react';
import Hero from './Hero';
import Features from './Features';
import FixedDepositSection from './FixedDepositSection';

export default function Welcome() {
    return (
        <>
            <WebsiteLayout>
                <Head title="Home" />
                <Hero />
                <Features/>
                <FixedDepositSection/>
            </WebsiteLayout>
        </>
    );
}
