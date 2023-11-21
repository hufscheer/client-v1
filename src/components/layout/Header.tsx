import { Icon } from '../common/Icon';

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-3xl font-bold">Match</div>

      <Icon
        iconName="hamburgerMenu"
        width={32}
        height={32}
        viewBox="0 0 24 24"
        className="fill-primary"
      />
    </div>
  );
}
