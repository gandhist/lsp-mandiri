import { selector, atom } from "recoil";

const isLogin = JSON.parse(localStorage.getItem('access_token')) ? JSON.parse(localStorage.getItem('access_token')).login : false; 
let user = '';
const authUser = selector({
    key : 'authUser',
    get : async () => {
        if (isLogin) {
            user = JSON.parse(localStorage.getItem('access_token')).access_token.user
        }
       
        // if want request from api, do it here
        let data = {
            isLogin : isLogin,
            data : user
        };
        return data;
    }
})

const authenticated = atom({
    key : 'authenticated',
    default : {
        check : isLogin
    }
})


export {authUser, authenticated}