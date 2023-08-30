import "./Navbar.css";
import facebookIcon from "../assets/icons/facebook.png"
import instagramIcon from "../assets/icons/instagram.png"
import linkedinIcon from "../assets/icons/linkedin.png"
import pinterestIcon from "../assets/icons/pinterest.png"
import youtubeIcon from "../assets/icons/youtube.png"
// import websiteLogo from "../assets/logos/websitelogo.png"
import searchIcon from "../assets/logos/searchicon.png"
import favouriteIcon from "../assets/logos/favourite.png"
import userIcon from "../assets/logos/user.png"
import cartIcon from "../assets/logos/cart.png"
import menuIcon from "../assets/icons/burgermenu.png"
import kaj from "../assets/logos/Kaj.jpg"
import closeIcon from "../assets/icons/close.png"
import {Link} from "react-router-dom";
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <>
        <header className="bg-yellow-500">
          <div className="py-2 px-4">
            <div className="flex align-middle justify-end gap-x-2">
              <a href="#" target="_blank">
                <img src={facebookIcon} alt="Facebook" className="h-4 w-4 object-contain"/>
              </a>

              <a href="#" target="_blank">
                <img src={instagramIcon} alt="Instagram" className="h-4 w-4 object-contain"/>
              </a>

              <a href="#" target="_blank">
                <img src={linkedinIcon} alt="Linkedin" className="h-4 w-4 object-contain"/>
              </a>

              <a href="#" target="_blank">
                <img src={pinterestIcon} alt="Pinterest" className="h-4 w-4 object-contain"/>
              </a>

              <a href="#" target="_blank">
                <img src={youtubeIcon} alt="Youtube" className="h-4 w-4 object-contain"/>
              </a>
            </div>
          </div>
          <div className="p-2">
            <div className="flex align-middle justify-center">
              <Link to="/">
                <img src={kaj} alt="Website name" className="h-12 w-auto rounded-full bg-yellow-600"/>
              </Link>
            </div>
          </div>
        </header>

        {/* --- */}
        <header className="bg-white">
          <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" >

            <div className="flex lg:flex-1">
              <Link className="-m-1.5 p-1.5" to={window.location.pathname + "?action=search"}>
                <img className="h-7 w-7 object-contain" src={searchIcon} alt="Search Icon"/>
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <img src={menuIcon} alt="Menu button" className="h-6 w-6" aria-hidden="true"/>
              </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/collection/all" className="text-sm font-semibold leading-6 text-gray-900 uppercase">
                Shop All
              </Link>

              <div className="relative group">
                <p className="text-sm font-semibold leading-6 text-gray-900 uppercase">
                  Skin Care
                </p>

                  <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md max-h-0 group-hover:max-h-96 overflow-hidden group-hover:overflow--auto rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition-[max-height] duration-500">
                    <div className="p-4">
                      <Link to="/collection/facewash" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-30 p-2">
                        Face Wash
                        {/*<span className="absolute inset-0" />*/}
                      </Link>

                      <Link to="/collection/faceserum" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2">
                        Face Serum
                        {/*<span className="absolute inset-0" />*/}
                      </Link>

                      <Link to="/collection/moisturizer" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2">
                        Moisturizer
                        {/*<span className="absolute inset-0" />*/}
                      </Link>

                      {/*<Link to="#" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2">*/}
                      {/*  Option 1*/}
                      {/*  <span className="absolute inset-0" />*/}
                      {/*</Link>*/}

                    </div>
                  </div>
              </div>

              <div className="relative group">
                <p className="text-sm font-semibold leading-6 text-gray-900 uppercase">
                  Bath & Body
                </p>

                <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md max-h-0 group-hover:max-h-96 overflow-hidden group-hover:overflow--auto rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition-[max-height] duration-500">
                  <div className="p-4">
                    <Link to="/collection/soaps" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-30 p-2">
                      Soaps
                      {/*<span className="absolute inset-0" />*/}
                    </Link>

                    <Link to="/collection/showergel" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2">
                      Shower Gel
                      {/*<span className="absolute inset-0" />*/}
                    </Link>

                    <Link to="/collection/bodylotion" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2">
                      Body Lotion
                      {/*<span className="absolute inset-0" />*/}
                    </Link>

                    <Link to="/collection/handcream" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2">
                      Hand Cream
                      {/*<span className="absolute inset-0" />*/}
                    </Link>

                  </div>
                </div>
              </div>

              <Link to="/collection/combooffers" className="text-sm font-semibold leading-6 text-gray-900 uppercase">
                Combo Offers
              </Link>

              <div className="relative group">
                <p className="text-sm font-semibold leading-6 text-gray-900 uppercase">
                  About Us
                </p>

                <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md max-h-0 group-hover:max-h-96 overflow-hidden group-hover:overflow--auto rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition-[max-height] duration-500">
                  <div className="p-4">
                    <Link to="#" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-30 p-2">
                      Our Story
                      {/*<span className="absolute inset-0" />*/}
                    </Link>

                    <Link to="/contact" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2">
                      Contact Us
                      {/*<span className="absolute inset-0" />*/}
                    </Link>

                    <Link to="/faq" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2">
                      FAQ's
                      {/*<span className="absolute inset-0" />*/}
                    </Link>

                    {/*<Link to="#" className="uppercase block font-semibold text-gray-900 rounded-lg hover:bg-gray-50 p-2">*/}
                    {/*  Option 1*/}
                    {/*  <span className="absolute inset-0" />*/}
                    {/*</Link>*/}

                  </div>
                </div>
              </div>
              <Link to="#" className="text-sm font-semibold leading-6 text-gray-900 uppercase">
                Our Blogs
              </Link>
            </div>

            <div className="hidden gap-x-6 lg:flex lg:flex-1 lg:justify-end">
              <Link to="/user"> <img src={userIcon} alt="user" className="h-7 w-7 object-contain"/></Link>
              <Link to="/favourite"> <img src={favouriteIcon} alt="favourite" className="h-7 w-7 object-contain"/></Link>
              <Link to={window.location.pathname + "?action=cart"}><img src={cartIcon} alt="cart" className="h-7 w-7 object-contain"/></Link>
            </div>
          </nav>

          {/*<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>*/}
          {/*  <div className="fixed inset-0 z-10" />*/}
          {/*  <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">*/}
          {/*    <div className="flex items-center justify-between">*/}
          {/*      <a href="#" className="-m-1.5 p-1.5">*/}
          {/*        <span className="sr-only">Your Company</span>*/}
          {/*        <img*/}
          {/*            className="h-8 w-auto"*/}
          {/*            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"*/}
          {/*            alt=""*/}
          {/*        />*/}
          {/*      </a>*/}
          {/*      <button*/}
          {/*          type="button"*/}
          {/*          className="-m-2.5 rounded-md p-2.5 text-gray-700"*/}
          {/*          onClick={() => setMobileMenuOpen(false)}*/}
          {/*      >*/}
          {/*        <span className="sr-only">Close menu</span>*/}
          {/*        <XMarkIcon className="h-6 w-6" aria-hidden="true" />*/}
          {/*      </button>*/}
          {/*    </div>*/}
          {/*    <div className="mt-6 flow-root">*/}
          {/*      <div className="-my-6 divide-y divide-gray-500/10">*/}
          {/*        <div className="space-y-2 py-6">*/}
          {/*          <Disclosure as="div" className="-mx-3">*/}
          {/*            {({ open }) => (*/}
          {/*                <>*/}
          {/*                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">*/}
          {/*                    Product*/}
          {/*                    <ChevronDownIcon*/}
          {/*                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}*/}
          {/*                        aria-hidden="true"*/}
          {/*                    />*/}
          {/*                  </Disclosure.Button>*/}
          {/*                  <Disclosure.Panel className="mt-2 space-y-2">*/}
          {/*                    {[...products, ...callsToAction].map((item) => (*/}
          {/*                        <Disclosure.Button*/}
          {/*                            key={item.name}*/}
          {/*                            as="a"*/}
          {/*                            href={item.href}*/}
          {/*                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
          {/*                        >*/}
          {/*                          {item.name}*/}
          {/*                        </Disclosure.Button>*/}
          {/*                    ))}*/}
          {/*                  </Disclosure.Panel>*/}
          {/*                </>*/}
          {/*            )}*/}
          {/*          </Disclosure>*/}
          {/*          <a*/}
          {/*              href="#"*/}
          {/*              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
          {/*          >*/}
          {/*            Features*/}
          {/*          </a>*/}
          {/*          <a*/}
          {/*              href="#"*/}
          {/*              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
          {/*          >*/}
          {/*            Marketplace*/}
          {/*          </a>*/}
          {/*          <a*/}
          {/*              href="#"*/}
          {/*              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
          {/*          >*/}
          {/*            Company*/}
          {/*          </a>*/}
          {/*        </div>*/}
          {/*        <div className="py-6">*/}
          {/*          <a*/}
          {/*              href="#"*/}
          {/*              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
          {/*          >*/}
          {/*            Log in*/}
          {/*          </a>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </Dialog.Panel>*/}
          {/*</Dialog>*/}
        </header>
      </>
  );
};

export default Navbar;
