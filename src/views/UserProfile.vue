<template>
  <div class="user-profile">
    <div class="user-profile__userpanel">
      <div class="image-cont">
        <img id="image" src="../assets/color-2174045_640.png">
        <div class="inner" v-if="userProfile.test">
          <input class="inputfile" type="file" accept="image/*" @change="updateCover">
          <label><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg></label>
        </div>
      </div>
      <img id="imageB" src="../assets/color-2174045_640.png">
    </div>
    <div v-if="!state.loadedP" class="loader"></div>
    <div v-if="state.loadedP" class="user-profile_info">
      <div class="interactions">  
        <h1 class="user-profile__FLName">{{user.UserLoaded.FirstName}} {{user.UserLoaded.LastName}}</h1> 
        <button class="button" v-if="!userProfile.test && !state.followState" @click="followF">Follow</button>
        <button class="button" v-if="!userProfile.test && state.followState" @click="unfollowF">Unfollow</button>
        <button class="button" v-if="!userProfile.test" @click="sendMessage">Send Message</button>
      </div>
      <p class="user-profile__username">{{user.UserLoaded.UserName}}</p> 
        <div class="user-profile__follower-count">
            <p>Following: {{state.following.length}} Followers: {{state.followers.length}}</p>
        </div>
    </div>
    <div v-if="!state.loaded&state.loadedP" class="loader"></div>
    <div v-if="state.loaded" class="user-profile__tweet-wrapper">
      <CreatTweetPanel v-if="userProfile.test" @addTweet="addTweet"></CreatTweetPanel>
      <strong v-if="state.tweets.length === 0">no tweets posted yet</strong>
      <TweetItem class="user-profile__tweet" 
      v-for="tweet in state.tweets" 
      :key="tweet._id" 
      :username="user.UserLoaded.UserName" 
      :tweet="tweet.Body" 
      :userId="tweet.UserId"
      />
    </div>
    
  </div>
</template>

<script>
import { onMounted, reactive, computed, createApp } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import UserService from '../services/UserService'
import TweetItem from "../components/TweetItem";
import CreatTweetPanel from "../components/CreateTweetPanel";
import chat from '../components/ChatBox'

export default {
  name: 'UserProfile',
  components: { TweetItem, CreatTweetPanel },
  setup(props, ctx) {
    const userProfile = reactive({
      test: null
    })
    const store = useStore()
    const user = reactive({
      UserLoaded: {UserName: '', FirstName: '', LastName: ''}
    })
    const userProfileId = computed(() => store.state.User.user._id)
    const userProfileName = computed(() => store.state.User.user.UserName)
    const route = useRoute()
    const userId = computed(() => route.params.userId)
    const state = reactive({
      room: '',
      followers: [],
      following: [],
      followState: false,
      loaded: false,
      loadedP: false,
      tweets: []/*{
        _id: '',
        UserId: '',
        Body: ''
      } */
    })
    onMounted(async () => {
      if(userProfileId.value === userId.value) {
        userProfile.test = true
        user.UserLoaded = store.state.User.user
        state.loadedP = true
      }
      else {
        userProfile.test = false
        user.UserLoaded = await UserService.getUserId({_id: userId.value})
        state.loadedP = true
      }
      //get all this users tweets
      let temp = userId.value
      if(user.UserLoaded.img){
        document.getElementById("image").src = user.UserLoaded.img.toString()
        document.getElementById("imageB").src = user.UserLoaded.img.toString()
      }
      UserService.getFollower({_id: temp})
      .then(followerss => {
        for (let frs of followerss){
          if (frs.Follower === userProfileId.value) state.followState = true
          state.followers.unshift(frs.Follower)
        }
      })

      UserService.getFollowing({_id: temp})
      .then(followingss => {
        for (let flns of followingss){
          state.following.unshift(flns.Following)
        }
      })

      UserService.getTweets({UserIdT: temp})
      .then(tweetss => {
        for (let tt of tweetss){
          state.loaded = true
          state.tweets.unshift({_id: tt._id, UserId: tt.UserId, Body: tt.Body})
        }
      })
    })

    function followF(){
      UserService.follow({
        userId: userId.value
      }).then(follow => {
        state.followState = true
        state.followers.unshift(follow.Follower)
      })
    }

    function unfollowF(){
      UserService.unFollow({
        _id: userId.value
      }).then(() => {
        state.followState = false
        var index = state.followers.indexOf(userProfileId.value);
        if (index > -1) {
            state.followers.splice(index, 1);
         }
      })
    }

    function updateCover(event){
      let image
      const reader = new FileReader()
      reader.onload = (e) => {
        image = e.target.result
        UserService.updateCover({
          imageFile: image,
          imageType: event.target.files[0].type
        }).then(() => {
        })
      }
      reader.readAsDataURL(event.target.files[0])
    }

    function addTweet(tweetBody) {
      //call api here to add a new tweet
      UserService.Tweet({
        UserIdT: user.UserLoaded._id,
        Body: tweetBody,
        UserName: user.UserLoaded.UserName
      }).then(tweet => {
        state.tweets.unshift({_id: tweet._id, UserId: tweet.UserId, Body: tweet.Body})
      })
    }

    async function sendMessage(){
      await UserService.getChatRoom({_id: userId.value
      }).then(async (room) => {
        if(room === null){
          await UserService.makeChatRoom({_id: userId.value
          }).then( maderoom => {
            state.room = maderoom._id
          })
        }
        else state.room = room._id
        var instance = createApp(chat, {
              chatName: user.UserLoaded.FirstName+" "+user.UserLoaded.LastName,
              ProfileName: userProfileName,
              chatId: state.room,
              senderId: userProfileId.value,
              receiverId: userId.value
            })
        ctx.emit('openChat', instance)
      })
    }
    return {
      user,
      userProfile,
      state,
      userId,
      addTweet,
      followF,
      unfollowF,
      sendMessage,
      updateCover
    }
  },
}
</script>

