import React, { useEffect, useState } from 'react';
import { PaginationParams, User, userApi } from '../../api/user.api';

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 10,
    sort: 'createdAt:desc',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userApi.getAllUsers(pagination);
      setUsers(response.data?.results || []);
      setTotalPages(response.data?.totalPages || 1);
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

  const handlePageChange = (newPage: number) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  };

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
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        User Management Dashboard
      </h1>

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

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() =>
            handlePageChange(pagination.page ? pagination.page - 1 : 1)
          }
          disabled={pagination.page === 1}
          className={`px-4 py-2 rounded-md ${pagination.page === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {pagination.page} of {totalPages}
        </span>
        <button
          onClick={() =>
            handlePageChange(pagination.page ? pagination.page + 1 : 1)
          }
          disabled={pagination.page === totalPages}
          className={`px-4 py-2 rounded-md ${pagination.page === totalPages ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
