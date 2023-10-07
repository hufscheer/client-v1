import Image from 'next/image';

interface GameTeamLogoProps {
  src: string;
  alt: string;
}

export default function GameTeamLogo({ src, alt }: GameTeamLogoProps) {
  return <Image src={src} alt={alt} width={30} height={30} />;
}