<style lang="scss" scoped>
.user-profile {
    .image-cont{
        position: absolute;
        text-align: center;
        display: flex;
        height: 350px;
        justify-content: center;
        align-items: center;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        width: 800px;
        flex-direction: column;
        object-fit: cover;
        z-index: 1;
        #image{
          position: absolute;
          text-align: center;
          display: flex;
          height: 350px;
          justify-content: center;
          align-items: center;
          border-bottom-right-radius: 10px;
          border-bottom-left-radius: 10px;
          width: 800px;
          flex-direction: column;
          object-fit: cover;
          z-index: 1;
        }
    }
    #imageB{
        text-align: center;
        display: flex;
        height: 350px;
        width: 100%;
        object-fit: cover;
        filter: blur(5px);
        -webkit-filter: blur(5px);
    }
    .user-profile__userpanel {
        text-align: center;
        align-items: center;
        display: flex;
        height: 350px;
        width: 100%;
        flex-direction: column;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        //background: #ffffff1f;
        border-bottom: 0.1px solid #212627;
        color: white;
        transition: 0.25s;
        .inputfile{
          display: none;
        }
        label{
          display: none;
        }
        .user-profile__admin {
            color: white;
            border-radius: 5px;
            margin-top: 15px;
            margin-right: auto;
            font-size: 18px;
            font-weight: normal;
        }   
    }
    .user-profile__userpanel:hover{
      .inner {
          position: relative;
          background-color: #00000049;
          width: 40px;
          height: 40px;
          border-radius: 100%;
          position: absolute;
          top: 1%;
          left: 0.7%;
          z-index: 1;
        }

        .inner:hover {
          background-color: #00000085;
        }
        .inputfile {
            display: initial;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: 1;
            width: 40px;
            height: 40px;
            cursor: pointer;
        }
        .inputfile + label {
            font-size: 1.25rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: inline-block;
            overflow: hidden;
            width: 40px;
            height: 40px;
            pointer-events: none;
            cursor: pointer;
            line-height: 40px;
            text-align: center;
        }
        .inputfile + label svg {
            fill: #fff;
        }
    }
    .user-profile_info{
      text-align: left;
      align-items: left;
      display: flex;
      flex-direction: column;
      margin-top: 1%;
      margin-left: 7%;
      color: white;
      h1{
            margin-top: 0.2em;
            margin-bottom: 0.1em;
        }

      h1{
        display: inline-block;
      }

      .interactions{
        display: inline-block;

        .button {
          background-color: rgb(84, 84, 223);
          color: white;
          padding: 12px 14px;
          margin-top: 5px;
          margin-bottom: 5px;
          margin-left: 10px;
          border-radius: 10px;
          border: none;
          transition: 0.25s;
      }
      .button:hover {
          background-color: rgb(69, 69, 185);
          color: white;
          padding: 12px 14px;
          margin-top: 5px;
          margin-bottom: 5;
          margin-left: 10px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
      }
        }

      .user-profile__username{
            margin: 0;
            color: #8d8a8a;
        }
        
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
    .user-profile__tweet-wrapper {
      background-color: #16191a;
      width: auto;
      padding: 50px 5%;
      display: grid;
    }
}
</style>