<!-- <template>
  <div style="width: 600px">
    <vue-table-dynamic 
      :params="params" 
      ref="table"
    >
    </vue-table-dynamic>
  </div>
</template> -->

<!-- compactMode -->
<!-- :fixed-header="true" -->
<!-- <template>
  <div style="margin: 20px;"> -->

<!--     <SkeletonCard v-for="item in items" :key="item.message" primary="#112233" structure="701120333" animDisable /> -->

    <!-- <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: false,
        placeholder: 'Search Cashback Rates',
      }"
      :pagination-options="{
        enabled: true,
        perPage: 20}"
      @on-cell-click="onCellClick"
      :sort-options="{
        enabled: false,
      }"
      >
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'txid'">
          <a :href="props.row.txid" target="_blank">txid link</a> 
        </span>
        <span v-else-if="props.column.field == 'join'">
          <VueLoadingButton
            aria-label="Join Market"
            style="background-color: green;"
            class="button"
            label="up"
            @click.native="setThumbsUp"
            data-id="up"
            :styled="true"
            :loading="isLoadingJoin"
          ><font-awesome-icon icon="thumbs-up" /></VueLoadingButton>
          <VueLoadingButton
            aria-label="Join Market"
            style="margin-left: 10px; background-color: red;"
            class="button"
            @click.native="setThumbsDown"
            data-id="down"
            :styled="true"
            :loading="isLoadingJoin"
          ><font-awesome-icon icon="thumbs-down" /></VueLoadingButton>
        </span>
        <span v-else-if="props.column.field == 'resolve'">
          <VueLoadingButton
            aria-label="Resolve Market"
            style="background-color: green;"
            class="button"
            @click.native="setThumbsUp"
            :styled="true"
            :loading="isLoadingResolve"
          ><font-awesome-icon icon="thumbs-up" /></VueLoadingButton>
          <VueLoadingButton
            aria-label="Resolve Market"
            style="margin-left: 10px; background-color: red;"
            class="button"
            @click.native="setThumbsDown"
            :styled="true"
            :loading="isLoadingResolve"
          ><font-awesome-icon icon="thumbs-down" /></VueLoadingButton>
        </span>
        <span v-else-if="props.column.field == 'exit'">
          <VueLoadingButton
            aria-label="Exit Market"
            class="button"
            :styled="true"
            :loading="isLoadingExit"
          ><font-awesome-icon icon="times" /></VueLoadingButton>
        </span>
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>
      </template>
    </vue-good-table> -->

<!--   </div>
</template> -->



<template>
  <v-card
    class="mx-auto bg-black-initial"
    color="gray"
    dark
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-apps
      </v-icon>
      <!-- Aepp Name -->
      <span class="text-h6 font-weight-light">{{aepp.name}}</span>
    </v-card-title>

    <!-- "Description of the aepp along with features and services offered." -->
    <v-card-text class="text-h3 font-weight-bold" style="fontSize: 1.25rem; color: white !important;">
      {{aepp.description}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
<!--         <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="ae.png"
            style="backgroundSize: contain;"
          ></v-img> -->
            <!-- src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light" -->
          <!-- <AAvataaar identifier="aepp.key"></AAvataaar> -->
        <!-- </v-list-item-avatar> -->

        <v-list-item-content class="nearavatar">
          <!-- AE address of Aepp Creator -->
          <v-list-item-title style="textAlign: left;">
            {{aepp.shortaddress}}
          </v-list-item-title>
        </v-list-item-content>

      <v-btn :href="aepp.link" target="_blank" class="mr-5">
        Visit Aepp
      </v-btn>

<!--         <v-row
          align="center"
          justify="end"
          class="rightend"
        > -->
          <v-btn icon @click="upvote" class="text-blue">
            <v-icon class="mr-1">
              mdi-chevron-triple-up
            </v-icon>
          </v-btn>          
          <span class="subheading mr-5 text-blue">
            {{aepp.upvote}}
          </span>
          <!-- <span class="mr-1">  ·  </span> -->
<!--           <v-btn icon @click="">
            <v-icon>
              mdi-launch
            </v-icon>
          </v-btn> 
          <span class="subheading">{{aepp.click}}</span> -->
        <!-- </v-row> -->
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.mx-auto {
  margin: 50px;
}
.rightend {
  align-items: center;
  justify-content: end;
}
.nearavatar {
  flex: auto;
  margin-left: 5px;
}
.mr-5 {
  margin-right: 5px;
}
.v-image__image--cover{
  background-size: contain;
}
.text-blue {
    --text-opacity: 1;
    /*color: #1161fe;*/
    color: rgba(17,97,254,var(--text-opacity)) !important;
}
.text-gray-500 {
    --text-opacity: 1;
    color: #787878;
    color: rgba(120,120,120,var(--text-opacity));
} 
.bg-black-200 {
    --bg-opacity: 1;
    /*background-color: #090909;*/
    background-color: rgba(9,9,9,var(--bg-opacity)) !important;
}
.bg-black-initial {
    --bg-opacity: 1;
    /*background-color: #000;*/
    background-color: rgba(0,0,0,var(--bg-opacity)) !important;
}
</style>


<script>
// import VueTableDynamic from 'vue-table-dynamic'

// import VueGoodTablePlugin from 'vue-good-table';
// // import the styles
// import 'vue-good-table/dist/vue-good-table.css'
// Vue.use(VueGoodTablePlugin);


import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import VueLoadingButton from 'vue-loading-button'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPlus)
library.add(faCheck)
library.add(faTimes)
library.add(faThumbsUp)
library.add(faThumbsDown)

