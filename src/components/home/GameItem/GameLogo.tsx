import Image from 'next/image';
import { Fragment, ReactNode } from 'react';

interface GameLogoProps {
  src: string;
  alt: string;
  direction?: 'row' | 'column';
  children?: ReactNode;
}

export default function GameLogo({
  src,
  alt,
  direction = 'row',
  children,
}: GameLogoProps) {
  return (
    <div
      className={`flex ${
        direction === 'column' && 'flex-col'
      } items-center w-full`}
    >
      {/* TODO Image로 바꿔야 함. 아직 로고 이미지를 안가져와서 더미 이미지 사용했는데, Image는 보니까 next.config.js에 도메인 등록해야 해서 에러남 그래서 img 태그로 바꿔놨음 일단 */}
      <img src={src} alt={alt} className='w-10 h-10 aspect-square' />
      <span>{children}</span>
    </div>
  );
}
