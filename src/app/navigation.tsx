import Link from 'next/link';
import { SiGithub, SiStackoverflow } from 'react-icons/si/index';

import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { NavLink } from '@/components/nav-link';

const Navigation = () => {
  return (
    <div className="border-b-1 pb-2 px-0 mb-12">
      <div className="flex flex-row justify-between">
        <div className="prose-2xl font-medium">Nicolas Vitaterna</div>
        <div className="flex flex-row justify-between">
          <DarkModeToggle />
        </div>
      </div>
      <div className="prose-lg flex flex-row justify-between mt-4">
        <div className="flex flex-row gap-3">
          <NavLink href="/" label="Home" />
          <NavLink href="/blog" label="Blog" />
        </div>
        <div className="flex flex-row gap-3">
          <div>
            <a
              href="https://github.com/nvitaterna"
              target="_blank"
              aria-label="Link to my Github"
            >
              <SiGithub />
            </a>
          </div>
          <div>
            <a
              href="https://stackoverflow.com/users/2318336/nvitaterna"
              target="_blank"
              aria-label="Link to my Stackoverflow"
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
