import React from 'react';
import { Link } from 'react-router-dom';
import useScroll from '../hooks/use-scroll';
import { Github } from './shared/icons';

export default function Menu() {
  const scrolled = useScroll(40);
  return (
    <div
      className={`fixed top-0 w-full ${
        scrolled
          ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
          : 'bg-white/0'
      } z-30 transition-all`}
    >
      <div className="mx-5 flex h-10 max-w-screen-xl items-center justify-between xl:mx-auto">
        <Link to="/" className="flex items-center font-display text-2xl">
          <p>Image Restoration</p>
        </Link>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/narekokr/image-restore-back"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}
