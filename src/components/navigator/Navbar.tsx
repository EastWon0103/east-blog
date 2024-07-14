import ThemeToggle from './themetoggle/ThemeToggle';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <Logo />
            </div>
            <div className="navbar-center">
                <Tabs />
            </div>
            <div className="navbar-end">
                <ThemeToggle />
            </div>
        </nav>
    );
};

const Logo = () => {
    return <a className="btn btn-ghost text-xl">2ast.log</a>;
};

const Tabs = () => {
    return (
        <div role="tablist" className="tabs tabs-md">
            <a role="tab" className="tab btn btn-ghost">
                HOME
            </a>
            <a role="tab" className="tab btn btn-ghost">
                POST
            </a>
            <a role="tab" className="tab btn btn-ghost">
                PROJECT
            </a>
            <a role="tab" className="tab btn btn-ghost">
                ABOUT ME
            </a>
        </div>
    );
};

export default Navbar;
