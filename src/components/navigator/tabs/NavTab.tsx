'use client';
import { getPathByName } from '@/utils/navUtils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavTab = ({ href, name }) => {
    const isInPath = (name: string) => {
        console.log(usePathname().split('/'));
        const path = '/' + usePathname().split('/')[1];
        return path === getPathByName(name) && name !== 'HOME';
    };

    if (isInPath(name)) {
        return (
            <li>
                <Link href={href} role="tab" className="btn btn-ghost">
                    <div className="underline decoration-2 underline-offset-[12px]">{name}</div>
                </Link>
            </li>
        );
    }
    return (
        <li>
            <Link href={href} role="tab" className="btn btn-ghost">
                {name}
            </Link>
        </li>
    );
};

export default NavTab;
