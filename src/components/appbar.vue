<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Aepp Store</v-toolbar-title>

      <v-spacer></v-spacer>

      <Aesignin @CustomEventInputChanged="doSomenthing"/>

<!--       <v-btn icon @click="plusclicked">
        <v-icon>mdi-plus</v-icon>  
      </v-btn> -->

      <v-btn
        :loading="connectingWallet"
        :disabled="connectedWallet"
        color="blue-grey"
        class="ma-2 white--text"
        @click="plusclicked"
      >
        {{addressResponse}}
        <v-icon
          right
          dark
        >
          mdi-wallet
        </v-icon>
      </v-btn>



<!--       <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
<!--       <v-container style="height: 1500px;">
      </v-container> -->
    </v-sheet>
  </v-card>
</template>

<script>
  import { EventBus } from '../eventbus';
  import Aesignin from './aesignin.vue'; 

  const errorAsField = async fn => {
    try {
      return { result: await fn }
    } catch (error) {
      console.log(error)
      return { error }
    }
  }

  export default {
    name: 'my-component',
      components: {
      // HelloWorld,
      // Table,
      // Card,
      // Appbar,
      // // Form,
      // // Form2,
      // Modal,
      // VueLoadingButton,
      Aesignin,
      // SigninButton
    },
    data() {
      return {
        datetime: null,
        mindatetime: null,
        connectingWallet: false,
        connectedWallet: false,
        addressResponse: 'Connect',
        walletAddress: '',
        // connectstr: "Connect",
      }
    },
    methods: {
      async plusclicked () {
        this.connectingWallet = true;
        EventBus.$emit('scanforwallets', ["\"manual\""]);
      },    
      doSomenthing ( data ) {
        console.log("app.vue got aepubkey: ", data);
        this.connectingWallet = false;
        this.aepubkey = data;

      },
      async setWalletAddress (client) {
        let thisthing = this
        let response = await errorAsField(client.address())
        // console.log("address response: ", response)
        thisthing.walletAddress = response.result;
        // "ak_P3fcnnJo5fnJCGQZntkNHCKv9sKTu2ABDNVYShVmPtf1KnipR".substr(0,8) + "..." + "ak_P3fcnnJo5fnJCGQZntkNHCKv9sKTu2ABDNVYShVmPtf1KnipR".substr(-5);
        let shortaddy = response.result.substr(0,8) + "..." + response.result.substr(-5);
        thisthing.addressResponse = shortaddy;
        thisthing.connectingWallet = false;
        thisthing.connectedWallet = true;
      }
    },
    mounted: function () {
      let thisthing = this
      // // YYYY-MM-DD hh:mm a
      // var mindate = moment().format('YYYY-MM-DD hh:mm a');
      // // console.log("mindate: ", mindate);
      // this.mindatetime = mindate;
    
      EventBus.$on('walletconnected', function(data){
        // console.log("received walletconnected in appbar: ", data, data.address());
        thisthing.setWalletAddress(data);
      });
    },
  }
</script>
