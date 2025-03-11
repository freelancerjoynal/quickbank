import { Button } from '@/components/ui/button';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import axios from 'axios';
import { useState } from 'react';

export default function Users() {
    const [users, setUsers] = useState<any[]>([]); // Define state with a more flexible type
    const [loading, setLoading] = useState(false);  // Track loading state
    const [error, setError] = useState<string | null>(null); // Track errors

    const handleLoadUsers = async () => {
        setLoading(true);
        setError(null);  // Reset error
        try {
            // Use the direct URL '/get-users'
            const response = await axios.get('/get-users');
            // Ensure response.data.users exists before updating state
            if (response.data && Array.isArray(response.data.users)) {
                setUsers(response.data.users); // Set the users to state
            } else {
                setError('No users found or invalid response format.');
            }
        } catch (error) {
            setError('Error loading users: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <WebsiteLayout>
            <div className="container mx-auto min-h-screen">
                <Button onClick={handleLoadUsers} className="mt-8" disabled={loading}>
                    {loading ? 'Loading...' : 'Load Users'}
                </Button>

                {error && <div className="mt-4 text-red-500">{error}</div>} {/* Show error if exists */}

                <div className="mt-8">
                    <ul>
                        {users.length > 0 ? (
                            users.map((user: any) => (
                                <li key={user.id}>
                                    {user.name} - {user.email}
                                </li>
                            ))
                        ) : (
                            <p>No users to display</p>
                        )}
                    </ul>
                </div>
            </div>
        </WebsiteLayout>
    );
}
