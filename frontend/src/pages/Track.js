import React from 'react';

const Track = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Track</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/create" className="hover:underline">Create</a></li>
              <li><span className="text-gray-300 cursor-not-allowed">Track</span></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8">
        <section className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Track Your Dreams</h2>
          <p className="text-lg">
            Monitor your progress and stay focused on achieving your dreams with our tracking tools.
          </p>
        </section>
      </main>

      <footer className="bg-blue-600 text-white p-4 mt-8 text-center">
        <p>&copy; 2024 Dream Weaver. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Track;
