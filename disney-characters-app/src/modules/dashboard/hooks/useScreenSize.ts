import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const screenResolution = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1524) {
    return 3;
  }
  if (screenWidth < 1524 && screenWidth >= 768) {
    return 2;
  }
  if (screenWidth < 768 && screenWidth >= 368) {
    return 1;
  }
  return 0;
};

const useScreenSize = (pageNumber?: string) => {
  const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(() => screenResolution());
  const [selectedPage, setSelectedPage] = useState(0);

  const handleScreenSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1524) {
      return setMarginPagesDisplayed(3);
    }
    if (screenWidth < 1524 && screenWidth >= 768) {
      return setMarginPagesDisplayed(2);
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

    if (pageNumber) {
      setSelectedPage(Number(pageNumber) - 1);
    }

    return () => {
      window.removeEventListener('resize', debouncedHandleScreenSize);
    };
  }, [window.innerWidth, pageNumber]);

  return {
    marginPagesDisplayed,
    selectedPage,
    setSelectedPage,
  };
};

export default useScreenSize;
