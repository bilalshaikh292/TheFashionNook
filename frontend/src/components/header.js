import { getUserInfo } from "../screens/localStorage";

const Header ={
    render:() =>{
        const {name , isAdmin } = getUserInfo();
return`
<div class="logo"><a href="#">TheFashionNook</a></div>
<div class="headeritems">
${name 
    ? `<a href="/#/profile">${name}</a>`
    : `<a href="#/signin">Login</a>`
}
    <a href="#/cart">cart</a>
    ${isAdmin ? `<a href="/#/dashboard">Dashboard</a>`: ''}
</div>`;
    },
    after_render:() =>{},
};
export default Header;