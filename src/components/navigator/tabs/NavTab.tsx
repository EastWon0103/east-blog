'use client';
import { getPathByName } from '@/utils/navUtils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavTab = ({ href, name }) => {
    const isInPath = (name: string) => {
        const path = '/' + usePathname().split('/')[1];
        return path === getPathByName(name);
    };

    if (isInPath(name)) {
        return (
            <li>
                <Link href={href} role="tab" className="btn btn-ghost">
                    <div className="text-base-content font-extrabold">{name}</div>
                </Link>
            </li>
        );
    }
    return (
        <li>
            <Link href={href} role="tab" className="btn btn-ghost">
                <div className="text-base-content/65">{name}</div>
            </Link>
        </li>
    );
};

export default NavTab;
