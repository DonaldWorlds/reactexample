// 'use client' directive ensures this component is rendered on the client-side (in the browser) in Next.js 13+
// In Next.js, when you have files that need to be run on the client (as opposed to server-side rendering), 
// this is the correct way to indicate that.
'use client';

// Import necessary hooks from React and components from react-bootstrap library
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"; // Importing Bootstrap Navbar components that will be used in the UI
import styles from './Example.module.css'; // Import custom CSS Module for local, scoped styles to this component

// Step 1: Define TypeScript interface to structure the state
interface NavbarState {
    expanded: boolean;  // Tracks whether the navbar is expanded (for mobile view)
    isScrolled: boolean; // Tracks if the user has scrolled more than 50px (used for changing navbar appearance)
}

// Step 2: Create the functional component `EnhancedNavbar`
const EnhancedNavbar = () => {
    const [state, setState] = useState<NavbarState>({
        expanded: false, // Initially, the navbar is collapsed (mobile view)
        isScrolled: false, // Initially, the page is not scrolled
    });

    // Step 3: Set up scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            setState((prevState) => ({
                ...prevState,
                isScrolled: window.scrollY > 50, // If scrolled more than 50px, change navbar appearance
            }));
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        setState((prevState) => ({
            ...prevState,
            expanded: !prevState.expanded, // Toggle navbar visibility
        }));
    };

    return (
        <>
            <Navbar
                expand="lg"
                fixed="top" // Make the navbar stick to the top
                className={`bg-dark ${styles.navbar} ${state.isScrolled ? styles.navbarScrolled : styles.navbarTransparent}`}
                expanded={state.expanded}
            >
                <Container fluid>
                    {/* Add a logo or home link */}
                    <Navbar.Brand href="#home" className={styles.navbarBrand}>
                        <img src="/logo.png" alt="Logo" className={styles.logo} /> {/* Logo image */}
                        Professional Navbar
                    </Navbar.Brand>

                    {/* Toggle button for mobile view */}
                    <Navbar.Toggle
                        aria-controls="navbar-nav"
                        onClick={toggleNavbar}
                        className="text-white" // Ensure the toggle button is visible
                    />

                    {/* Collapsible Navbar links */}
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ml-auto"> {/* Align nav items to the right */}
                            <Nav.Link href="#home" className={`${styles.navLink} text-white`}>
                                Home
                            </Nav.Link>
                            <Nav.Link href="#about" className={`${styles.navLink} text-white`}>
                                About
                            </Nav.Link>
                            <Nav.Link href="#services" className={`${styles.navLink} text-white`}>
                                Services
                            </Nav.Link>
                            <Nav.Link href="#contact" className={`${styles.navLink} text-white`}>
                                Contact
                            </Nav.Link>

                            {/* Dropdown for additional options */}
                            <NavDropdown title="More" id="navbar-dropdown" className="text-white">
                                <NavDropdown.Item href="#action1" className={styles.dropdownItem}>
                                    Action 1
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action2" className={styles.dropdownItem}>
                                    Action 2
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action3" className={styles.dropdownItem}>
                                    Seperate
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default EnhancedNavbar;
