import { getCartItems } from "./screens/localStorage";

export const parseRequestUrl = () =>{
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');
    return{
        resource: request[1],
        id: request[2],
        action: request[3],
    };
};
export const rerender = async(component) =>{
    document.getElementById("mian-container").innerHTML = await component.render();
    await component.after_render();
}

export const showloading = () =>{
    document.getElementById('loading-overlay').classList.add('active');
};
export const hideloading = () =>{
    document.getElementById('loading-overlay').classList.remove('active');
};
export const showmeassgae = (message,callback) =>{
    document.getElementById('message-overlay').innerHTML = 
    `
    <div>
    <div id="message-overlay-content">${message}</div>
    <button id="message-ovelay-close-button">OK</button>
    <div>
    `;
    document.getElementById('message-overlay').classList.add('active');
    document.getElementById('message-ovelay-close-button').addEventListener('click',() =>{
        document.getElementById('message-overlay').classList.romeve('active');
        if(callback){
            callback();
        }
    })
}
export const redirectUser = () => {
    console.log(getCartItems().length);
    if (getCartItems().length !== 0) {
      document.location.hash = '/shipping';
    } else {
      document.location.hash = '/';
    }
  };