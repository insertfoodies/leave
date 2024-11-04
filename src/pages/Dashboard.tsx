import { useUser } from '@clerk/clerk-react';

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-gray-900">
        Welcome, {user?.firstName}!
      </h1>
      <p className="mt-2 text-gray-600">
        This is your dashboard. More features coming soon.
      </p>
    </div>
  );
}