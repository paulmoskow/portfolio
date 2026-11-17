import { useEffect } from 'react';

// Sets the document title and meta description for the current page and restores
// the previous values when the page unmounts (the app is a client-side router).
function usePageMeta(title, description) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const prevTitle = document.title;
    const prevDescription = meta ? meta.getAttribute('content') : null;

    document.title = title;
    if (meta && description) meta.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      if (meta && prevDescription !== null) meta.setAttribute('content', prevDescription);
    };
  }, [title, description]);
}

export default usePageMeta;
