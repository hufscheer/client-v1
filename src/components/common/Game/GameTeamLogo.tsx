import Image from 'next/image';

interface GameTeamLogoProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function GameTeamLogo({
  src = '/images/not-found.png',
  alt,
  width = 50,
  height = 50,
}: GameTeamLogoProps) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}
