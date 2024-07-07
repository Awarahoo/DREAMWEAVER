import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <Hero />
        <Features />
        <Footer />
      </main>
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Dream Weaver</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/create" className="hover:underline">Create</Link></li>
            <li><Link to="/track" className="hover:underline">Track</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-gray-200 p-8 text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to Dream Weaver</h2>
      <p className="text-lg mb-8">Your journey to creativity begins here. Create, track, and manage your dreams effortlessly.</p>
      <Link to="/track" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Get Started</Link>
    </section>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Feature title="Create Dreams" description="Easily create and manage your dreams." />
        <Feature title="Track Progress" description="Track your progress and stay motivated." />
        <Feature title="Create Content" description="Create something artistic with your dreams." />
      </div>
    </section>
  );
};

const Feature = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 text-center">
      <p>&copy; 2024 Dream Weaver. All rights reserved.</p>
    </footer>
  );
};

export default Home;
