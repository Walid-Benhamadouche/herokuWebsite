<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="!state.loaded" class="loader"></div>
    <div v-if="state.loaded" class="users-list">
      <strong v-if="state.tweets.length === 0">follow someone to see their tweet-t-ts</strong>
      <TweetItem class="user-profile__tweet" 
      v-for="tweet in state.tweets" 
      :key="tweet._id" 
      :username="tweet.UserName" 
      :tweet="tweet.Body" 
      :userId="tweet.UserId"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { useStore } from 'vuex';
import TweetItem from "../components/TweetItem";
import UserService from "../services/UserService"

export default {
  name: 'Home',
  components: { TweetItem },
  setup(){
    const store = useStore()
    const userProfileId = computed(() => store.state.User.user._id)
    const state = reactive({
      following: [],
      loaded: false,
      tweets: []/*{
        _id: '',
        UserId: '',
        Body: ''
      } */
    })
    onMounted(() => {

      UserService.getFollowing({_id: userProfileId.value})      
      .then(followingss => {
        for (let flns of followingss){
          state.following.unshift(flns.Following)
        }
        for (let temp of state.following){
        console.log("temp", temp)
        UserService.getTweets({UserIdT: temp})
        .then(tweetss => {
          state.loaded = true
          for (let tt of tweetss){
            state.tweets.unshift({_id: tt._id, UserId: tt.UserId, Body: tt.Body, UserName: tt.UserName})
          }
        })
        }
      })
    })

    /*async function getUsers(){
      UserService.getUsers()
      .then(us => {
        users.value = us
      })
    }*/

    return {
      state,
    }
  }
}
</script>
<style lang="scss" scoped>
  .home {
    padding: 50px 5%;
    color: white;
    
  }
  .loader {
    position: relative;
    left: 25%;
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
  .users-list{
    display: flex;
    flex-direction: column;
    background-color: #16191a;
    color: white;
  }
</style>