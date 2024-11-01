export const extractHeadings = (content) => {
    const headings = [];
    const traverse = (node, level = 0) => {
      if (node.type.name.startsWith('heading') || 
          node.type.name === 'title' || 
          node.type.name === 'subtitle') {
        headings.push({
          id: `heading-${headings.length}`,
          text: node.textContent,
          level: getHeadingLevel(node.type.name),
          type: node.type.name
        });
      }
      node.forEach(child => traverse(child, level + 1));
    };
    traverse(content);
    return headings;
  };
  
  const getHeadingLevel = (type) => {
    const levels = {
      title: 0,
      subtitle: 1,
      heading1: 2,
      heading2: 3,
      heading3: 4
    };
    return levels[type] || 0;
  };  