<template >
    <div v-if="login.logingIn" class="loader_parent">
        <div class="loader"></div>
    </div>
    <div class="card">
        <h2 class="title">Log In</h2>  
        <form class="email_login" action="" @submit.prevent="logInUser">
            <label for="emailLogIn">E-mail</label>
            <input id="emailLogIn" type="text" v-model="login.Email"/>
            <label for="passwordLogIn">Password</label>
            <input id="passwordLogIn" type="password" v-model="login.HashCode"/>
            <button class="button">
                Log In
            </button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import router from '../router/index'
import UserService from '../services/UserService'

export default {
    name: "LogIn",
    setup(){
        const login = reactive({
            Email: '',
            HashCode: '',
            logingIn: false
        })

        function logInUser(){
            if(login.Email !='' && login.HashCode !=''){
                console.log("calling log in")
                login.logingIn = true
                UserService.logIn(login)
                .then(user => {
                    console.log(user)
                    router.push("/")
                })
            }
        }

        return {
            login,
            logInUser,
        }
    }
}
</script>

<style lang="scss" scoped>
/*.logIn{
    display: flex;
    flex-direction: column;
    margin-left: 30%;
    margin-right: 30%;
    .label_{
        color: white
    }

    .input_{
        background-color: #16191a;
        border: none;
        padding: 16px;
        display: block;
    }
}*/
.loader_parent{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #0e1011e1;
    z-index: 50;
    .loader {
        position: relative;
        top: 50%;
        left: 50%;
        border: 5px solid #ffffff00;
        border-radius: 50%;
        border-top: 5px solid #3498db;
        width: 25px;
        height: 25px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
}
.card {
  font-family: sans-serif;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  margin-bottom:1em;
  border-radius: 10px;
  background-color: #2d3436;
  padding: 1.8rem;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);

  .title {
    text-align: center;
    font-weight: bold;
    margin: 0;
    color: white;
  }
  .email_login {
    display: flex;
    flex-direction: column;

    label {
        color: #aaa6a6;
    }
    input[type="text"],
    input[type="password"] {
        padding: 10px 15px;
        margin-top: 3px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-sizing: border-box;
    }
    .button {
        background-color: rgb(84, 84, 223);
        color: white;
        padding: 12px 14px;
        margin-top: 5px;
        margin-bottom: 12px;
        width: 100%;
        border-radius: 10px;
        border: none;
        transition: 0.25s;
    }
    .button:hover {
        background-color: rgb(69, 69, 185);
        color: white;
        padding: 12px 14px;
        margin-top: 5px;
        margin-bottom: 12px;
        width: 100%;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
  }
}
</style>