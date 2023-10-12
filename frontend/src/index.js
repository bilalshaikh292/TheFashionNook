import Cartscreen from "./screens/CartScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestUrl } from "./util.js";
import SigninScreen from './screens/SigninScreen.js';
const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id' : Cartscreen,
    '/cart':Cartscreen,
    '/signin':SigninScreen,
}
const router = async () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}`: '/') +
    (request.id ? '/:id':'') +
    (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    await screen.after_render();
};
window.addEventListener("load",router);
window.addEventListener("hashchange",router);