<template>
    <div v-if="userData.signingup" class="loader_parent">
        <div class="loader"></div>
    </div>
    <div class="card">
        <h2 class="title">Sign Up</h2>
        <form class="email_sign_up" action="" @submit.prevent="signUpUser">
            <label for="email">E-mail</label>
            <input id="email" type="text" v-model="userData.Email"/>
            <label for="password">Password</label>
            <input id="password" type="password" v-model="userData.password"/>
            <label for="confirmpassword">Confirm password</label>
            <input id="confirmpassword" type="password" v-model="userData.confpassword"/>
            <label for="username">Username</label>
            <input id="username" type="text" v-model="userData.UserName"/>
            <label for="firsname">Firsname</label>
            <input id="firsname" type="text" v-model="userData.FirstName"/>
            <label for="lastname">Lastname</label>
            <input id="lastname" type="text" v-model="userData.LastName"/>
            <button class="button">
                Sign Up
            </button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import router from '../router/index'
import UserService from '../services/UserService'

export default {
    name: "SignUp",
    setup(){
        const userData = reactive({
            Email: '',
            Password: '',
            Confpassword: '',
            UserName: '',
            FirstName: '',
            LastName: '',
            signingup: false
        })

        function signUpUser(){
            if(userData.password === userData.confpassword
            && userData.Email !='' && userData.password != '' && userData.UserName != ''
            && userData.FirstName !='' && userData.LastName !=''){
                userData.signingup = true
                UserService.signUp(userData)
                .then(user => {
                    console.log(user)
                    router.push("/")
                })
            }
        }

        return {
            userData,
            signUpUser
        }

    }
}
</script>

<style lang="scss" scoped>
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
  .email_sign_up {
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