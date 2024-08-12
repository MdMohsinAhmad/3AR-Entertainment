// import React, { useState } from "react";
// import "./Navbar.css";
// import { motion } from "framer-motion";
// import AppBar from "@mui/material/AppBar";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Toolbar, Typography, IconButton } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import Collapse from "@mui/material/Collapse";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const toggleDrawer = (open) => (event) => {
//         if (
//             event.type === "keydown" &&
//             (event.key === "Tab" || event.key === "Shift")
//         ) {
//             return;
//         }
//         setDrawerOpen(open);
//     };
//     const [openDropdown, setOpenDropdown] = useState(false);
//     const [servicesOpen, setServicesOpen] = useState(false);

//     const toggleServices = () => {
//         setServicesOpen(!servicesOpen);
//     };

//     const [moreOpen, setMoreOpen] = useState(false);
//     const toggleMore = () => {
//         setMoreOpen(!moreOpen);
//     };
//     const handleHover = () => {
//         setOpenDropdown(true);
//     };
//     const handleMouseLeave = () => {
//         setOpenDropdown(false);
//     };

//     const navOption = [
//         {
//             label: "Home",
//             link: "/",
//         },
//         {
//             label: "Services",
//             link: "/services",
//         },
//         {
//             label: "About Us",
//             link: "/about",
//         },
//         {
//             label: "Contact Us",
//             link: "/contact",
//         },
//         {
//             label: "Artist",
//             link: "/artist",
//         },
//         // {
//         //     label: "More",
//         //     link: "/more",
//         // },
//     ];

//     const MoreOptions = [
//         {
//             label: "YOUTUBE INFLUENCER MARKETING",
//             Link: "youtube-influencer-marketing",
//             submore: "FAQs",
//         },
//         {
//             label: "INSTAGRAM INFLUENCER MARKETING",
//             submore: "Testimonials",
//         },
//         {
//             label: "REGIONAL INFLUENCER MARKETING",
//             submore: "Our Partner Brand",
//         },
//         {
//             label: "CELEBRITIES MARKETING",
//             submore: "Awards and Pulications",
//         },
//         {
//             label: "BRAND PLACEMENT",
//             submore: "Career with Us",
//         },
//     ];
//     return (
//         <>
//             <div className="w-[100%] z-[999] fixed bg-white overflow-hidden h-16 sm:h-16 md:h-20 lg:h-20 border-b-2 flex items-center justify-between nav_header">
//                 <Link className="w-full overflow-hidden" to='/'><div >
//                     <img
//                         src="/logo3ar3.png"
//                         alt=""
//                         className=" h-[50px] w-[80px] md:w-[150px] md:h-[80px] ml-0 sm:ml-1 md:ml-20"
//                     />
//                 </div></Link>
//                 <div className="w-[100%] flex justify-between ultra xs:hidden sm:hidden md:block">
//                     <div className="">
//                         <ul className="flex gap-8 mr-10">
//                             <Link to='/' className="ultra font-medium xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800">
//                                 <img src="/house.png" alt="" className="w-8" />
//                             </Link>

//                             <div className="flex flex-col h-10 z-[9999] "
//                                 onMouseLeave={() => setServicesOpen(false)}>
//                                 <li
//                                     className="ultra  font-bold xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800 mt-2"
//                                     onClick={toggleServices}
//                                     onMouseEnter={() => setServicesOpen(true)}
//                                 >
//                                     Services
//                                     {servicesOpen ? <ExpandLess /> : <ExpandMore onMouseEnter={() => setServicesOpen(true)} />}
//                                 </li>

//                                 {servicesOpen && (
//                                     <motion.div
//                                         initial={{ opacity: 0, y: 100 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ duration: 0.5 }}
//                                         exit={{ opacity: 0, y: -100 }}
//                                         className="flex flex-col absolute mt-10 border px-3 bg-white rounded"
//                                         onMouseLeave={() => setServicesOpen(false)}
//                                     >
//                                         {MoreOptions.map((item, index) => (
//                                             <h1
//                                                 key={index}
//                                                 className="ultra  h-auto py-2 font-medium xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800"
//                                             >
//                                                 {item.label}
//                                             </h1>
//                                         ))}
//                                     </motion.div>
//                                 )}
//                             </div>
//                             <Link to='/about' className="ultra font-bold xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800 mt-2">
//                                 About Us
//                             </Link>

//                             <Link to='/contact' className="ultra font-bold xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800 mt-2">
//                                 Contact Us
//                             </Link>
//                             <Link to='/artist' className="ultra font-bold xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800 mt-2">
//                                 Artist
//                             </Link>

//                             <div
//                                 className="flex flex-col h-10"
//                                 onMouseLeave={() => setMoreOpen(false)}
//                             >
//                                 {/* <li
//                                     className="ultra relative font-bold xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800 mt-2"
//                                     onClick={toggleMore}
//                                     onMouseEnter={() => setMoreOpen(true)}
//                                 >
//                                     More
//                                     {moreOpen ? <ExpandLess /> : <ExpandMore onMouseEnter={() => setMoreOpen(true)} />}
//                                 </li> */}
//                                 {moreOpen && (
//                                     <motion.div
//                                         initial={{ opacity: 0, y: 100 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ duration: 0.5 }}
//                                         exit={{ opacity: 0, y: -100 }}
//                                         className="flex flex-col absolute mt-10 border px-3 bg-white rounded"
//                                         onMouseLeave={() => setMoreOpen(false)}
//                                     >
//                                         {MoreOptions.map((item, index) => (
//                                             <Link to={item.Link}><h1
//                                                 key={index}
//                                                 className="ultra h-auto py-2 font-medium xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800"
//                                             >
//                                                 {item.submore}
//                                             </h1></Link>
//                                         ))}
//                                     </motion.div>
//                                 )}
//                             </div>

