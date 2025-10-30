import React, { useEffect, useState } from 'react';
import Card from './Card';
import Button from './Button';

export default function APIData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 6;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
        );
        if (!res.ok) throw new Error('Failed to fetch data');
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center mt-6">Loading data...</p>;
  if (error)
    return (
      <p className="text-center text-red-500 mt-6">
        Error: {error}
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">🌐 API Data Viewer</h2>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 w-full max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <Card key={item.id}>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{item.body}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="secondary"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </Button>
        <span className="font-medium">Page {page}</span>
        <Button variant="secondary" onClick={() => setPage((prev) => prev + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
}
