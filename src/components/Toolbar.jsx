import React from 'react';

export const Toolbar = () => {
  const headingTypes = [
    { label: 'Normal text', value: 'paragraph' },
    { label: 'Title', value: 'title' },
    { label: 'Subtitle', value: 'subtitle' },
    { label: 'Heading 1', value: 'heading1' },
    { label: 'Heading 2', value: 'heading2' },
    { label: 'Heading 3', value: 'heading3' }
  ];

  return (
    <div className="border-b border-gray-200 p-2 flex items-center space-x-2">
      <select className="border rounded px-2 py-1">
        {headingTypes.map(type => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
      <button className="p-1 hover:bg-gray-100 rounded">
        <strong>B</strong>
      </button>
      <button className="p-1 hover:bg-gray-100 rounded">
        <em>I</em>
      </button>
      <button className="p-1 hover:bg-gray-100 rounded">
        <u>U</u>
      </button>
    </div>
  );
};