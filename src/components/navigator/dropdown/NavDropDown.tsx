'use client';

import { getNavItems, getPathByName } from '@/utils/navUtils';
import { usePathname } from 'next/navigation';

const NavDropDown = () => {
    const isInPath = (name: string) => {
        const path = '/' + usePathname().split('/')[1];
        return path === getPathByName(name);
    };

    return (
        <details className="dropdown dropdown-bottom">
            <summary tabIndex={0} role="button" className="btn btn-square btn-ghost ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </summary>
            <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-xl">
                {getNavItems().map((nav) => (
                    <NavDropDownItem
                        key={nav.name}
                        name={nav.name}
                        href={nav.path}
                        isCorrectPath={isInPath(nav.name)}
                    />
                ))}
            </ul>
        </details>
    );
};

type NavDropDownItemProps = {
    name: string;
    href: string;
    isCorrectPath?: boolean;
};

const NavDropDownItem = ({ name, href, isCorrectPath = false }: NavDropDownItemProps) => {
    return (
        <li>
            <a href={href} className={isCorrectPath ? 'active' : ''}>
                {name}
            </a>
        </li>
    );
};

export default NavDropDown;
