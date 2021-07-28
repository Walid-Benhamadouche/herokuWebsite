<template>
    <div class= "body">
        <div class="log_in">
            <LogIn/>
        </div>
        <div class="sign_up">
            <SignUp/>
        </div>
    </div>
</template>

<script>

import LogIn from "../components/LogIn"
import SignUp from "../components/SignUp"

export default {
    name: "LogInSignUp",
    components: { LogIn, SignUp }
}
</script>

<style lang="scss" scoped>
.body{
    .log_in{
        width: 50%;
        float: left
    }
    .sign_up{
        width: 50%;
        float: right
    }
}
</style>