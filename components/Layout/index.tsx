import dynamic from "next/dynamic";
import { FC, ReactNode, Suspense } from "react";


const Header = dynamic(() => import("./Header"), { suspense: true });
const NavigationTab = dynamic(() => import("./NavigationTab"), { suspense: true });
interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <Suspense fallback={<div className="flex h-screen w-full justify-center items-center">
        </div>}>
            <div className='bg-black min-h-screen flex flex-col'>
                <Header />
                <div className='absolute inset-x-0 bottom-0 items-center justify-center flex'>
                    <NavigationTab />
                </div>
                {children}
            </div>
        </Suspense>
    );
};

export default Layout;
