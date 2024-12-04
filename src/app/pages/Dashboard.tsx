import React, { useEffect, useState } from 'react';
import { PaginationParams, User, userApi } from '../../api/user.api';
import Heading from '../../library/typography/Heading';

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 10,
    sort: 'createdAt:desc',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userApi.getAllUsers(pagination);
      setUsers(response.data?.results || []);
      setPagination({
        page: 1,
        limit: 10,
        sort: 'createdAt:desc',
      });
      setError(null);
    } catch (err) {
      if (err) {
        setError('Failed to fetch users');
        setUsers([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [pagination.page, pagination.limit, pagination.sort]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-blue-600 text-xl">
        Loading users...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <Heading className="mb-8">User Management Dashboard</Heading>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">First Name</th>
              <th className="p-4 text-left">Last Name</th>
              <th className="p-4 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b even:bg-gray-50 hover:bg-gray-100 transition"
              >
                <td className="p-4">{user.firstName}</td>
                <td className="p-4">{user.lastName}</td>
                <td className="p-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="p-6 text-center text-gray-500">No users found</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
