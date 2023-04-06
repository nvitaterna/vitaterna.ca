import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link className="font-normal" href={href}>
      {label}
    </Link>
  );
};
