import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawerOpen(open);
    };
    const [openDropdown, setOpenDropdown] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
    };

    const [moreOpen, setMoreOpen] = useState(false);
    const toggleMore = () => {
        setMoreOpen(!moreOpen);
    };
    const handleHover = () => {
        setOpenDropdown(true);
    };
    const handleMouseLeave = () => {
        setOpenDropdown(false);
    };

    const navOption = [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "Services",
            link: "/services",
        },
        {
            label: "About Us",
            link: "/about",
        },
        {
            label: "Contact Us",
            link: "/contact",
        },
        {
            label: "Artist",
            link: "/artist",
        },
        // {
        //     label: "More",
        //     link: "/more",
        // },
    ];

    const MoreOptions = [
        {
            label: "YOUTUBE INFLUENCER MARKETING",
            Link: "youtube-influencer-marketing",
            submore: "FAQs",
        },
        {
            label: "INSTAGRAM INFLUENCER MARKETING",
            submore: "Testimonials",
        },
        {
            label: "REGIONAL INFLUENCER MARKETING",
            submore: "Our Partner Brand",
        },
        {
            label: "CELEBRITIES MARKETING",
            submore: "Awards and Pulications",
        },
        {
            label: "BRAND PLACEMENT",
            submore: "Career with Us",
        },
    ];
    return (
        <>
            <div className="w-[100%] z-[999] fixed bg-white overflow-hidden h-16 sm:h-16 md:h-20 lg:h-20 border-b-2 flex items-center justify-between nav_header">
                <Link className="w-full overflow-hidden" to='/'><div >
                    <img
                        src="/logo3ar3.png"
                        alt=""
                        className=" h-[50px] w-[80px] md:w-[150px] md:h-[80px] ml-0 sm:ml-1 md:ml-20"
                    />
                </div></Link>
                <div className="w-[100%] flex justify-between ultra xs:hidden sm:hidden md:block">
                    <div className="">
                        <ul className="flex gap-8 mr-10">
                            <Link to='/' className="ultra font-medium xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800">
                                <img src="/house.png" alt="" className="w-8" />
                            </Link>

                            <div className="flex flex-col h-10 "
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                <li
                                    className="ultra relative font-bold xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800 mt-2"
                                    onClick={toggleServices}
                                    onMouseEnter={() => setServicesOpen(true)}
                                >
                                    Services
                                    {servicesOpen ? <ExpandLess /> : <ExpandMore onMouseEnter={() => setServicesOpen(true)} />}
                                </li>

                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        exit={{ opacity: 0, y: -100 }}
                                        className="flex flex-col absolute mt-10 border px-3 bg-white rounded"
                                        onMouseLeave={() => setServicesOpen(false)}
                                    >
                                        {MoreOptions.map((item, index) => (
                                            <h1
                                                key={index}
                                                className="ultra h-auto py-2 font-medium xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800"
                                            >
                                              {item.label}
                                            </h1>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                            <Link to='/about' className="ultra font-bold xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800 mt-2">
                                About Us
                            </Link>

                            <Link to='/contact' className="ultra font-bold xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800 mt-2">
                                Contact Us
                            </Link>
                            <Link to='/artist' className="ultra font-bold xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800 mt-2">
                                Artist
                            </Link>

                            <div
                                className="flex flex-col h-10"
                                onMouseLeave={() => setMoreOpen(false)}
                            >
                                {/* <li
                                    className="ultra relative font-bold xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800 mt-2"
                                    onClick={toggleMore}
                                    onMouseEnter={() => setMoreOpen(true)}
                                >
                                    More
                                    {moreOpen ? <ExpandLess /> : <ExpandMore onMouseEnter={() => setMoreOpen(true)} />}
                                </li> */}
                                {moreOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        exit={{ opacity: 0, y: -100 }}
                                        className="flex flex-col absolute mt-10 border px-3 bg-white rounded"
                                        onMouseLeave={() => setMoreOpen(false)}
                                    >
                                        {MoreOptions.map((item, index) => (
                                            <Link to={item.Link}><h1
                                                key={index}
                                                className="ultra h-auto py-2 font-medium xs:hidden sm:hidden md:block cursor-pointer hover:text-blue-800"
                                            >
                                                {item.submore}
                                            </h1></Link>
                                        ))}
                                    </motion.div>
                                )}
                            </div>

                        </ul>
                    </div>
                </div>

                <div className="-mr-14 flex justify-center items-center sm:block md:hidden">
                    <Box sx={{ flexGrow: 1 }}>
                        <CssBaseline />
                        <AppBar
                            position="static"
                            sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                        >
                            <Toolbar>
                                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                    My Navbar
                                </Typography>
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={toggleDrawer(true)}
                                >
                                    <MenuIcon sx={{ color: "black", fontSize: "2.3rem" }} />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                            sx={{
                                "& .MuiDrawer-paper": {
                                    width: 250,
                                },
                            }}
                        >
                            <Box sx={{ width: 250 }} role="presentation">
                                <List>
                                    {navOption.map((text, index) => (
                                        <div key={index}>
                                            {text.label === "Services" || text.label === "More" ? (
                                                <div
                                                    onClick={
                                                        text.label === "Services"
                                                            ? toggleServices
                                                            : toggleMore
                                                    }
                                                    onMouseEnter={handleHover}
                                                    onMouseLeave={handleMouseLeave}
                                                >
                                                    <ListItem>
                                                        <ListItemText primary={text.label} />
                                                        {text.label === "Services" ? (
                                                            servicesOpen ? (
                                                                <ExpandLess />
                                                            ) : (
                                                                <ExpandMore />
                                                            )
                                                        ) : moreOpen ? (
                                                            <ExpandLess />
                                                        ) : (
                                                            <ExpandMore />
                                                        )}
                                                    </ListItem>
                                                    {text.label === "Services" ? (
                                                        <Collapse
                                                            in={servicesOpen}
                                                            timeout="auto"
                                                            unmountOnExit
                                                        >
                                                            <List component="div" disablePadding>
                                                                {MoreOptions.map((subItem, subIndex) => (
                                                                    <ListItem key={subIndex} sx={{ pl: 4 }}>
                                                                        <ListItemText
                                                                            primary={subItem.label}
                                                                            onClick={() =>
                                                                                console.log("Clicked:", subItem.link)
                                                                            }
                                                                        />
                                                                    </ListItem>
                                                                ))}
                                                            </List>
                                                        </Collapse>
                                                    ) : (
                                                        <Collapse
                                                            in={moreOpen}
                                                            timeout="auto"
                                                            unmountOnExit
                                                        >
                                                            <List component="div" disablePadding>
                                                                {MoreOptions.map((subItem, subIndex) => (
                                                                    <ListItem key={subIndex} sx={{ pl: 4 }}>
                                                                        <ListItemText
                                                                            primary={subItem.submore}
                                                                            onClick={() =>
                                                                                console.log("Clicked:", subItem.link)
                                                                            }
                                                                        />
                                                                    </ListItem>
                                                                ))}
                                                            </List>
                                                        </Collapse>
                                                    )}
                                                </div>
                                            ) : (
                                                <ListItem>
                                                    {/* <ListItemText  primary={text.label} /> */}
                                                    <Link to={text.link}>{text.label}</Link>
                                                </ListItem>
                                            )}
                                        </div>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                </div>

                {/* <div className="w-48 py-4 flex justify-center h-20 items-center mr-1">
                    <Link to='/contact' className="ultra contact text-center py-2 font-semibold bg-[#9B59B6] px-1 w-40 rounded-full text-white sm:hidden md:block cursor-pointer hover:bg-orange-500 hover:w-52 mr-">
                        Contact Us
                    </Link>

                </div> */}
                <div className="w-44 py-4 flex justify-center h-20 items-center mr-1">
                <Link to='/contact'className="ultra text-white sm:hidden md:block cursor-pointer"><button className="Btnn text-white"></button></Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;