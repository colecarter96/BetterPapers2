'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return(
        <>
            {/* Backdrop Overlay */}
            <div 
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${mounted && isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}
                onClick={() => setIsOpen(false)}
            />

            <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-blue-400/80">
                <div className="flex justify-between items-center h-18">
                    <Link href="/" className="pl-10 text-xl md:pl-24 md:text-2xl hover:opacity-80 transition-opacity">
                        backdrops.
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex text-lg md:pr-21 md:text-xl">
                        <Link href="/" className="px-3">
                            Home
                        </Link>
                        <Link href="/wallpapers" className="px-3">
                            Wallpapers
                        </Link>
                        <Link href="/cart" className="px-3">
                            Cart
                        </Link>
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button 
                        className="md:hidden pr-10"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="space-y-1.5">
                            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${mounted && isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${mounted && isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Slide-out Menu */}
                <div className={`fixed top-18 right-0 h-[calc(100vh-4.5rem)] w-64 bg-blue-400 transform transition-transform duration-300 ease-in-out ${mounted && isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <nav className="flex flex-col p-6 space-y-4">
                        <Link href="/" className="text-xl text-white" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/wallpapers" className="text-xl text-white" onClick={() => setIsOpen(false)}>
                            Wallpapers
                        </Link>
                        <Link href="/cart" className="text-xl text-white" onClick={() => setIsOpen(false)}>
                            Cart
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;

// Original Header component for reference
// import Link from 'next/link';

// function Header ()  {
//     return(
//         <div className="flex justify-between items-center h-18 bg-blue-400">
            
//             <h1 className="pl-10 text-xl md:pl-24 md:text-2xl">backdrops.</h1>

//             <nav className="text-lg md:pr-21 md:text-xl">
//                 <Link href="/" className="px-3">
//                     Home
//                 </Link>

//                 <Link href="/wallpapers" className="px-3">
//                     Wallpapers
//                 </Link>

//                 <Link href="/cart" className="px-3">
//                     Cart
//                 </Link>
//             </nav>
//         </div>
//     );
// }

// export default Header