//                         </ul>
//                     </div>
//                 </div>

//                 <div className="-mr-14 flex justify-center items-center sm:block md:hidden">
//                     <Box sx={{ flexGrow: 1 }}>
//                         <CssBaseline />
//                         <AppBar
//                             position="static"
//                             sx={{ backgroundColor: "transparent", boxShadow: "none" }}
//                         >
//                             <Toolbar>
//                                 <Typography variant="h6" sx={{ flexGrow: 1 }}>
//                                     My Navbar
//                                 </Typography>
//                                 <IconButton
//                                     edge="end"
//                                     color="inherit"
//                                     aria-label="menu"
//                                     onClick={toggleDrawer(true)}
//                                 >
//                                     <MenuIcon sx={{ color: "black", fontSize: "2.3rem" }} />
//                                 </IconButton>
//                             </Toolbar>
//                         </AppBar>
//                         <Drawer
//                             anchor="right"
//                             open={drawerOpen}
//                             onClose={toggleDrawer(false)}
//                             sx={{
//                                 "& .MuiDrawer-paper": {
//                                     width: 250,
//                                 },
//                             }}
//                         >
//                             <Box sx={{ width: 250 }} role="presentation">
//                                 <List>
//                                     {navOption.map((text, index) => (
//                                         <div key={index}>
//                                             {text.label === "Services" || text.label === "More" ? (
//                                                 <div
//                                                     onClick={
//                                                         text.label === "Services"
//                                                             ? toggleServices
//                                                             : toggleMore
//                                                     }
//                                                     onMouseEnter={handleHover}
//                                                     onMouseLeave={handleMouseLeave}
//                                                 >
//                                                     <ListItem>
//                                                         <ListItemText primary={text.label} />
//                                                         {text.label === "Services" ? (
//                                                             servicesOpen ? (
//                                                                 <ExpandLess />
//                                                             ) : (
//                                                                 <ExpandMore />
//                                                             )
//                                                         ) : moreOpen ? (
//                                                             <ExpandLess />
//                                                         ) : (
//                                                             <ExpandMore />
//                                                         )}
//                                                     </ListItem>
//                                                     {text.label === "Services" ? (
//                                                         <Collapse
//                                                             in={servicesOpen}
//                                                             timeout="auto"
//                                                             unmountOnExit
//                                                         >
//                                                             <List component="div" disablePadding>
//                                                                 {MoreOptions.map((subItem, subIndex) => (
//                                                                     <ListItem key={subIndex} sx={{ pl: 4 }}>
//                                                                         <ListItemText
//                                                                             primary={subItem.label}
//                                                                             onClick={() =>
//                                                                                 console.log("Clicked:", subItem.link)
//                                                                             }
//                                                                         />
//                                                                     </ListItem>
//                                                                 ))}
//                                                             </List>
//                                                         </Collapse>
//                                                     ) : (
//                                                         <Collapse
//                                                             in={moreOpen}
//                                                             timeout="auto"
//                                                             unmountOnExit
//                                                         >
//                                                             <List component="div" disablePadding>
//                                                                 {MoreOptions.map((subItem, subIndex) => (
//                                                                     <ListItem key={subIndex} sx={{ pl: 4 }}>
//                                                                         <ListItemText
//                                                                             primary={subItem.submore}
//                                                                             onClick={() =>
//                                                                                 console.log("Clicked:", subItem.link)
//                                                                             }
//                                                                         />
//                                                                     </ListItem>
//                                                                 ))}
//                                                             </List>
//                                                         </Collapse>
//                                                     )}
//                                                 </div>
//                                             ) : (
//                                                 <ListItem>
//                                                     {/* <ListItemText  primary={text.label} /> */}
//                                                     <Link to={text.link}>{text.label}</Link>
//                                                 </ListItem>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </List>
//                             </Box>
//                         </Drawer>
//                     </Box>
//                 </div>

//                 {/* <div className="w-48 py-4 flex justify-center h-20 items-center mr-1">
//                     <Link to='/contact' className="ultra contact text-center py-2 font-semibold bg-[#9B59B6] px-1 w-40 rounded-full text-white sm:hidden md:block cursor-pointer hover:bg-orange-500 hover:w-52 mr-">
//                         Contact Us
//                     </Link>

//                 </div> */}
//                 <div className="w-44 py-4 flex justify-center h-20 items-center mr-1">
//                     <Link to='/contact' className="ultra text-white sm:hidden md:block cursor-pointer"><button className="Btnn text-white"></button></Link>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Navbar;

'use client'
import './Navbar.css'
import { useState } from 'react'
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
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowPathIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  PlayCircleIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
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
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex items-center justify-center lg:gap-x-12">
          <Link to='/' className="ultra font-medium xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800">
            <img src="/house.png" alt="" className="w-8" />
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Services
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute top-full left-0 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <ArrowPathIcon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
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
          <Link to='/contact' class="cssbuttons-io-button">
            Contact
            <div class="icon">
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
        <DialogPanel className="fixed inset-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500">
              <div className="space-y-2 py-6">
                <Disclosure as="div">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
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
