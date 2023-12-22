import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const screenResolution = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1524) {
    return 4;
  }
  if (screenWidth < 1524 && screenWidth >= 768) {
    return 3;
  }
  if (screenWidth < 768 && screenWidth >= 368) {
    return 1;
  }
  return 0;
};

const useScreenSize = () => {
  const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(() => screenResolution());
  const [selectedPage, setSelectedPage] = useState(0);

  const handleScreenSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1524) {
      return setMarginPagesDisplayed(4);
    }
    if (screenWidth < 1524 && screenWidth >= 768) {
      return setMarginPagesDisplayed(3);
    }
    if (screenWidth < 768 && screenWidth >= 368) {
      return setMarginPagesDisplayed(1);
    }
    return setMarginPagesDisplayed(0);
  };

  const debouncedHandleScreenSize = debounce(handleScreenSize, 200);

  useEffect(() => {
    debouncedHandleScreenSize();
    window.addEventListener('resize', debouncedHandleScreenSize);

    return () => {
      window.removeEventListener('resize', debouncedHandleScreenSize);
    };
  }, [window.innerWidth]);

  return {
    marginPagesDisplayed,
    selectedPage,
    setSelectedPage,
  };
};

export default useScreenSize;
