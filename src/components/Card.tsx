'use client'

import { projects } from '../../data/posts';
import React, { useEffect, useRef } from 'react';

const Cards: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn');
            entry.target.classList.remove('opacity-0');
          } else {
            entry.target.classList.add('animate-slideOut');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6 py-10">
      {.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          ref={(el) => el && (cardsRef.current[i] = el)}
          className="opacity-0 bg-blue-500 text-white rounded-lg shadow-md w-64 h-32 flex items-center justify-center transform transition-all duration-500"
        >
          Card {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Cards;
