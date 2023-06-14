import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [paginationMarginButton, setPaginationMarginButton] = useState(0);

  const handleScreenSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1524) {
      return setPaginationMarginButton(2);
    }
    if (screenWidth < 1524 && screenWidth >= 768) {
      return setPaginationMarginButton(1);
    }
    return setPaginationMarginButton(0);
  };

  const debouncedHandleScreenSize = debounce(handleScreenSize, 2000);

  useEffect(() => {
    debouncedHandleScreenSize();
    window.addEventListener('resize', debouncedHandleScreenSize);

    return () => {
      window.removeEventListener('resize', debouncedHandleScreenSize);
    };
  }, []);

  return {
    paginationMarginButton,
  };
};

export default useScreenSize;
