<template>
  <form action="" class="user-profile__create-tweet" @submit.prevent="creatNewTweet" 
    :class="{'exceeded': newTweetCharacterCount > 180}">
        <label for="newtweet"><strong>New Tweet</strong> {{newTweetCharacterCount}}/180</label>
        <textarea id="newtweet" extarea style="resize: none;" rows="4" v-model="state.newTweetContent"/>
        <div class="user-profile__createtweet-type">
        </div>
    <button>
        tweet-t-t
    </button>
  </form>
</template>

<script>
import { reactive,computed } from 'vue';

export default {
    name: "CreateTweetPanel",
    setup(props, ctx) {
        const state = reactive({
            newTweetContent: '',
        })

        const newTweetCharacterCount = computed(()=> state.newTweetContent.length)

        function creatNewTweet() {
            if(state.newTweetContent) 
            {
                ctx.emit('addTweet', state.newTweetContent)
                state.newTweetContent = '';
            }
        }

        return {
            state,
            newTweetCharacterCount,
            creatNewTweet
        }
    },
}
</script>

<style lang="scss" scoped>
.user-profile__create-tweet {
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            padding: 20px;
            margin: 5px;
            width: 60%;
            background-color: #212627;
            border-radius: 10px;
            border: 1px solid #212627;
            box-sizing: border-box;
            transition: all 0.25s ease;
            color: white;

            button {
                margin-top: 0.5em;
                border-radius: 20px;
                border: 1.5px solid #2d3436;
                height: 50px;
                width: 120px;
                background-color: #2d3436;
                color: white;
                transition: 0.25s;
            }
            button:hover {
                margin-top: 0.5em;
                border-radius: 20px;
                border: 1.5px solid rgb(69, 69, 185);
                height: 50px;
                width: 120px;
                background-color: rgb(69, 69, 185);
                color: white;
                cursor: pointer;
            }

            #newtweet {
                font-size: 15px;
                color: white;
                border-radius: 20px;
                border: 1.5px solid #2d3436;
                height: 60%;
                width: 100%;
                background-color:  #2d3436;
            }
            #newtweet {
                outline: none;
            }

            &.exceeded {
                color: red;
                button {
                    margin-top: 0.5em;
                    background-color: red;
                    border: none;
                    color: white;
                }
            }
        }
</style>