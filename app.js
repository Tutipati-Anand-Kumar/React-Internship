import login from "./login.js"
import register from "./register.js"

const anhors = document.querySelectorAll("a");
const div = document.querySelector("#root");

anhors.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        e.preventDefault()
        // console.log(e.target.pathname);
        let path = e.target.pathname
        history.pushState(null, "", `${path}`);
        
        if (location.pathname=="/login"){
            div.innerHTML = login();
        }
        else if (location.pathname=="/register"){
            div.innerHTML = register();
        }
    })
})