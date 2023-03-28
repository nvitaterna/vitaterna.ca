import Link from 'next/link';
import { SiGithub, SiStackoverflow } from 'react-icons/si/index';

import { DarkModeToggle } from '@/features/dark-mode/dark-mode-toggle';

import { NavLink } from './nav-link';

const Navigation = () => {
  return (
    <div className="border-b-1 border-slate-400 pb-2 px-0 mb-12">
      <div className="flex flex-row justify-between">
        <div className="prose-2xl font-medium">Nicolas Vitaterna</div>
        <div className="dark:text-slate-400">
          <DarkModeToggle />
        </div>
      </div>
      <div className="prose-lg dark:text-slate-400 flex flex-row justify-between mt-4">
        <div className="flex flex-row gap-3">
          <NavLink href="/" label="Home" />
          <NavLink href="/blog" label="Blog" />
        </div>
        <div className="flex flex-row gap-3">
          <div>
            <a
              className="dark:text-slate-400"
              href="https://github.com/nvitaterna"
              target="_blank"
            >
              <SiGithub />
            </a>
          </div>
          <div>
            <a
              className="dark:text-slate-400"
              href="https://stackoverflow.com/users/2318336/nvitaterna"
              target="_blank"
            >
              <SiStackoverflow />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
