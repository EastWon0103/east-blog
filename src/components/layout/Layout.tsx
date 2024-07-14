import { Header } from './Header';

export const Layout = (props: React.PropsWithChildren) => {
    return (
        <div className="flex justify-center">
            <div className=" md:w-full lg:w-4/5">
                <Header />
            </div>
        </div>
    );
};
