import {Link} from "react-router-dom";
import Logo from "../ui/Logo.jsx";

export default function NewsNavbar() {

    return (
        <nav className="py-4 bg-transparent">
            <div className="">
                <Link
                    to="/"
                    aria-label="Go to Powerkicks homepage"
                    className="inline-flex"
                >
                    <Logo isBlack={true} />
                </Link>
            </div>
        </nav>
    );
}