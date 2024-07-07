import React from 'react';

const Create = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Create</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><span className="text-gray-300 cursor-not-allowed">Create</span></li>
              <li><a href="/track" className="hover:underline">Track</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Create Art</h2>
          <p className="text-lg">
            Express your dreams through visual art. Use our tools and resources to create unique artworks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Compose Music</h2>
          <p className="text-lg">
            Translate your dreams into music compositions. Explore melodies and rhythms inspired by your dreams.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Write Stories</h2>
          <p className="text-lg">
            Write narratives and stories inspired by your dreams. Share your creativity with others.
          </p>
        </section>
      </main>

      <footer className="bg-blue-600 text-white p-4 mt-8 text-center">
        <p>&copy; 2024 Dream Weaver. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Create;
