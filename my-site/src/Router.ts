// route nav for side bar buttons
// offline api
import { showHome } from "./HomePage";
import { showAbout } from "./AboutPage";
import { showTest } from "./test";

type route = () => void;

// my routes
const routes: Record<string, route> = {
    "#/home": showHome,
    "#/about": showAbout,
    "#/test": showTest,
};

// export to index.ts
export function router() {
    const path = window.location.hash;
    const route = routes[path]?? showHome; // no path then home page
    route();
}