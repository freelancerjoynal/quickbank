import WebsiteLayout from '@/layouts/settings/WebsiteLayout';
import { Head } from '@inertiajs/react';
import Hero from './Hero';
import ShortIntro from './ShortIntro';

export default function Welcome() {
    return (
        <>
            <WebsiteLayout>
                <Head title="Home" />
                <Hero />
                <ShortIntro />
            </WebsiteLayout>
        </>
    );
}
