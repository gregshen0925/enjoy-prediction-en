import dynamic from "next/dynamic";
import { FC, ReactNode, Suspense, useEffect, useState } from "react";


const Header = dynamic(() => import("./Header"), { suspense: true });
const NavigationTab = dynamic(() => import("./NavigationTab"), { suspense: true });
interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return <div className="flex h-screen w-full justify-center items-center">
        <img src='/logo.png' className="w-[300px] h-[300px]" />
    </div>;

    return (
        <Suspense fallback={<div className="flex h-screen w-full justify-center items-center">
            <img src='/logo.png' className="w-[300px] h-[300px]" />
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
