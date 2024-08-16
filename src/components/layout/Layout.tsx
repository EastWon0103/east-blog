import { Header } from './Header';

export const Layout = (props: React.PropsWithChildren) => {
    return (
        <div className="flex justify-center">
            <div className="w-full md:w-4/5 lg:w-3/5">
                <Header />
                <section className="p-4">{props.children}</section>
            </div>
        </div>
    );
};
