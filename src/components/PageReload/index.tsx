"use client"
import { useEffect } from 'react';


function PageReload() {
  useEffect(() => {
    const handleReload = () => {
      const shouldReload = window.confirm('Are you sure you want to reload the page?');
      if (shouldReload) {
        window.location.reload();
      }
    };

    // Add event listener for beforeunload event to trigger the confirmation message
    window.addEventListener('beforeunload', handleReload);

    return () => {
      window.removeEventListener('beforeunload', handleReload);
    };
  }, []);

  return null;
}

export default PageReload;

