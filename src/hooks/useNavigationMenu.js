
import { useCallback, useId, useRef, useState } from "react";

export default function useNavigationMenu() {
    const menuButtonRef = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);

    // Unique ID for the navigation overlay.
    const menuId = useId();

    // Toggle the navigation overlay.
    const handleToggle = useCallback(() => {
        setMenuOpen((prev) => !prev);
    }, []);

    // Close the navigation overlay.
    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    return {
        menuButtonRef,
        menuOpen,
        menuId,
        handleToggle,
        closeMenu,
    };
}
