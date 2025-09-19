import { useEffect } from 'react';

const useTitleChange = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Dhulai Factory`;
    return () => { document.title = previousTitle; };
  }, [title]);
};

export default useTitleChange;