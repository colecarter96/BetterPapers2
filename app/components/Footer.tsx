const Footer = () => {
    return (
        <div className="bg-blue-400 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <p className="text-sm md:text-base">
                            Spice up your digital world with our wallpapers.
                        </p>
                        <p className="text-lg font-semibold">
                            backdrops.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <ul className="space-y-2 text-sm md:text-base">
                            <li>
                                <a href="https://www.instagram.com/backdrops_wallpapers/" className="hover:underline">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/backdrops_wallpapers/" className="hover:underline">
                                    TikTok
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <ul className="space-y-2 text-sm md:text-base">
                            <li>Söder Mälarstrand 43, Stockholm</li>
                            <li>info@backdrops.com</li>
                            <li>+1 805 754 7679</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-blue-300 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Backdrops. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;