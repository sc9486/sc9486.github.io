
// backend 정보
// const express=require('express');
// const app=express();
// const path = require('path');
// const PORT=3200;
// AWS 정보
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
// import createPersistedState from 'vuex-persistedstate';

var bucketName = "portfolioserversungkyul";
var bucketRegion = "ap-northeast-2";
var IdentityPoolId = "ap-northeast-2:b491c966-e183-46be-b4ab-ccc670ec5e3d";
var AWS = require("aws-sdk");


Vue.use(Vuex)

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: bucketName }
});

// 스토어 만들기
export default new Vuex.Store({
      state: {
        awsDatalists: [], //AWS의 모든 파일을 가져오기 위한 배열
        userId: '', // 유저 아이디
        userName: '', // 유저 이름
        userEmail: '', // 유저 이메일
        inLogin: false // 로그인 여부
    },
    
    mutations: {
     
       // 전체 파일 이름들 가져오기
      GetAllFiles: function (state) {
       // state.awsDatalists = [] // 배열 초기화
        s3.listObjectsV2(
            {
                Bucket: this.albumBucketName
            },
            (err, data) => {
                if (err) {
                    throw err;
                }
            
                let contents = data.Contents;
                contents.forEach((content) => { 
                  if(state.awsDatalists.indexOf(content.Key)==-1){ // 같은 파일이 없다면
                    state.awsDatalists.push(content.Key); // "ex) content.Key => assets/images/1.png"      
                  }
                });
              //   if (data.IsTruncated) {
              //     params.ContinuationToken = data.NextContinuationToken;
              //     console.log("get further list...");
              //     // listAllKeys();
              // } 
                return state.awsDatalists;
            }
        );
      }
    },
    // 파일 가져오기(stream)
     GetFileStream: function(filekey) { 
    
       // getObject 메소드를 통해 데이터 스트림 형태로 가지고 온다.
        const data =  s3.getObject(
          {
              Bucket: this.bucketName,
              Key: filekey
            }
        ).promise();

        return data.Body;
  },
  
   encode: function(data) { 
          let buf = Buffer.from(data);
          let base64 = buf.toString('base64');
          return base64
    },
   // add this one for setting the timer
   setTimer (state, timer) {
    state.timer = timer
  },

    actions: {
      startTimer ({ commit }) {
        commit('stopTimer') // just a guess but you might need this
        commit('setTimer', setInterval(() => {
          commit('countDown')
        }, 1000))
      }

    },
    modules: {},
    
//  plugins:[

//   createPersistedState(),

//  ],
    
})

   
  
