import Link from 'next/link';

function Header ()  {
    return(
        <div className="flex justify-between items-center h-16 bg-blue-400">
            
            <h1 className="pl-24 text-2xl">backdrops.</h1>

            <nav className="pr-21 text-xl">
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
        </div>
    );
}

export default Header