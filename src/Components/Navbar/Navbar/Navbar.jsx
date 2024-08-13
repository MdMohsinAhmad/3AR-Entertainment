
import './Navbar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleDown, faX , faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup
} from '@headlessui/react'

import { Link } from 'react-router-dom'
const products = [
  { name: 'YouTube Influencer Marketing', description: 'FAQs', href: '#' },
  { name: 'Instagram Influencer Marketing', description: 'Testimonials', href: '#' },
  { name: 'Regional Influencer Marketing', description: 'Our Partner Brand', href: '#' },
  { name: 'Celebrities Marketing', description: 'Awards and Publications', href: '#' },
  { name: 'Brand Placement', description: 'Career with Us', href: '#' }
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b shadow-md z-[999] fixed w-[100%]">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to='/' className="-m-1.5 p-1.5">
            <img alt="" src="/logo3ar3.png" className="w-16 h-12" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: '35px' }} />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex items-center justify-center lg:gap-x-12">
          <Link to='/' className="ultra font-medium xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800">
            <img src="/house.png" alt="" className="w-8" />
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Services
              <FontAwesomeIcon icon={faAngleDown} />
            </PopoverButton>
            <PopoverPanel className="absolute top-full left-0 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      {/* <ArrowPathIcon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" /> */}
                      <FontAwesomeIcon icon={faArrowRight}  />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                      </a>
                      {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link to='/about' className="text-sm font-semibold leading-6 text-gray-900">About Us</Link>
          <Link to='/contact' className="text-sm font-semibold leading-6 text-gray-900">Contact Us</Link>
          <Link to='/artist' className="text-sm font-semibold leading-6 text-gray-900">Artist</Link>
          {/* <Link to='/contact' className="ultra contact text-center py-2 font-semibold bg-[#9B59B6] px-1 w-40 rounded-full text-white sm:hidden md:block cursor-pointer hover:bg-orange-500 hover:w-52 mr-"> */}

          {/* /* From Uiverse.io by adamgiebl */}
          <Link to='/contact' className="cssbuttons-io-button">
            Contact
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </Link>


          {/* </Link> */}
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-0 z-10 w-full mt-[82px] overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="" src="/logo3ar3.png" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <FontAwesomeIcon icon={faX} style={{color:'red',backgroundColor:'gray',padding:'12px',borderRadius:'50%'}}/>
              {/* <XMarkIcon aria-hidden="true" className="h-6 w-6" /> */}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500">
              <div className="space-y-2 py-6">
                <Disclosure as="div">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Services
                    <FontAwesomeIcon icon={faAngleDown} className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                    {/* <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" /> */}
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link to='/about' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Us</Link>
                <Link to='/contact' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact Us</Link>
                <Link to='/artist' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Artist</Link>
              </div>
              <div className="py-6">
                <Link to='/contact' className="ultra contact text-center py-2 font-semibold bg-[#9B59B6] px-1 w-40 rounded-full text-white sm:hidden md:block cursor-pointer hover:bg-orange-500 hover:w-52 mr-">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
