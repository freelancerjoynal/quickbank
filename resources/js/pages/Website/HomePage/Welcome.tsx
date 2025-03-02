import WebsiteLayout from '@/layouts/WebsiteLayout';
import { Head } from '@inertiajs/react';
import Hero from './Hero';
import Features from './Features';
import FixedDepositSection from './FixedDepositSection';
import AwardsSection from './AwardsSection';
import LoanCalculator from '../../../components/LoanCalculator';
import NewsBlogSection from '@/components/NewsBlogSection';

export default function Welcome() {
    return (
        <>
            <WebsiteLayout>
                <Head title="Home" />
                <Hero />
                <Features/>
                <FixedDepositSection/>
                <AwardsSection/>
                <LoanCalculator/>
                <NewsBlogSection/>
            </WebsiteLayout>
        </>
    );
}
