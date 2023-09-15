import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import pinterestIcon from "../../assets/icons/pinterest.png";
import youtubeIcon from "../../assets/icons/youtube.png";
import searchIcon from "../../assets/logos/searchicon.png";
// import favouriteIcon from "../../assets/logos/favourite.png";
import userIcon from "../../assets/logos/user.png";
import cartIcon from "../../assets/logos/cart.png";
import menuIcon from "../../assets/icons/burgermenu.png";
import kaj from "../../assets/logos/Kaj.jpg";
import closeIcon from "../../assets/icons/close.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import Search from "./Search";
import { useSelector } from "react-redux";
import profile from "../profile/Profile";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    const user = useSelector((state) => state.auth.user);

    const _ = ["translate-x-full", "translate-x-0", "hidden", "block"];

    return (
        <>
            {/* header upper */}
            <header className="bg-gradient-to-r from-yellow-500 to-yellow-700 hidden lg:block">
                <div className="py-2 px-4">
                    <div className="flex items-center justify-end gap-x-2">
                        <a href="#" target="_blank">
                            <img
                                src={facebookIcon}
                                alt="Facebook"
                                className="h-4 w-4 object-contain"
                            />
                        </a>

                        <a href="#" target="_blank">
                            <img
                                src={instagramIcon}
                                alt="Instagram"
                                className="h-4 w-4 object-contain"
                            />
                        </a>

                        <a href="#" target="_blank">
                            <img
                                src={linkedinIcon}
                                alt="Linkedin"
                                className="h-4 w-4 object-contain"
                            />
                        </a>

                        <a href="#" target="_blank">
                            <img
                                src={pinterestIcon}
                                alt="Pinterest"
                                className="h-4 w-4 object-contain"
                            />
                        </a>

                        <a href="#" target="_blank">
                            <img
                                src={youtubeIcon}
                                alt="Youtube"
                                className="h-4 w-4 object-contain"
                            />
                        </a>
                    </div>
                </div>
                <div className="p-2">
                    <div className="flex items-center justify-center">
                        <Link to="/">
                            <img
                                src={kaj}
                                alt="Website name"
                                className="h-12 w-auto rounded-full bg-yellow-600"
                            />
                        </Link>
                    </div>
                </div>
            </header>

            {/* header main */}
            <header className="bg-gradient-to-r from-yellow-500 to-yellow-700 sticky top-0 z-[1001]">
                <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
                    <div className="hidden lg:flex lg:flex-1">
                        <button
                            className="-m-1.5 p-1.5"
                            onClick={() => setOpenSearch(true)}
                        >
                            <img
                                className="h-7 w-7 object-contain"
                                src={searchIcon}
                                alt="Search Icon"
                            />
                        </button>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <img
                                src={menuIcon}
                                alt="Menu button"
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    <div className="flex lg:hidden gap-x-3 lg:flex-1 lg:justify-end">
                        <Link to={user?"/profile":"/login"}>
                            {" "}
                            <img
                                src={userIcon}
                                alt="user"
                                className="h-5 w-5 object-contain"
                            />
                        </Link>
                        <button onClick={() => setOpenSearch(true)}>
                            <img
                                src={searchIcon}
                                alt="Search"
                                className="h-5 w-5 object-contain"
                            />
                        </button>
                        <button onClick={() => setOpenCart(true)}>
                            <img
                                src={cartIcon}
                                alt="cart"
                                className="h-5 w-5 object-contain"
                            />
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link
                            to="/collection/all"
                            className="text-sm font-semibold leading-6 text-gray-900 uppercase"
                        >
                            Shop All
                        </Link>

                        <div className="relative group">
                            <p className="text-sm font-semibold leading-6 text-gray-900 uppercase">
                                Skin Care
                            </p>

                            <div className="absolute -left-8 top-full z-[1001] mt-3 w-screen max-w-md max-h-0 group-hover:max-h-96 overflow-y-hidden group-hover:overflow-y-auto rounded-lg bg-yellow-500 transition-[max-height] duration-500">
                                <div className="p-4">
                                    <Link
                                        to="/collection/facewash"
                                        className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2"
                                    >
                                        Face Wash
                                    </Link>

                                    <Link
                                        to="/collection/faceserum"
                                        className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2"
                                    >
                                        Face Serum
                                    </Link>

                                    <Link
                                        to="/collection/moisturizer"
                                        className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2"
                                    >
                                        Moisturizer
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <p className="text-sm font-semibold leading-6 text-gray-900 uppercase">
                                Bath & Body
                            </p>

                            <div className="absolute -left-8 top-full z-[1001] mt-3 w-screen max-w-md max-h-0 group-hover:max-h-96 overflow-y-hidden group-hover:overflow-y-auto rounded-lg bg-yellow-500 transition-[max-height] duration-500">
                                <div className="p-4">
                                    <Link
                                        to="/collection/soaps"
                                        className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2"
                                    >
                                        Soaps
                                    </Link>

                                    <Link
                                        to="/collection/showergel"
                                        className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2"
                                    >
                                        Shower Gel
                                    </Link>

                                    <Link
                                        to="/collection/bodylotion"
                                        className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2"
                                    >
                                        Body Lotion
                                    </Link>

                                    <Link
                                        to="/collection/handcream"
                                        className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2"
                                    >
                                        Hand Cream
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/collection/combooffers"
                            className="text-sm font-semibold leading-6 text-gray-900 uppercase"
                        >
                            Combo Offers
                        </Link>

                        <div className="relative group">
                            <p className="text-sm font-semibold leading-6 text-gray-900 uppercase">
                                About Us
                            </p>

                            <div className="absolute -left-8 top-full z-[1001] mt-3 w-screen max-w-md max-h-0 group-hover:max-h-96 overflow-y-hidden group-hover:overflow-y-auto rounded-lg bg-yellow-500 transition-[max-height] duration-500">
                                <div className="p-4">
                                    <Link
                                        to="#"
                                        className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2"
                                    >
                                        Our Story
                                    </Link>

                                    <Link
                                        to="/contact"
                                        className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2"
                                    >
                                        Contact Us
                                    </Link>

                                    <Link
                                        to="/faq"
                                        className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2"
                                    >
                                        FAQ's
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link
                            to="#"
                            className="text-sm font-semibold leading-6 text-gray-900 uppercase"
                        >
                            Our Blogs
                        </Link>
                    </div>

                    <div className="hidden gap-x-6 lg:flex lg:flex-1 lg:justify-end">
                        <Link to={user?"/profile":"/login"}>
                            <img
                                src={userIcon}
                                alt="user"
                                className="h-7 w-7 object-contain"
                            />
                        </Link>

                        <button onClick={() => setOpenCart(true)}>
                            <img
                                src={cartIcon}
                                alt="cart"
                                className="h-7 w-7 object-contain"
                            />
                        </button>
                    </div>
                </nav>

                <div className="lg:hidden">
                    <div
                        className={`fixed top-0 left-0 ${
                            mobileMenuOpen ? "block" : "hidden"
                        } bg-black bg-opacity-60 w-full h-screen z-[1001]`}
                    />

                    <div
                        className={`fixed inset-y-0 right-0 ${
                            mobileMenuOpen
                                ? "translate-x-0"
                                : "translate-x-full"
                        } z-[1001] w-full overflow-y-auto bg-yellow-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300`}
                    >
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <img
                                    src={closeIcon}
                                    className="h-6 w-6"
                                    alt="Close menu"
                                    aria-hidden="true"
                                />
                            </button>

                            <Link to="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    src={kaj}
                                    alt="Website name"
                                    className="h-8 w-auto rounded-full"
                                />
                            </Link>
                        </div>

                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link
                                        to="/collection/all"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                                    >
                                        Shop All
                                    </Link>

                                    <div>
                                        <p className="-mx-3 block px-3 py-2 text-base font-medium text-gray-900">
                                            Skin Care
                                        </p>

                                        <Link
                                            to="/collection/facewash"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                                        >
                                            FaceWash
                                        </Link>

                                        <Link
                                            to="/collection/faceserum"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                                        >
                                            Face Serum
                                        </Link>

                                        <Link
                                            to="/collection/moisturizer"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                                        >
                                            Moisturizer
                                        </Link>
                                    </div>

                                    <div>
                                        <p className="-mx-3 block px-3 py-2 text-base font-medium text-gray-900">
                                            Bath & Body
                                        </p>

                                        <Link
                                            to="/collection/soaps"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                                        >
                                            Soaps & Hand Cream
                                        </Link>

                                        <Link
                                            to="/collection/showergel"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                                        >
                                            Shower Gel
                                        </Link>

                                        <Link
                                            to="/collection/bodylotion"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                                        >
                                            Body Lotion
                                        </Link>
                                    </div>

                                    <Link
                                        to="/collection/combooffers"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                                    >
                                        Combo Offers
                                    </Link>

                                    <Link
                                        to="/contact"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {openCart && <Cart setOpen={setOpenCart} />}
            {openSearch && <Search setOpen={setOpenSearch} />}
        </>
    );
};

export default Navbar;
