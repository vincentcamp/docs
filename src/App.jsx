import React, { useState, useEffect } from 'react';
import { EditorContent } from './components/EditorContent';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { extractHeadings } from './utils/headings';
import { encryptContent, decryptContent } from './utils/encryption';

const App = () => {
  const [content, setContent] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleContentChange = (newContent) => {
    setContent(newContent);
    updateHeadings(newContent);
  };

  const updateHeadings = (content) => {
    if (!content) return;
    const headingsArray = extractHeadings(content);
    setShowSidebar(headingsArray.length > 0);
    setHeadings(headingsArray);
  };

  return (
    <div className="flex h-screen bg-white">
      {showSidebar && (
        <Sidebar headings={headings} />
      )}
      <div className="flex-1 flex flex-col">
        <Toolbar />
        <EditorContent 
          content={content}
          onChange={handleContentChange}
        />
      </div>
    </div>
  );
};

export default App;