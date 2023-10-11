import Image from 'next/image';

interface GameTeamLogoProps {
  src?: string;
  alt: string;
  size?: string;
}

export default function GameTeamLogo({
  src = '/images/not-found.png',
  alt,
  size = 'w-10 h-10',
}: GameTeamLogoProps) {
  return (
    <div className={`relative ${size}`}>
      <Image src={src} alt={alt} fill className=" object-contain" />
    </div>
  );
}
