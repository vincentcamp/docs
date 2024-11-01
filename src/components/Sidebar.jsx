import React from 'react';

export const Sidebar = ({ headings }) => {
  const scrollToHeading = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-64 border-r border-gray-200 p-4 overflow-y-auto">
      {headings.map((heading, index) => (
        <div
          key={index}
          className="cursor-pointer hover:bg-gray-100 p-1 rounded"
          style={{ marginLeft: `${heading.level * 12}px` }}
          onClick={() => scrollToHeading(heading.id)}
        >
          {heading.text}
        </div>
      ))}
    </div>
  );
};