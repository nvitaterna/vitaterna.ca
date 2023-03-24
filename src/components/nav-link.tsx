import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link
      className="dark:text-slate-400 font-normal no-underline hover:underline"
      href={href}
    >
      {label}
    </Link>
  );
};
