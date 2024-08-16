import NavDropDown from './dropdown/NavDropDown';
import NavTabs from './tabs/NavTabs';
import ThemeToggle from './themetoggle/ThemeToggle';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100">
            <div className="flex-none md:hidden">
                <NavDropDown />
            </div>
            <div className="flex-1 md:flex-none">
                <Logo />
            </div>
            <NavTabs />
            <div className="flex-none">
                <ThemeToggle />
            </div>
        </nav>
    );
};

const Logo = () => {
    return (
        <a className="btn btn-ghost text-xl" href="/">
            2ast.log
        </a>
    );
};

export default Navbar;