import Vue from 'vue'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import SkeletonCards from 'vue-ultimate-skeleton-cards'
Vue.use(SkeletonCards)

// import { db } from '../main'

import { EventBus } from '../eventbus';
const BigNum = require('bn.js');

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

// import AAvataaar from 'a-avataaar';
// Vue.use(AAvataaar)

// // Get a RTDB instance
// import firebase from 'firebase/app'
// import 'firebase/database'

// var firebaseConfig = {
//   apiKey: process.env.VUE_APP_fb_apikey,
//   authDomain: process.env.VUE_APP_fb_authdomain,
//   databaseURL: process.env.VUE_APP_fb_dburl,
//   projectId: process.env.VUE_APP_fb_projectid,
//   storageBucket: process.env.VUE_APP_fb_storagebucket,
//   messagingSenderId: process.env.VUE_APP_fb_msgsenderid,
//   appId: process.env.VUE_APP_fb_appid,
//   measurementId: process.env.VUE_APP_fb_measurementid
// };
//   if (!firebase.apps.length) {
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
//   }

// const db = firebase
//   // .initializeApp({ databaseURL: 'https://MY-DATABASE.firebaseio.com' })
//   .database()

export default {
  name: 'my-component',
  props:["aepp"],
   mounted: function () {
    let thisthing = this
    EventBus.$on('upvoteaeppdone', function(data){
      // { result: 4, account: "ak_P3fcnnJo5fnJCGQZntkNHCKv9sKTu2ABDNVYShVmPtf1KnipR", txid: {…} }
      
      // console.log("confirming aepp data: ", data.aepp.aeppId, thisthing.aepp.aeppId);
      // only increase upvote if appId is equal to this appId
      if(data.aepp.aeppId != thisthing.aepp.aeppId){
        return false;
      }
      //  else {
      //   console.log("it's a match");
      // }

      console.log("upvoteaeppdone: ", data, thisthing);
      thisthing.isLoading = false;

      // console.log("adding to number of markets: ",  thisthing.marketcount);
      const explorerTransactionUrl = thisthing.explorer_testnet+data.txid.hash;
      
      // var fbobj = {marketId: data.result-1, account: data.account, question: thisthing.form.question, paypervote: thisthing.form.paypervote, oracle: thisthing.form.oracle.trim(), txid: explorerTransactionUrl, resolveTime: thisthing.datetime, unixtime: thisthing.unixtime, resolveType:"manual", yescount: 0, nocount: 0, balance:0, resolved: false, result: false,  createdAt: firebase.database.ServerValue.TIMESTAMP};
      // console.log("fbobj ", fbobj);
      // db.ref(thisthing.dbref).push(fbobj);

      data.aepp.upvote = parseInt(data.aepp.upvote) + 100
      data.aepp.balance = parseInt(data.aepp.balance) + 99
      data.aepp.updatedAt = firebase.database.ServerValue.TIMESTAMP
      console.log("updating to ", data.aepp);
      db.ref(thisthing.dbref + "/" + data.aepp.key).set(data.aepp);

      // not needed
      // thisthing.aepp.upvote = thisthing.aepp.upvote + 100;

      this.$notify({
        title: 'Upvoted Aepp',
        text: 'Tx broadcasted. Upvote completed: ' + explorerTransactionUrl,
        type: 'success',
        duration: 10000,
      });

      // thisthing.$emit('exit', true);
    });   
    EventBus.$on('joinmarketdone', function(data){
      // { result: 4, account: "ak_P3fcnnJo5fnJCGQZntkNHCKv9sKTu2ABDNVYShVmPtf1KnipR", txid: {…} }
      // {result: decoded, account: thisthing.onAccount, txid: result, marketobj: passobj.marketobj, args: passobj.args}
      console.log("joinmarketdone: ", data, data.marketobj, data.args[1]);
      var marketobj = data.marketobj;
      thisthing.isLoadingJoin = false;

      if(data.args[1] == "true" || data.args[1] == true){
        var updateobj = {yescount: marketobj.yescount+1, nocount: marketobj.nocount, balance: parseInt(parseInt(marketobj.balance)+parseInt(marketobj.paypervote))};
      } else {
        var updateobj = {yescount: marketobj.yescount, nocount: marketobj.nocount+1, balance: parseInt(parseInt(marketobj.balance)+parseInt(marketobj.paypervote))};
      }
      const explorerTransactionUrl = "https://explorer.testnet.aeternity.io/transactions/"+data.txid.hash;
      // var updateobj = {yescount: newyescount, nocount: newnocount, balance: parseInt(marketobj.balance+marketobj.paypervote)};
      console.log("market, updateobj: ",thisthing.dbref, marketobj.merchant, updateobj);
        db.ref(thisthing.dbref+"/"+marketobj.merchant).update(updateobj);
      this.$notify({
        title: 'Joining Market',
        text: 'Tx broadcasted. Joined market: ' + explorerTransactionUrl,
        type: 'success',
        duration: 10000,
      });
    }); 

    EventBus.$on('resolvemarketdone', function(data){
      // { result: 4, account: "ak_P3fcnnJo5fnJCGQZntkNHCKv9sKTu2ABDNVYShVmPtf1KnipR", txid: {…} }
      // {result: decoded, account: thisthing.onAccount, txid: result, marketobj: passobj.marketobj, args: passobj.args}
      console.log("resolvemarketdone: ", data);
      var marketobj = data.marketobj;
      thisthing.isLoadingResolve = false;

      var updateobj = {balance: 0, resolved: true, result:data.args[1] };
      const explorerTransactionUrl = "https://explorer.testnet.aeternity.io/transactions/"+data.txid.hash;
      // var updateobj = {yescount: newyescount, nocount: newnocount, balance: parseInt(marketobj.balance+marketobj.paypervote)};
      console.log("market, updateobj: ",marketobj.merchant, updateobj);
        db.ref(thisthing.dbref+"/"+marketobj.merchant).update(updateobj);
      this.$notify({
        title: 'Resolving Market',
        text: 'Tx broadcasted. Resolved market: ' + explorerTransactionUrl,
        type: 'success',
        duration: 10000,
      });
    }); 

    EventBus.$on('resolvemarketerror', function(data){
      thisthing.isLoadingResolve = false;
      this.$notify({
        title: 'Resolve Market Error',
        text: data,
        type: 'error',
        duration: 10000,
      });
    });

  },
  methods: {
    setThumbsUp(){
      // console.log("setThumbsUp");
      this.fatype = "up";
    },
    setThumbsDown(){
      // console.log("setThumbsUp");
      this.fatype = "down";
    },
    onCellClick(params) {
      // console.log("row clicked: ", params.row)
      // console.log("column clicked: ", params.column)
      // console.log("event: ", params.event, event.target.getAttribute('data-id'), event.currentTarget.getAttribute('data-id'), event.target.dataset.id)
      // console.log("fatype: ", this.fatype)
      if(params.column.field == "join"){
        this.joinMarket(params.row);
      }
      if(params.column.field == "resolve"){
        // console.log("resolve column clicked")
        this.resolveMarket(params.row);
      }
      if(params.column.field == "exit"){
        this.exitMarket(params.row);
      }
      // params.row - row object 
      // params.column - column object
      // params.rowIndex - index of this row on the current page.
      // params.event - click event
    },
    // {
    //     "merchant": "-MYgY5u5gralxGXbxwkH",
    //     "account": "ST15RGYVK9ACFQWMFFA2TVASDVZH38B4VAV4WF6BJ",
    //     "createdAt": 1618876329677,
    //     "marketId": 2,
    //     "nocount": 0,
    //     "oracle": "asdasd",
    //     "paypervote": "1",
    //     "question": "test2",
    //     "resolveTime": "2021-04-24 04:52 pm",
    //     "resolveType": "manual",
    //     "txid": "https://explorer..co/txid/${data.txId}?chain=testnet",
    //     "unixtime": 1619308320,
    //     "yescount": 0,
    //     "vgt_id": 0,
    //     "originalIndex": 0
    // }
    async upvote(){
      let thisthing = this
      console.log("upvoting: ", this.aepp);
      EventBus.$emit('upvoteaepp', this.aepp);

      // // validate
      // if(marketobj.question == "" || marketobj.paypervote == "" || marketobj.oracle.trim() == "" || this.fatype == "nothing"){
      //   // using options
      //   this.$notify({
      //     title: 'Empty Fields',
      //     text: 'Failed to fetch market data, refresh and try again.',
      //     type: 'error',
      //     duration: 10000,
      //   });
      //   return;
      // }
      // // thisthing.statustext = "Creating Market...";
      // thisthing.isLoadingJoin = true;
        
      // // (joinMarket (marketId int) (side bool) (amount uint))
      // // let sideobj = trueCV();
      // let newyescount = marketobj.yescount;
      // let newnocount = marketobj.nocount;
      // let uservote = "false";
      // if(thisthing.fatype == "down"){
      //   // sideobj = falseCV();
      //   uservote = "false";
      //   newnocount++;
      // } else {
      //   newyescount++;
      //   uservote = "true";
      // }

      // var passobj = {args: [marketobj.marketId+"", uservote], paypervote: marketobj.paypervote, marketobj: marketobj};
      // EventBus.$emit('joinmarket', passobj);

    },
    async joinMarket(marketobj){
      let thisthing = this
      // validate
      if(marketobj.question == "" || marketobj.paypervote == "" || marketobj.oracle.trim() == "" || this.fatype == "nothing"){
        // using options
        this.$notify({
          title: 'Empty Fields',
          text: 'Failed to fetch market data, refresh and try again.',
          type: 'error',
          duration: 10000,
        });
        return;
      }
      // thisthing.statustext = "Creating Market...";
      thisthing.isLoadingJoin = true;
        
      // (joinMarket (marketId int) (side bool) (amount uint))
      // let sideobj = trueCV();
      let newyescount = marketobj.yescount;
      let newnocount = marketobj.nocount;
      let uservote = "false";
      if(thisthing.fatype == "down"){
        // sideobj = falseCV();
        uservote = "false";
        newnocount++;
      } else {
        newyescount++;
        uservote = "true";
      }

      var passobj = {args: [marketobj.marketId+"", uservote], paypervote: marketobj.paypervote, marketobj: marketobj};
      EventBus.$emit('joinmarket', passobj);

      },
    async resolveMarket(marketobj){
      let thisthing = this
      console.log("resolveMarket: ", JSON.stringify(marketobj));
      // let unixtime = new Date(this.datetime).getTime()/1000;
      // console.log("unixtime ", unixtime);
      // validate
      if(marketobj.question == "" || marketobj.paypervote == "" || marketobj.oracle.trim() == "" || this.fatype == "nothing"){
        // using options
      this.$notify({
        title: 'Empty Fields',
        text: 'Failed to fetch market data, refresh and try again.',
        type: 'error',
        duration: 10000,
      });
      return;
      }
      // thisthing.statustext = "Creating Market...";
      thisthing.isLoadingResolve = true;
        
      // (resolveMarket (marketId int) (result bool))
      // let sideobj = trueCV();
      // let newresult = false;

      let uservote = "false";
      if(thisthing.fatype == "down"){
        // sideobj = falseCV();
        uservote = "false";
        // newnocount++;
      } else {
        // newyescount++;
        uservote = "true";
      }
      var passobj = {args: [marketobj.marketId+"", uservote], paypervote: marketobj.paypervote, marketobj: marketobj};
      EventBus.$emit('resolvemarket', passobj);

      },
    async exitMarket(marketobj){
      let thisthing = this
      // console.log("exitMarket: ", JSON.stringify(marketobj), "useraddress ", this.userData.profile..testnet);
      // let unixtime = new Date(this.datetime).getTime()/1000;
      // console.log("unixtime ", unixtime);
      // validate
      if(marketobj.question == "" || marketobj.paypervote == "" || marketobj.oracle.trim() == "" || this.fatype == "nothing"){
        // using options
      this.$notify({
        title: 'Empty Fields',
        text: 'Failed to fetch market data, refresh and try again.',
        type: 'error',
        duration: 10000,
      });
      return;
      }
      // thisthing.statustext = "Creating Market...";
      thisthing.isLoadingResolve = true;
        
      var passobj = {args: [marketobj.marketId], paypervote: marketobj.paypervote, marketobj: marketobj};
      EventBus.$emit('exitmarket', passobj);

      },
    // fetchData() {
    //   db.ref(this.dbref).on("value", snapshot => {
    //     if(snapshot.exists()){
    //       let data = snapshot.val();
    //       let messages = [];
    //       Object.keys(data).forEach(key => {
    //         // console.log("each data[key]: ", data[key]);
    //         var msgtopush = {merchant: key, ...data[key]};
    //         // console.log("msgtopush: ", msgtopush);
    //         messages.push(msgtopush);
    //         // messages.push({
    //         //   merchant: key,
    //         //   lolli: data[key].lolli,
    //         //   fold: data[key].fold,
    //         //   strike: data[key].strike,
    //         //   updatedAt: ''
    //         // });
    //       });
    //       this.rows = messages;          
    //     }

    //   });    
    // },
  },
  created() {
    // let viewMessage = this;
    // const itemsRef = fire.database().ref("cbtable");
    // this.fetchData()
  },
  data(){
    // console.log("data return this.rows: ", this.rows);
    // {account: thisthing.userData.profile.Address.testnet, question: thisthing.form.question, paypervote: thisthing.form.paypervote, oracle: thisthing.form.oracle.trim(), 
    return {
      isLoadingJoin: false,
      isLoadingResolve: false,
      isLoadingExit: false,
      fatype: 'nothing',
      userData: null,
      show: false,
      // aepp: null,
      // dbref: 'aepredict',
      // dbref: 'aepredict_mainnet',
      dbref: 'aeppstore_testnet',
      contractname: 'aeppstore',    
      explorer_testnet: "https://explorer.testnet.aeternity.io/transactions/",
      explorer_mainnet: "https://explorer.aeternity.io/transactions/",
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      columns: [
        // {
        //   label: 'Market Creator',
        //   field: 'account',
        // },
        {
          label: 'Question',
          field: 'question',
          // type: 'number',
          // type: 'percentage',
        },
        {
          label: 'Pay per Vote',
          field: 'paypervote',
          // type: 'number',
          // type: 'percentage',
        },
        {
          label: 'Yes #',
          field: 'yescount',
          type: 'number',
          // type: 'percentage',
        },
        {
          label: 'No #',
          field: 'nocount',
          type: 'number',
          // type: 'percentage',
        },
        {
          label: 'Oracle',
          field: 'oracle',
          // type: 'number',
          // type: 'percentage',
        },
        {
          label: 'Tx Id',
          field: 'txid',
          // type: 'number',
          // type: 'percentage',
        },
        {
          label: 'Resolve Time (PST)',
          field: 'resolveTime',
          // type: 'number',
          // type: 'percentage',
        },
        {
          label: 'Join',
          field: 'join',
          // type: 'number',
          // type: 'percentage',
        },
        {
          label: 'Resolve',
          field: 'resolve',
          // type: 'number',
          // type: 'percentage',
        },
        // {
        //   label: 'Exit',
        //   field: 'exit',
        //   // type: 'number',
        //   // type: 'percentage',
        // },
        // {
        //   label: 'Type',
        //   field: 'resolveType',
        //   // type: 'number',
        //   // type: 'percentage',
        // },
        // {
        //   label: 'Liquigate',
        //   field: 'liquigate',
        //   // type: 'number',
        //   // type: 'percentage',
        // },
        // {
        //   // 📅
        //   label: 'Created At',
        //   field: 'createdAt',
        //   type: 'date',
        //   dateInputFormat: 'T',
        //   dateOutputFormat: 'MMM do yyyy HH:mm:ss',
        // },
        // {
        //   label: 'Percent',
        //   field: 'cashback',
        //   type: 'percentage',
        // },
      ],
      rows: [],
      // mytableitems: []
      // rows: [
      //      { merchant:"Amazon", lolli:0.01, fold: 0.01, createdAt: ''},
      //   // { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
      //   // { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
      //   // { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
      //   // { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
      //   // { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
      //   // { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      // ],
    };
  },
  components: {
    VueGoodTable,
    VueLoadingButton,
    FontAwesomeIcon,
  }
};
</script>





