interface GameLabelProps {
  children?: string;
}

export default function GameLabel({ children }: GameLabelProps) {
  return <p className='w-full text-sm text-center'>{children}</p>;
}
