import { useEffect } from 'react';

const useKeyUp = (callback: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      callback(event);
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [callback]);
};

export default useKeyUp;