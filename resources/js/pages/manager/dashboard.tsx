import AppLayout from '@/layouts/app-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;

    console.log(auth);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {auth.user.role === 1 && <div>Admin</div>}
            {auth.user.role === 2 && <div>Manager</div>}
            {auth.user.role === 0 && <div>User</div>}

        </AppLayout>
    );
}
