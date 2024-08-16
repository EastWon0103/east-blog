import { getNavItems } from '@/utils/navUtils';
import { usePathname } from 'next/navigation';
import NavTab from './NavTab';

const NavTabs = () => {
    const navItems = getNavItems();

    return (
        <ul role="tablist" className="hidden md:block md:flex md:justify-center md:w-full">
            {navItems.map((value) => (
                <NavTab key={value.path} href={value.path} name={value.name} />
            ))}
        </ul>
    );
};

export default NavTabs;
