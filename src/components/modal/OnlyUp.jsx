import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function OnlyUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <a href="#Inicio" className="fixed z-40 bottom-5 right-5 bg-sky-800 w-12 h-12 hidden lg:flex items-center justify-center rounded">
          <ChevronUp color="white" size="28" />
        </a>
      )}
    </>
  );
}