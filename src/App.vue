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

    <div style="display: inline;">

      <!-- <SigninButton /> -->

      <VueLoadingButton
        aria-label="Create"
        class="button"
        @click.native="showModal"
        :loading="false"
        :styled="true"
      >Create</VueLoadingButton>

    </div>

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
    <Card/>

    <notifications position="bottom right"/>
  </div>
</template>

<script>
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
      aepubkey: 'nothing'
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    // doSomenthing ( data ) {
    //   console.log("app.vue got aepubkey: ", data);
    //   this.aepubkey = data;
    // }
  }
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
</style>
