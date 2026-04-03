import ScrolledNavBar from "./ScrolledNavbar.jsx";
import HeroNavBar from "./HeroNavBar.jsx";

export default function NavBar({ navScrolled }) {
    return navScrolled ? <ScrolledNavBar /> : <HeroNavBar />;
}