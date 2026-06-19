import SmoothScrollProvider from "./components/layout/SmoothScrollProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

/*
    IMPORTANT TIPS - (When using React + GSAP)
    1. ❌ Don’t animate elements that mount/unmount
    2. ✅ Animate stable elements and change state inside them
 */

const App = () => {

    return (
        // Wrapped my app with react router, so that my website can show different pages depending on the url
        <BrowserRouter>
            <SmoothScrollProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

            </SmoothScrollProvider>
        </BrowserRouter>

    )
}
export default App;
