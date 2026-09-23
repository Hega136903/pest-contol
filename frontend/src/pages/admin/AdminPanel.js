import React, { useCallback, useEffect, useMemo, useState } from "react";

const API_URL = (
  process.env.REACT_APP_API_URL ||
  "http://localhost:5000"
).replace(/\/$/, "");

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  const fetchBookings = useCallback(async () => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      logout();
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/api/admin/bookings`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      console.log("ADMIN BOOKINGS RESPONSE:", data);

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("adminToken");
        window.location.href = "/admin/login";
        return;
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch bookings");
      }

      if (data.success && Array.isArray(data.bookings)) {
        setBookings(data.bookings);
        console.log("BOOKINGS:", data.bookings);
        console.log("COUNT:", data.bookings.length);
      } else {
        setBookings([]);
        setError("Invalid booking data received.");
      }
    } catch (err) {
      console.error("FETCH BOOKINGS ERROR:", err);
      setError(err.message || "Failed to load bookings.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const markCompleted = async (id) => {
    const token = localStorage.getItem("adminToken");

    try {
      const response = await fetch(
        `${API_URL}/api/bookings/${id}/complete`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update booking");
      }

      await fetchBookings();
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) {
      return;
    }

    const token = localStorage.getItem("adminToken");

    try {
      const response = await fetch(
        `${API_URL}/api/bookings/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete booking");
      }

      await fetchBookings();
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const exportBookings = async () => {
    const token = localStorage.getItem("adminToken");

    try {
      const response = await fetch(
        `${API_URL}/api/bookings/export`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to export bookings");
      }

      const csv = await response.blob();
      const downloadUrl = window.URL.createObjectURL(csv);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "pest-control-bookings.csv";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error("EXPORT BOOKINGS ERROR:", err);
      setError(err.message || "Failed to export bookings.");
    }
  };

  const formatDate = (date) => {
    if (!date) return "N/A";

    const d = new Date(date);

    if (Number.isNaN(d.getTime())) {
      return "N/A";
    }

    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatDateTime = (date) => {
    if (!date) return "N/A";

    const d = new Date(date);

    if (Number.isNaN(d.getTime())) {
      return "N/A";
    }

    return d.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const statistics = useMemo(() => {
    const total = bookings.length;

    const completed = bookings.filter(
      (booking) => booking.completed === true
    ).length;

    return {
      total,
      completed,
      pending: total - completed,
    };
  }, [bookings]);

  const token = localStorage.getItem("adminToken");

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold mb-4">
            Admin Login Required
          </h2>

          <button
            onClick={() =>
              (window.location.href = "/admin/login")
            }
            className="bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <div>
            <p className="text-sm text-gray-500">
              Pest Control Management
            </p>

            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
          </div>

          <div className="flex gap-3">
            <button
              onClick={fetchBookings}
              className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50"
            >
              Refresh
            </button>

            <button
              onClick={exportBookings}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700"
            >
              Export CSV
            </button>

            <button
              onClick={logout}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">
              Total Bookings
            </p>

            <p className="text-3xl font-bold mt-2">
              {statistics.total}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">
              Pending
            </p>

            <p className="text-3xl font-bold text-yellow-700 mt-2">
              {statistics.pending}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">
              Completed
            </p>

            <p className="text-3xl font-bold text-green-700 mt-2">
              {statistics.completed}
            </p>
          </div>

        </div>

        {/* Loading */}
        {loading && (
          <div className="bg-white rounded-xl p-10 text-center">
            <p className="text-lg">
              Loading bookings...
            </p>
          </div>
        )}

        {/* No bookings */}
        {!loading && bookings.length === 0 && (
          <div className="bg-white rounded-xl p-10 text-center">
            <p className="text-5xl mb-4">📋</p>

            <h2 className="text-xl font-bold">
              No bookings found
            </h2>

            <p className="text-gray-500 mt-2">
              Customer bookings will appear here.
            </p>
          </div>
        )}

        {/* Bookings */}
        {!loading && bookings.length > 0 && (
          <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="p-5 border-b">
              <h2 className="text-xl font-bold">
                Customer Bookings
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {bookings.length} booking(s) found
              </p>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4">
                      Customer
                    </th>

                    <th className="text-left p-4">
                      Mobile
                    </th>

                    <th className="text-left p-4">
                      Service
                    </th>

                    <th className="text-left p-4">
                      Date
                    </th>

                    <th className="text-left p-4">
                      Time
                    </th>

                    <th className="text-left p-4">
                      Status
                    </th>

                    <th className="text-left p-4">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {bookings.map((booking) => (

                    <tr
                      key={booking._id}
                      className="border-t hover:bg-gray-50"
                    >

                      <td className="p-4">
                        <div className="font-semibold">
                          {booking.fullName}
                        </div>

                        <div className="text-sm text-gray-500">
                          {booking.address}
                        </div>
                      </td>

                      <td className="p-4">
                        <a
                          href={`tel:${booking.mobile}`}
                          className="text-blue-600"
                        >
                          {booking.mobile}
                        </a>
                      </td>

                      <td className="p-4">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {booking.service}
                        </span>
                      </td>

                      <td className="p-4">
                        {formatDate(
                          booking.preferredDate
                        )}
                      </td>

                      <td className="p-4">
                        {booking.preferredTime}
                      </td>

                      <td className="p-4">

                        {booking.completed ? (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            Completed
                          </span>
                        ) : (
                          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                            Pending
                          </span>
                        )}

                      </td>

                      <td className="p-4">

                        <div className="flex gap-2">

                          {!booking.completed && (
                            <button
                              onClick={() =>
                                markCompleted(
                                  booking._id
                                )
                              }
                              className="bg-green-700 text-white px-3 py-2 rounded-lg text-sm"
                            >
                              Complete
                            </button>
                          )}

                          <button
                            onClick={() =>
                              deleteBooking(
                                booking._id
                              )
                            }
                            className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* Mobile cards */}
            <div className="md:hidden p-4 space-y-4">

              {bookings.map((booking) => (

                <div
                  key={booking._id}
                  className="border rounded-xl p-4"
                >

                  <h3 className="font-bold text-lg">
                    {booking.fullName}
                  </h3>

                  <p className="text-blue-600">
                    {booking.mobile}
                  </p>

                  <div className="mt-4 space-y-2">

                    <p>
                      <strong>Service:</strong>{" "}
                      {booking.service}
                    </p>

                    <p>
                      <strong>Address:</strong>{" "}
                      {booking.address}
                    </p>

                    <p>
                      <strong>Date:</strong>{" "}
                      {formatDate(
                        booking.preferredDate
                      )}
                    </p>

                    <p>
                      <strong>Time:</strong>{" "}
                      {booking.preferredTime}
                    </p>

                    <p>
                      <strong>Created:</strong>{" "}
                      {formatDateTime(
                        booking.createdAt
                      )}
                    </p>

                  </div>

                  <div className="flex gap-2 mt-4">

                    {!booking.completed && (
                      <button
                        onClick={() =>
                          markCompleted(booking._id)
                        }
                        className="flex-1 bg-green-700 text-white px-3 py-2 rounded-lg"
                      >
                        Complete
                      </button>
                    )}

                    <button
                      onClick={() =>
                        deleteBooking(booking._id)
                      }
                      className="flex-1 bg-red-600 text-white px-3 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default AdminPanel;