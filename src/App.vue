<template>
  <div id="app">
    <Appbar/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
   <!--  <div>
      <img alt="logo" src="./assets/icon.png">
      <h1>Aepp Store - Dapps on Aeternity</h1>
      <p>Discover and Vote on Dapps</p>
    </div>
     -->
      <!-- <a href="https://github.com/pseudozach/aepredict" target="_blank">source code</a> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Form /> -->

<!--       <button
        type="button"
        class="btn"
        @click="showModal"
      >
        Open Modal!
      </button>   -->   

<!--     <div style="display: inline;">

      <SigninButton />

      <VueLoadingButton
        aria-label="Create"
        class="button"
        @click.native="showModal"
        :loading="false"
        :styled="true"
      >Create</VueLoadingButton>

    </div> -->

    <!-- <Aesignin @CustomEventInputChanged="doSomenthing"/> -->

    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      aepubkey="aepubkey"
    />


   <!--  <button id="show-modal" @click="showModal = true">Show Modal</button>
    <modal v-if="showModal" @close="showModal = false">
      <Form2 />
    </modal> -->
    <!-- <Table/> -->

    <div > Card Holder
      <Card v-for="aepp in aepps" :key="aepp.key" v-bind:aepp="aepp"/>
      <!-- <div v-for="aepp in aepps" :key="aepp.key" :aepp="aepp.key"></div> -->
    </div>

    <v-btn
      id="addbutton"
      class="mx-2"
      fab
      large
      color="purple"
      @click="showModal"
      :disabled="!walletconnected"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>

    <notifications position="bottom right"/>
  </div>
</template>

<script>
  import { EventBus } from './eventbus';
  // import HelloWorld from './components/HelloWorld.vue'
  import Table from './components/table.vue'
  import Card from './components/card.vue'
  import Appbar from './components/appbar.vue'
  // import Form from './components/form.vue'
  // import Form2 from './components/form2.vue'
  import Modal from './components/modal.vue';
  // import Form2 from './components/form2.vue'
  import VueLoadingButton from "vue-loading-button";
  // import SigninButton from './components/signin.vue';
  // import Aesignin from './components/aesignin.vue';

// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
  apiKey: process.env.VUE_APP_fb_apikey,
  authDomain: process.env.VUE_APP_fb_authdomain,
  databaseURL: process.env.VUE_APP_fb_dburl,
  projectId: process.env.VUE_APP_fb_projectid,
  storageBucket: process.env.VUE_APP_fb_storagebucket,
  messagingSenderId: process.env.VUE_APP_fb_msgsenderid,
  appId: process.env.VUE_APP_fb_appid,
  measurementId: process.env.VUE_APP_fb_measurementid
};
  if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

const db = firebase
  // .initializeApp({ databaseURL: 'https://MY-DATABASE.firebaseio.com' })
  .database()

import Vue from 'vue'
Vue.component("modal", {
  template: "#modal-template"
});

import Notifications from 'vue-notification'
Vue.use(Notifications)

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // Table,
    Card,
    Appbar,
    // Form,
    // Form2,
    Modal,
    VueLoadingButton,
    // Aesignin,
    // SigninButton
  },
  data() {
    return {
      isModalVisible: false,
      aeclient: null,
      aepubkey: 'nothing',
      dbref: 'aeppstore_testnet',
      contractname: 'aeppstore',
      aepps: null,    
      walletconnected: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    fetchData() {
      db.ref(this.dbref).on("value", snapshot => {
        if(snapshot.exists()){
          let data = snapshot.val();
          let messages = [];
          Object.keys(data).forEach(key => {
            // console.log("each data[key]: ", data[key]);
            var shortaddress = data[key]["owner"].substr(0,8) + "..." + data[key]["owner"].substr(-5);
            // 
            var msgtopush = {key: key, shortaddress:shortaddress, ...data[key]};

            // console.log("msgtopush: ", msgtopush);
            messages.push(msgtopush);
            // messages.push({
            //   merchant: key,
            //   lolli: data[key].lolli,
            //   fold: data[key].fold,
            //   strike: data[key].strike,
            //   updatedAt: ''
            // });
          });
          this.aepps = messages;     
          // console.log("pushed all this.aepps", this.aepps);     
        }

      });    
    },
  },
  created() {
    // let viewMessage = this;
    // const itemsRef = fire.database().ref("cbtable");
    this.fetchData()
  },
  mounted: function () {
    let thisthing = this 
    EventBus.$on('walletconnected', function(data){
      thisthing.walletconnected = true;
    });
  },
    // doSomenthing ( data ) {
    //   console.log("app.vue got aepubkey: ", data);
    //   this.aepubkey = data;
    // }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
#addbutton {
  float: right;
  margin-right: 20px;
  background-color: #FF2D55;
  color: white;
}
</style>
