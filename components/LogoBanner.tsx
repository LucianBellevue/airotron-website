import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Logo {
  src: string;
  alt: string;
}

const LogoBanner: React.FC = () => {
  const logos: Logo[] = [
    { src: '/lennox.png', alt: 'Lennox logo' },
    { src: '/carrier.png', alt: 'Carrier logo' },
    { src: '/trane.png', alt: 'Trane logo' },
    { src: '/bryant.png', alt: 'Bryant logo' },
    { src: '/goodman.png', alt: 'Goodman logo' },
    { src: '/lennox.png', alt: 'Lennox logo' },
    { src: '/carrier.png', alt: 'Carrier logo' },
    { src: '/trane.png', alt: 'Trane logo' },
    { src: '/bryant.png', alt: 'Bryant logo' },
    { src: '/goodman.png', alt: 'Goodman logo' },
  ];

  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= .5;
      if (position <= -banner.offsetWidth / 2) {
        position = 0;
      }
      banner.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap w-auto">
      <div ref={bannerRef} className="inline-block">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="inline-block mx-8">
            <Image src={logo.src} alt={logo.alt} width={100} height={50} objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;
