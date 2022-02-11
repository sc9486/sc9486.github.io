<template>
    <div>
      <!-- <meta charset="utf-8">
      <h1>서버 동기화</h1> -->
      <h1 class="idView" style="top:55px;left:1271px;width:200px;height:50px;float: right;margin-top:-30px;position:fixed;margin-right : 30px;font-size: small;"> 내 아이디 :  {{myID}}</h1>
      <button type="button" @click="GotoMainPage()"  style="border-radius: 10px;top:10px;width:65px;height:45px;left:1440px;position:fixed;background-color:#d44000;">Main</button>   
    <div class="screen" >
        <button type="button" @click="ok_button_click()" style="top:0px;left:200px;background-color:#ffffff;">
          <img src="../assets/slotForm.png" class="albumImg1">
        </button>
                <button type="button" @click="ok_button_click()"  style="background-color:#ffffff">
          <img v-show="slot_show1" src="../assets/slotForm.png" class="albumImg2">
        </button>
                <button type="button" @click="ok_button_click()"  style="background-color:#ffffff">
          <img v-show="slot_show2" src="../assets/slotForm.png" class="albumImg3">
        </button>
                <button type="button" @click="ok_button_click()"  style="background-color:#ffffff">
          <img v-show="slot_show3" src="../assets/slotForm.png" class="albumImg4">
        </button>
                <button type="button" @click="ok_button_click()"  style="background-color:#ffffff">
          <img v-show="slot_show4" src="../assets/slotForm.png" class="albumImg5">
        </button>
                <button type="button" @click="ok_button_click()"  style="background-color:#ffffff">
          <img v-show="slot_show5" src="../assets/slotForm.png" class="albumImg6">
        </button>
        <button type="button" @click="ok_button_click()"  style="background-color:#ffffff">
          <img v-show="slot_show6" src="../assets/slotForm.png" class="albumImg7">
        </button>
         <button type="button" @click="ok_button_click()"  style="background-color:#ffffff">
          <img v-show="slot_show7" src="../assets/slotForm.png" class="albumImg8">
        </button>
            <div class="dotSomething1" style="top:480px;left:565px;position:fixed;">
                <b-button-group>
                  <b-dropdown right text="..." variant="outline-secondary">
                  <b-dropdown-item-button @click="slot_hide_button()">삭제하기</b-dropdown-item-button>
                  <b-dropdown-item-button @click="slot_hide_button()">Private 변경</b-dropdown-item-button>
                  <b-dropdown-item-button>기타</b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button @click="AWS_EditButtonClick('1')" v-b-modal.modal-xl variant="outline-light">수정하기</b-dropdown-item-button>
                  </b-dropdown>
                </b-button-group>
            </div>
            <div v-show="slot_show1" class="dotSomething2" style="top:480px;left:865px;position:fixed;">
                <b-button-group>
                  <b-dropdown right text="..." variant="outline-secondary">
                  <b-dropdown-item-button @click="slot_hide_button()">삭제하기</b-dropdown-item-button>
                  <b-dropdown-item-button @click="slot_hide_button()">Private 변경</b-dropdown-item-button>
                  <b-dropdown-item-button>기타</b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button @click="AWS_EditButtonClick('2')" v-b-modal.modal-xl variant="outline-light">수정하기</b-dropdown-item-button>
                  </b-dropdown>
                </b-button-group>
            </div>
            <div v-show="slot_show2" class="dotSomething3" style="top:480px;left:1165px;position:fixed;">
                <b-button-group>
                  <b-dropdown right text="..." variant="outline-secondary">
                  <b-dropdown-item-button @click="slot_hide_button()">삭제하기</b-dropdown-item-button>
                  <b-dropdown-item-button @click="slot_hide_button()">Private 변경</b-dropdown-item-button>
                  <b-dropdown-item-button>기타</b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button @click="AWS_EditButtonClick('3')" v-b-modal.modal-xl variant="outline-light">수정하기</b-dropdown-item-button>
                  </b-dropdown>
                </b-button-group>
            </div>
            <div v-show="slot_show3" class="dotSomething4" style="top:480px;left:1465px;position:fixed;">
                <b-button-group>
                  <b-dropdown right text="..." variant="outline-secondary">
                  <b-dropdown-item-button @click="slot_hide_button()">삭제하기</b-dropdown-item-button>
                  <b-dropdown-item-button @click="slot_hide_button()">Private 변경</b-dropdown-item-button>
                  <b-dropdown-item-button>기타</b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button @click="AWS_EditButtonClick('4')" v-b-modal.modal-xl variant="outline-light">수정하기</b-dropdown-item-button>
                  </b-dropdown>
                </b-button-group>
            </div>
            <div v-show="slot_show4" class="dotSomething5" style="top:830px;left:565px;position:fixed;">
                <b-button-group>
                  <b-dropdown right text="..." variant="outline-secondary">
                  <b-dropdown-item-button @click="slot_hide_button()">삭제하기</b-dropdown-item-button>
                  <b-dropdown-item-button @click="slot_hide_button()">Private 변경</b-dropdown-item-button>
                  <b-dropdown-item-button>기타</b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button @click="AWS_EditButtonClick('5')" v-b-modal.modal-xl variant="outline-light">수정하기</b-dropdown-item-button>
                  </b-dropdown>
                </b-button-group>
            </div>
            <div v-show="slot_show5" class="dotSomething6" style="top:830px;left:865px;position:fixed;">
                <b-button-group>
                  <b-dropdown right text="..." variant="outline-secondary">
                  <b-dropdown-item-button @click="slot_hide_button()">삭제하기</b-dropdown-item-button>
                  <b-dropdown-item-button @click="slot_hide_button()">Private 변경</b-dropdown-item-button>
                  <b-dropdown-item-button>기타</b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button @click="AWS_EditButtonClick('6')" v-b-modal.modal-xl variant="outline-light">수정하기</b-dropdown-item-button>
                  </b-dropdown>
                </b-button-group>
            </div>
            <div v-show="slot_show6" class="dotSomething7" style="top:830px;left:1165px;position:fixed;">
                <b-button-group>
                  <b-dropdown right text="..." variant="outline-secondary">
                  <b-dropdown-item-button @click="slot_hide_button()">삭제하기</b-dropdown-item-button>
                  <b-dropdown-item-button @click="slot_hide_button()">Private 변경</b-dropdown-item-button>
                  <b-dropdown-item-button>기타</b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button @click="AWS_EditButtonClick('7')" v-b-modal.modal-xl variant="outline-light">수정하기</b-dropdown-item-button>
                  </b-dropdown>
                </b-button-group>
            </div>
            <div v-show="slot_show7" class="dotSomething8" style="top:830px;left:1465px;position:fixed;">
                <b-button-group>
                  <b-dropdown right text="..." variant="outline-secondary">
                  <b-dropdown-item-button @click="slot_hide_button()">삭제하기</b-dropdown-item-button>
                  <b-dropdown-item-button @click="slot_hide_button()">Private 변경</b-dropdown-item-button>
                  <b-dropdown-item-button>기타</b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button @click="AWS_EditButtonClick('7')" v-b-modal.modal-xl variant="outline-light">수정하기</b-dropdown-item-button>
                  </b-dropdown>
                </b-button-group>
            </div>
      </div>
    <div>   
    <modal>  <!-- 글쓰기 모달 -->
        <b-modal id="modal-xl" class="modal" size="xl" @ok="AWS_UploadBtnClick()">  <!-- ok 버튼 누르면 AWS에 파일 업로드 실행-->       
   
        <!-- 모달 좌측 상단의 설정들 -->
      <div id="modal-header" style="height:485px;">
       
        <div id = "tittle" class="tittle" style="width:150px;height:30px;top:14px;left:50px;"> [ 제목 ] :</div>
        <!-- 글 제목 입력창 -->
        <input type="text" id="postTittle" class="tittleContent" placeholder="제목을 입력하세요!" style="width:310px;height:30px;top:30px;left:150px;font-size:10px;">
         <!-- 파일 선택 버튼 -->
        <p> <input class="fileSelectBtn" id="file" ref="file" type = "file" v-on:change="AWS_FileUploadCheck" multiple accept="*.gif,.jpg,.png,audio/*" 
        required capture='user'></p>

        
              <!--  업로드를 위해 선택한 파일 목록들 -->
          <div class="addedFileList" v-for="(file, addedFileIndex) in fileList" :key="addedFileIndex" style="">{{addedFileIndex + 1}}. {{file}}
            <v-btn @click="AWS_DeleteFile(file,0)" color="red" flat icon>x</v-btn>
          </div>
      <div id = "buttons" > <!-- 우측 상단의 버튼들 -->
        <!-- <button id = "button01" class="button_Else" style="width:70px;height:35px;top:30px;left:500px;font-size:15px;" data-toggle="dropdown" aria-expanded="false"> 글꼴 </button> 
        <button id = "button02" class="button_Else" style="width:70px;height:35px;top:30px;left:580px;font-size:15px;"> 크기 </button> 
        <button id = "button03" class="button_Else" style="width:50px;height:35px;top:30px;left:660px;font-size:15px;"> 색 </button>  -->
  
  
 <!-- <b-form-select class="button_Else"  v-model="selected_textStyle" v-on:change="textChange_Style" size="md" style="width:50px;height:35px;top:30px;left:500px;font-size:15px;" >
   <option v-for="(option, idx) in text_Style_options" :key="idx" :value="option.value" :title="option.titlle || null"></options>
       <template #first>
        <b-form-select-option :value="null" disabled></b-form-select-option>
      </template> 
  </b-form-select>  -->

  <div>
    <b-form-select v-model="selected">
      <option
         v-for="(option, idx) in options"
         :key="idx"
         :value="option.value"
         :title="option.title || null"
      >
        {{ option.text }}
      </option>
    </b-form-select>


          <!--글꼴 굵기 선택 버튼-->
  <b-form-select class="button_Else"  v-model="selected_textThickness" :options="text_Thickness_options" 
    v-on:change="textChange_Bold" size="md" value="Surround" style="width:50px;height:35px;top:30px;left:660px;font-size:15px;">
      <template #first>
        <b-form-select-option :value="null" disabled>글꼴 굵기</b-form-select-option>
      </template>
  </b-form-select> 
          
          
          <!-- <b-form-select class="button_Else" style="width:50px;height:35px;top:30px;left:500px;font-size:15px;" 
            v-model="selected" :options="text_Style_options" v-on:change="textChange_Style"> 글꼴 </b-form-select> 
       
        <b-form-select class="button_Else"  text="글꼴 크기" style="width:50px;height:35px;top:30px;left:580px;font-size:15px;" 
            v-model="selected" :options="text_Size_options" v-on:change="textChange_Size" ></b-form-select> 
        <b-form-select class="button_Else" text="글꼴 굵기" style="width:50px;height:35px;top:30px;left:660px;font-size:15px;" 
            v-model="selected" :options="text_Thickness_options" v-on:change="textChange_Bold"></b-form-select>  -->

        <button id = "button04" class="button_Else" style="width:120px;height:35px;top:30px;left:720px;font-size:15px;"> 하이퍼링크 </button>   
       </div>
     </div>
      </div>
    <!-- 본문 내용 -->
      <div id="content" style="top:160px;left:20px;position:absolute;width:1100px;height:360px;float:left;align:left;overflow-y:scroll;">
         <div id="files" class="files" >
          <h1 v-for="(img,i) in fileImages" :key="i">
           <img :src="img.image" class="fileImage">   
          </h1>
          <!-- <h2 v-for="(v,j) in fileVideos" :key="j">
            <video src="v.video" id="fileVideo" class="fileVideo"></video>
          </h2> -->
         <video src="v.video" id="fileVideo" class="fileVideo"></video>
         </div>
        <textarea type="text" class="_editTextArea" cols="80" rows="15" id="editTextArea" placeholder="글을 입력해주세요." 
                  style="position:absolute;top:10px;left:485px;width:610px;height:333px;resize:both">
        </textarea>
      </div>
        </b-modal>
    </modal>
      </div>
   <div>
     
    <b-button v-b-toggle.sidebar-variant class="MenuButton">Menu bar</b-button>
    <b-sidebar id="sidebar-variant" title="목록" bg-variant="dark" text-variant="light" shadow>
     
      <div class="px-3 py-2" @click="LoginCheck_PortfolioList()">
        <h1>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail>
          </b-img>
          <b-text class = "Lee-link">이상민 포트폴리오</b-text>
        </h1>
      </div>
     
       <div class="px-3 py-3" @click="LoginCheck_PortfolioList1()">
        <h1>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail>
          </b-img>
          <b-text class = "Lee-link">정아연 포트폴리오</b-text>
        </h1>
      </div>
   
       <div class="px-3 py-4" @click="LoginCheck_PortfolioList2()">
        <h1>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail>
          </b-img>
          <b-text class = "Lee-link">조하늘 포트폴리오</b-text>
        </h1>
      </div>
    
    </b-sidebar>
  </div>
</div>
</template>

<script>
import Vue from 'vue' 
import {
  getBoundingRect,
  getHandler,
  getPoints,
  getSize,
  heightMap,
  pointMap,
  pointMap2,
  rad2deg,
  tr2bl,
  widthMap,
} from './helper'
import AWS from 'aws-sdk'

var imgs = new Array();
export default {
  name: 'ddr',
  props: {
    value: {
      default: function() {
        return { x: 0, y: 0, width: 100, height: 100, rotation: 0 }
      },
      type: Object,
    },
    handlerSize: {
      type: Number,
      default: 13,
    },
    active: {
      default: true,
      type: Boolean,
    },
    resizeHandler: {
      default: function() {
        return ['tl', 'tm', 'tr', 'r', 'br', 'bm', 'bl', 'l']
      },
      type: Array,
    },
    resizable: {
      default: true,
      type: Boolean,
    },
    rotatable: {
      default: true,
      type: Boolean,
    },
    draggable: {
      default: true,
      type: Boolean,
    },
    acceptRatio: {
      default: false,
      type: Boolean,
    },
    minWidth: {
      type: Number,
      default: 1,
    },
    minHeight: {
      type: Number,
      default: 1,
    },
    parent: {
      type: Boolean,
      default: false,
    },
      textBox_content: String,// 글상자 내용
  },
  data() {
    return {
          transform: Object.assign({}, this.value),
          currentRatio: 1,
          isInitialRatio: false,
          newImgSrc: '', // 새로운 이미지의 경로를 저장할 변수
          textBox_count : 0, // 글상자 개수
          textBox_content: "",// 글상자 내용
          file_count: 0, // 글 불러올 때 서버에 올라가져있는 파일의 개수
        
          selected: null, // 선택된 목록
          text_Style_options: [
            
            { titlle: '글꼴', text:"d"},
            { value: '굴림', text: '굴림'},
            { value: '맑은 고딕', text: '맑은 고딕'},
            { value: '궁서', text: '궁서' },
            { value: '휴먼엽서체', text: '휴먼엽서체'} 
          ],
              text_Size_options: [
            { value: '16px', text: '16'},
            { value: '19px', text: '19'},
            { value: '22px', text: '22'},
            { value: '25px', text: '25'},
            { value: '28px', text: '28'},
            { value: '31px', text: '31'},
            { value: '34px', text: '34'},
            { value: '37px', text: '37'},
            { value: '40px', text: '40'},
            { value: '43px', text: '46'},
            { value: '46px', text: '46'},
            { value: '50px', text: '50'},
          ],
              text_Thickness_options: [
            { value: 'normal', text: '얇게'},
            { value: 'bold', text: '굵게'},
          ],
        postIndex: "0", // 몇번째 게시글인지 체크하는 게시글 인덱스
        file: null,
         albumBucketName : "portfolioserversungkyul",
         bucketRegion : "ap-northeast-2",
         IdentityPoolId : "ap-northeast-2:b491c966-e183-46be-b4ab-ccc670ec5e3d",
         fileList: [], // 모달에 표시할 파일 이름 목록
         fileImages: [// 모달에 추가한 전체 이미지 파일 목록
            {
              name: '',
              image : ''
            },
            {
              name: '',
              image : ''
            },
            {
              name: '',
              image : ''
            },
         ], 
         // 모달에 추가한 전체 이미지 파일 목록
        //  : [
        //     {
        //       name: '',
        //       video : ''
        //     },
        //     {
        //       name: '',
        //       video : ''
        //     },
        //     {
        //       name: '',
        //       video : ''
        //     },
        // ],
         fileName: "",
         preview: '', // 파일 미리보기 
        slot_cnt: 0, // 글의 개수
        slot_show1: false, // 글들
        slot_show2: false,
        slot_show3: false,
        slot_show4: false,
        slot_show5: false,
        slot_show6: false,
        slot_show7: false,
        myID: "",
        postCount:0,// 서버에서 받아온 글의 개수
    }
  },
  watch: {
    value(t) {
      this.transform = t
    },
  },
  computed: {
    rotateHandler() {
      let size = Math.ceil(this.handlerSize) + 'px'
      return {
        width: size,
        height: size,
        top: -25 + 'px',
        'margin-left': -Math.floor(this.handlerSize / 2) + 'px',
      }
    },
    style() {
      let transform = this.transform
      return {
        left: transform.x + 'px',
        top: transform.y + 'px',
        width: transform.width + 'px',
        height: transform.height + 'px',
        transform: `rotate(${transform.rotation}deg)`,
      }
    },
  },
  created() // 처음 페이지 로드시 실행
  {
    var login = localStorage.getItem('isLogin'); // 로그인 여부 조회
    if(login == "true") // 로그인 되어 있다면
    { 
      //
      this.myID =  localStorage.getItem('userId')
    }
    else // 로그인 되어 있지 않다면
    {
     this.myID = "로그인해주세요"
    }
     this.AWS_PostCountCheck(); // 서버에 저장된 글 목록 가져오기
  },
  methods: { 
       // 모달 OK 버튼 클릭 이벤트 -> AWS에 글의 제목과 내용 업로드
       AWS_UploadBtnClick() 
       {    
          // 선택한 파일들을 AWS에 업로드
          this.AWS_FileUpload(); // 
          this.AWS_TextareaUpload();   // 텍스트상자의 내용을 AWS에 업로드
       },
       // 파일 선택 버튼 클릭 이벤트
       AWS_FileUploadCheck: function (event) { 
          //  this.file = this.$refs.file.files[0] // 업로드 하려고 선택한 파일을 받아온다.
             this.file = event.target.files[0]
            
             if(this.fileList.length ==1) {
               return alert("업로드 가능한 최대 파일 개수는 1개입니다.")
             }
             if(!this.file){return;}
             if(this.file.type.match(/^image\/(png|jpeg)$/)) { 
              // 이미지 동적 생성
              //  메소드는 주어진 객체를 가리키는 URL을 DOMString으로 변환하는 기능을 함 URL.createObjectURL()  
              this.preview = window.URL.createObjectURL(this.file)  
              this.fileImages.push({name:this.file.name,image:this.preview})
              
               var image = new Image();
               image = this.file
               imgs.push(image)
              }
              else if(this.file.type.match(/^video\/(mp4|m4v|avi|wmv|mwa|asf)$/))
              {
                 // 동영상 동적 생성
                this.preview = window.URL.createObjectURL(this.file)
               
                  //  video.setAttribute("src", this.preview); 
                // this.fileVideos.push({name:this.file.name,image:this.preview})
                // const video = document.getElementById("fileVideo");
                // video.play();
          
                  let _video = document.querySelector('#fileVideo');
                  _video.removeAttribute('src'); // src 프로퍼티를 제거
                  _video.src = this.preview; // 다른 미디어로 소스 변경
                  _video.load(); // 새로운 정보를 다시 로드

                  _video.play(); // 잘 동작함    
           }
            this.fileList.push(this.file.name)
      },
       // AWS 파일들을 가져와서 모달의 파일 목록에 출력함. 데이터를 갱신해줄때도 사용
        AWS_GetFiles() {
          // AWS 권한 인증 
            AWS.config.update({
            region: this.bucketRegion,
            credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this.IdentityPoolId
          })
        });
          var s3 = new AWS.S3({
          apiVersion: "2006-03-01",
          params: { Bucket: this.albumBucketName }
        });
        this.fileList = [];
        // AWS 파일 가져오기 (AWS 파일들을 모달의 파일 목록에 출력하기 위한 메서드)
          s3.listObjects({ 
            Delimiter: "/" 
          }, (err, data) => {
              if (err) { // 데이터를 정상적으로 가져오지 않았다면
                return alert("파일을 가져오는 것에 실패했습니다." + err.message);
              } else // 데이터를 정상적으로 가져왔다면,
              {  
                  //fileList = data.Contents;
                 for(var name in data.Contents)
                 {
                    // 이때, 텍스트 파일은 제외하고 파일 목록에 보여지기 위해 
                    // 가져온 파일이 텍스트 파일인지 확인한다.
                    var searchText = ".txt"
                    var idx = data.Contents[name].Key.indexOf(searchText)
             
                   if(idx == -1) // 텍스트 파일이 아니라면
                    {
                      // 파일의 게시글 번호를 확인하여 게시글에 알맞은 파일명을 불러오도록 하기 위하여,
                      // 파일명에 $가 있는지 확인한다 -> 아이디$게시글번호_파일명.확장자 => 이런식으로 서버에 올라가져있음
                      var searchText = "$"
                      var s = data.Contents[name].Key.indexOf(searchText)
                      var checkOne = 0;
                      var checkTwo = 0;
                     
                      if(s != -1) // $가 존재한다면
                      {
                           checkOne = s;
                      }
                     // $ 뒤의 게시글 번호를 확인하기 위하여, $의 위치를 기억한다.
                   
                      //  _ 의 인덱스를 찾는다 
                      var w = data.Contents[name].Key.indexOf("_"); 
                      if(w != -1)
                      {
                         checkTwo = w; // _의 위치를 기억한다.
                      }
                      var gab = checkTwo-checkOne-1
                   
                      // $과 _사이에 위치한 파일의 게시글 번호를 기억한다.
                      const fileIndex = data.Contents[name].Key.substr(checkOne+1, gab)

                     // 모달의 게시글 번호와 파일의 게시글 번호가 일치한다면,
                      if(this.postIndex == fileIndex) 
                      {
                      // _ 의 인덱스를 찾는다 
                      // var w = data.Contents[name].Key.indexOf("_"); 
                      // if(w != -1)
                      // {
                      //    checkTwo = w; // _의 위치를 기억한다.
                      // }
                        // 파일 제목을 추출한다.
                       const fileName = data.Contents[name].Key.substr(checkTwo+1)
                    
                       // 파일 제목을 저장하는 배열에 넣어준다.
                       this.fileList.push(fileName)
                      }                      
                  //    console.log("텍스트 파일 아님 " +data.Contents[name].Key)
                    }
                 }
              } 
          });           
      },
      // 파일 업로드 버튼 클릭 이벤트
      AWS_FileUpload()
      {
        if(this.fileList.length == 0) { return; } // 모달에 올려진 파일이 없다면, 종료
          // AWS 권한 인증 
              AWS.config.update({
              region: this.bucketRegion,
              credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: this.IdentityPoolId
              })
            });
        
         var name = localStorage.getItem('userName'); // 사용자 아이디 받아옴
         // 이미지 업로드
        //  if(imgs.length>0)
        //  {
        //    for(var i=0; i< this.fileList.length;i++)
        //       {
        //         var photoKey = id +"$"+this.postIndex+"_"+this.fileList[i]
        //         var body = imgs[i]
              
        //         // @@@ 같은 이름 있으면 갱신하는 걸로 변경해주어야함
        //         // Use S3 ManagedUpload class as it supports multipart uploads
        //         var upload = new AWS.S3.ManagedUpload({
        //           params: {
        //             Bucket: this.albumBucketName,
        //             Key: photoKey,
        //             Body: body
        //           }
        //         }); 
        //       }
        //  }
          var photoKey = name +"$"+this.postIndex+"_"+this.fileList[0]
    
          // 같은 이름 있으면 갱신하는 걸로 변경해주어야함
          if(this.AWS_SameFileCheck(photoKey)) // 만약 같은 이름을 한 파일이 있다면, 삭제하고 올려주어야함.
          {
            this.AWS_DeleteFile(this.fileList[0],0)
          }
          // Use S3 ManagedUpload class as it supports multipart uploads
          var upload = new AWS.S3.ManagedUpload({
            params: {
              Bucket: this.albumBucketName,
              Key: photoKey,
              Body: this.file
            }
          }); 
         var promise = upload.promise();
          promise.then(
            function(data) {
              //alert("파일 전송에 성공했습니다.");
            },
            function(err) {
            //  return alert("파일 전송에 살패했습니다.", err.message);
            }
         );
      },
        // 텍스트상자의 내용을 aws에 업로드
      AWS_TextareaUpload()
      {
        // AWS 권한 인증 
          AWS.config.update({
          region: this.bucketRegion,
          credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this.IdentityPoolId
          })
        });
          var s3 = new AWS.S3({
          apiVersion: "2006-03-01",
          params: { Bucket: this.albumBucketName }
        });

      var name = localStorage.getItem('userName'); // 사용자 아이디 받아옴
      var tittle_content = name +"$"+this.postIndex + ".txt"; // 글 제목
  
       var textarea_content = document.getElementById('postTittle').value+"$"+document.getElementById('editTextArea').value; // 글 내용
           
         // 같은 이름 있으면 갱신하는 걸로 변경해주어야함
          if(this.AWS_SameFileCheck(tittle_content)) // 만약 같은 이름을 한 파일이 있다면, 삭제하고 올려주어야함.
          {
            this.AWS_DeleteFile(tittle_content,1)
          }
          // Use S3 ManagedUpload class as it supports multipart uploads
        var upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: this.albumBucketName,
            Key: tittle_content, // AWS에 올라갈 파일의 이름 설정
            Body: textarea_content
        }});
          // AWS에 파일 업로드
        var promise = upload.promise();
 
        promise.then(
          s3.listObjects({ 
            Delimiter: "/" 
          }, (err, data) => {
          if (err) {
            // 데이터를 정상적으로 가져오지 않았다면
            return alert("텍스트 파일 업로드에 실패했습니다.", err.message);
          }
          else{ // 데이터를 정상적으로 가져왔다면,
            // AWS 파일을 가져와서 출력한다음 데이터 갱신
            // this.AWS_GetFiles(); // AWS 파일을 가져와서 출력한다음 데이터 갱신
          }
        })
      );       
      },
      AWS_EditButtonClick(postIndex) // 글 수정하기 버튼 클릭(글쓰기 모달에서 사용) -> 서버에 저장된 글 내용을 불러오는 메서드
      {
         // AWS 권한 인증 
            AWS.config.update({
            region: this.bucketRegion,
            credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this.IdentityPoolId
            })
          });

        this.$store.commit('GetAllFiles') // 서버 파일들의 목록을 가져옴

        this.postIndex = postIndex

// @@@@@@@@@@ 리스트 갱신해주어야 함
        this.fileImages = []
       for(var i = 0; i < this.$store.state.awsDatalists.length; i++)
       { 
          // 먼저 . 의 인덱스를 찾는다 
          var idx = this.$store.state.awsDatalists[i].indexOf("."); 
      
          // 파일 확장자 추출
          var extension = this.$store.state.awsDatalists[i].substr(idx+1,this.$store.state.awsDatalists[i].length);
       
          // $ 의 인덱스를 찾는다 
          var idx = this.$store.state.awsDatalists[i].indexOf("$"); 

          if(idx != -1)
          {
          // 이름 추출
          var userName = this.$store.state.awsDatalists[i].substr(0,idx);
          // 게시글의 index 번호 추출
          var fileIndex = this.$store.state.awsDatalists[i].substr(idx+1,1);
          }
          else{fileIndex=0}

          // _ 의 인덱스를 찾는다 
          var idx = this.$store.state.awsDatalists[i].indexOf("_"); 
          if(idx != -1){
           // 파일명 추출
          var fileName = this.$store.state.awsDatalists[i].substr(idx+1, this.$store.state.awsDatalists[i].length)
          } 
          console.log(userName)
          console.log(localStorage.getItem('userName'))
         // 서버의 파일들 중 로그인한 id가 작성한 파일들을 찾는다, 찾은 파일들 중 글의 index 번호가 올바른지 확인한다.
        //  if(userName != localStorage.getItem('userName')){ 
        //    this.myID=""
        //   return alert ("아이디를 확인할 수 없습니다. 메인페이지로 돌아가 로그인해주세요")
        //   }
         if((fileIndex == this.postIndex)&& (fileIndex!=0))
         {
         // var id = localStorage.getItem('userId'); // 사용자 아이디 받아옴
         // var tittle_content = id+"$"+ this.postIndex(게시글번호,1~8)+글에서입력된순서(0~2) + ".txt"; // 글 제목

        if(extension == "txt")// 데이터가 텍스트라면
            {        
              let params = {Bucket: "portfolioserversungkyul", Key: this.$store.state.awsDatalists[i]} // AWS에서 찾을 파일의 이름 설정
              let s3 = new AWS.S3({ params: { Bucket: "portfolioserversungkyul" }});
   
              s3.getObject(params, (err, data) => {
                    var text = data.Body.toString()          
        
                    // 먼저 $ 의 인덱스를 찾는다 
                    var idx = text.indexOf("$"); 
                    // 글 내용 추출
                    const postContent = text.substring(idx+1, text.length)
                    // 글 제목 추출
                    const posttitlle = text.substring(0, idx)

                    // 글 제목 출력
                    const tittle = document.getElementById('postTittle')
                    tittle.value = posttitlle
                
                    // 글 내용 출력
                    const editTextArea = document.getElementById('editTextArea') 
                    editTextArea.value = postContent    
              })
            }
            else if((extension == "jpg")||(extension == "jpeg")||(extension=="png"))
            {
              let params = {Bucket: "portfolioserversungkyul", Key: this.$store.state.awsDatalists[i]} // AWS에서 찾을 파일의 이름 설정
              let s3 = new AWS.S3({ params: { Bucket: "portfolioserversungkyul" }});

              s3.getObject(params, (err, data) => {
            // blobURL
              // Blob은 javascript에서 이미지, 사운드, 비디오 같은 멀티 데이터를 다룰 때 사용
              const blob = new Blob([data.Body], {
                  type: data.ContentType
                }
              );
              // 이미지 동적 생성
              const blobURL = URL.createObjectURL(blob);   
              this.fileImages.push({name:fileName,image:blobURL})     
              })
           }
            else if((extension == "m4v")||(extension == "mp4")||(extension=="avi ")
            ||(extension == "wmv")||(extension=="mwa")||(extension == "asf"))
            {           
              let params = {Bucket: "portfolioserversungkyul", Key: this.$store.state.awsDatalists[i]} // AWS에서 찾을 파일의 이름 설정
              let s3 = new AWS.S3({ params: { Bucket: "portfolioserversungkyul" }});
        
              s3.getObject(params, (err, data) => {
                if(err)
                {
                  alert("서버에서 데이터를 가져오지 못했습니다.")
                }
                else
                {
                  // Blob은 javascript에서 이미지, 사운드, 비디오 같은 멀티 데이터를 다룰 때 사용
                    const blob = new Blob([data.Body], {
                        type: data.ContentType
                      }
                    );
                    // 동영상 동적 생성
                  // URL.createObjectURL() 메소드는 주어진 객체를 가리키는 URL을 DOMString으로 변환하는 기능을 함
                  const blobURL = URL.createObjectURL(blob);   
                  // this.fileVideos.push({name:fileName,image:blobURL})
                  // this.fileIndex=i
                  let _video = document.querySelector('#fileVideo');
                  _video.removeAttribute('src'); // src 프로퍼티를 제거
                  _video.src = blobURL; // 다른 미디어로 소스 변경
                  _video.load(); // 새로운 정보를 다시 로드
                  _video.play(); // 잘 동작함  
                }
              })
            }
         }
      }
        this.AWS_GetFiles() // 모달창 파일 목록 갱신
      },
      AWS_GetPost() // AWS에 업로드 된 글 내용 불러오기 (글보기 모달에서 사용)
      {
        // AWS 권한 인증 
            AWS.config.update({
            region: this.bucketRegion,
            credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this.IdentityPoolId
            })
          });

        let s3 = new AWS.S3({ params: { Bucket: this.albumBucketName }});
        this.$store.commit('GetAllFiles')
      
       for(var i = 0; i < this.$store.state.awsDatalists.length; i++)
       {
            let params = {Bucket: this.albumBucketName, Key: this.$store.state.awsDatalists[i]} // AWS에 가져올 파일의 이름 설정
             // 먼저 . 의 인덱스를 찾는다 
            var idx = this.$store.state.awsDatalists[i].indexOf("."); 
            // 확장자 추출
            var extension = this.$store.state.awsDatalists[i].substring(idx+1,this.$store.state.awsDatalists[i].length);
            
            if(extension == "txt")// 데이터가 텍스트라면
              {         
                var tittle_content = this.postIndex+".txt"; // 글 제목
                let s3 = new AWS.S3({ params: { Bucket: "portfolioserversungkyul" }});
                let params = {Bucket: "portfolioserversungkyul", Key: tittle_content} // AWS에 올라갈 파일의 이름 설정
                  s3.getObject(params, (err, data) => {
                        var text =data.Body.toString()          
            
                        // 먼저 $ 의 인덱스를 찾는다 
                        var idx = text.indexOf("$"); 
                        // 글 내용 추출
                        const postContent = text.substring(idx+1, text.length)
                        // 글 제목 추출
                        const posttitlle = text.substring(0, idx)
  
                        // 글 제목 출력
                        const tittle = document.getElementById('postTittle')
                        tittle.value = posttitlle
                        const addedForm = document.getElementById('content') // getElementById : document 객체를 대상으로 해당 id 를 가진 요소 노드를 찾아 줍니다.
                        const div = document.createElement('modal_post') // createElement : HTML 엘리먼트를 생성
                        div.id = "modal_post"
                        // 글 내용 출력
                        // 글 보기 모달 텍스트 박스 
                          div.innerHTML = "<c><input id="+'"postTextArea"'+" class="+'"postTextArea"'
                          +" style="+'"position:absolute;top:10px;left:470px;width:620px;height:337px;text-align:left;vertical-align:top;text-overflow: ellipsis;overflow-y:scroll;font-size:15px;"'
                          +" type="+'"text"'+"value="+postContent+" ></c>";   
                         addedForm.appendChild(div) // appendChild : 부모 노드에 자식 노드를 추가 -> parent.append(child);
                  })
              }
               else if(extension == "jpg"||"png")
                     {
                       s3.getObject(params, (err, data) => {
                      // blobURL
                        // Blob은 javascript에서 이미지, 사운드, 비디오 같은 멀티 데이터를 다룰 때 사용
                        const blob = new Blob([data.Body], {
                            type: data.ContentType
                         }
                        );
                        // 이미지 동적 생성
                        // URL.createObjectURL() 메소드는 주어진 객체를 가리키는 URL을 DOMString으로 변환하는 기능을 함
                        const blobURL = URL.createObjectURL(blob);     
                        const addedForm = document.getElementById('content') // getElementById : document 객체를 대상으로 해당 id 를 가진 요소 노드를 찾아 줍니다.
                        const div = document.createElement('modal_post') // createElement : HTML 엘리먼트를 생성
                        div.id = this.$store.state.awsDatalists[i]
                        div.innerHTML = "<c><img src="+blobURL+"></c>";
                        addedForm.appendChild(div) // appendChild : 부모 노드에 자식 노드를 추가 -> parent.append(child);
                     })
                     }
           
      }
      },
      // 파일 삭제 버튼 클릭 이벤트
      AWS_DeleteFile(fileName,fileType)
      {
        // AWS 권한 인증 
        AWS.config.update({
          region: this.bucketRegion,
          credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this.IdentityPoolId
          })
        });
          var s3 = new AWS.S3({
          apiVersion: "2006-03-01",
          params: { Bucket: this.albumBucketName }
        });

        var userName = localStorage.getItem('userName'); // 사용자 아이디 받아옴
        var serverFileName ="1"; // 서버 파일 이름

        if(fileType == 0) // 파일이 이미지나 동영상이라면,
        {
           serverFileName = userName +"$"+this.postIndex+"_"+fileName;
        } 
        else if(fileType == 1) // 파일이 텍스트 파일이라면,
        {
          serverFileName = userName +"$"+this.postIndex;
        }

          // AWS 파일 삭제
          s3.deleteObject({
          Bucket: this.albumBucketName, // 사용자 버켓 이름
          Key: serverFileName // 버켓 내 경로
        }, (err, data) => {
          if (err) { throw err; }
          else{
            var i = this.fileList.indexOf(fileName)     
 
            this.fileList.splice(i,1); // fileName을 찾아서 삭제한다.
            if(this.fileImages.length > 0) {this.fileImages.splice(i,1)}
            else
            {
              let _video = document.querySelector('#fileVideo');
              _video.removeAttribute('src'); // src 프로퍼티를 제거
              _video.src = ''; // 다른 미디어로 소스 변경
              _video.load(); // 새로운 정보를 다시 로드
             }   
            this.$store.state.awsDatalists.splice(this.$store.state.awsDatalists.indexOf(serverFileName),1)
        }
      });
      },
      // 서버에 같은 파일이 있는지 체크
      AWS_SameFileCheck(fileKey)
      {
        console.log("서버체크 :" +fileKey)
        for(var i=0; i< this.$store.state.awsDatalists.length; i++)
        {
          if(this.$store.state.awsDatalists[i] == fileKey)
          {
            return true;
          }
        }
      },
      slot_show_button(){
                	if(this.slot_cnt >= 1) this.slot_show1 = true;
                	if(this.slot_cnt >= 2) this.slot_show2 = true;
               	 if(this.slot_cnt >= 3) this.slot_show3 = true;
                	if(this.slot_cnt >= 4) this.slot_show4 = true;
               	 if(this.slot_cnt >= 5) this.slot_show5 = true;
               	 if(this.slot_cnt >= 6) this.slot_show6 = true;
            		 if(this.slot_cnt >= 7) this.slot_show7 = true;
      },
    ok_button_click() {
      this.slot_cnt = this.slot_cnt + 1;
      this.okButton = ''
      this.slot_show_button()

      this.$bvModal.msgBoxOk('게시글이 등록 되었습니다.')
      this.$bvModal.hide("modal-xl")
          .then(value => {
              this.okButton = value
          })
          .catch(err => {

          })
  
    },
    LoginCheck_PortfolioList()
      {
        var login = localStorage.getItem('isLogin'); // 로그인 여부 조회

        if(login) // 로그인 되어 있다면
        { 
           var name = localStorage.getItem('userName'); // 이름 조회
          if(name == '이상민')
          {
            var link = 'http://localhost:8080/#/PortfolioList';
            location.href = link;
          }
          else
          {
            var link = 'http://localhost:8080/#/PortfolioList3';
            location.href=link;
          }
        }
        else // 로그인 되어 있지 않다면
        {        
          var link = 'http://localhost:8080/#/PortfolioList3';
          location.href=link;
        }
      },
       LoginCheck_PortfolioList1()
      {
        var login = localStorage.getItem('isLogin'); // 로그인 여부 조회
    
        if(login) // 로그인 되어 있다면
        { 
          var name = localStorage.getItem('userName'); // 이름 조회
          if(name == '정아연')
          {
          var link = 'http://localhost:8080/#/PortfolioList1';
           location.href = link;
          }
         else // 로그인 되어 있지 않다면
          {
            var link = 'http://localhost:8080/#/PortfolioList4';
            location.href=link;
          }
        }
        else // 로그인 되어 있지 않다면
        {
          var link = 'http://localhost:8080/#/PortfolioList4';
          location.href=link;
        }
      },
       LoginCheck_PortfolioList2()
      {
        var login = localStorage.getItem('isLogin'); // 로그인 여부 조회
    
        if(login) // 로그인 되어 있다면
        { 
           var name = localStorage.getItem('userName'); // 이름 조회

          if(name == '조하늘')
          {
            var link = 'http://localhost:8080/#/PortfolioList2';
            location.href = link;
          }
          else // 로그인 되어 있지 않다면
          {
            var link = 'http://localhost:8080/#/PortfolioList5';
            location.href=link;
          }
        }
        else // 로그인 되어 있지 않다면
        {
          var link = 'http://localhost:8080/#/PortfolioList5';
          location.href=link;
        }
      },
      GotoMainPage()
      {
        var link = 'http://localhost:8080';
        location.href=link;
      },
       AWS_PostCountCheck()
      {
        this.$store.commit('GetAllFiles') // 서버 파일들의 목록을 가져옴
       
        for(var i=0; i<this.$store.state.awsDatalists.length; i++)
        {
            var fileName = this.$store.state.awsDatalists[i]        
            var userName = localStorage.getItem('userName'); // 이름 조회
            for(var j=1; j<=8; j++)
            {
              var a = userName+"$"+j+".txt"
              if(a == fileName)
                {
                  this.postCount++;          
                }
            }
        }
        switch(this.postCount)
        {
          case 2:  this.slot_show1 = true;
            break;
          case 3:   this.slot_show1 = true;
                    this.slot_show2 = true;
            break;
          case 4:  this.slot_show1 = true;
                   this.slot_show2 = true;
                   this.slot_show3 = true;
            break;
          case 5:  this.slot_show1 = true;
                   this.slot_show2 = true;
                   this.slot_show3 = true;
                   this.slot_show4 = true;
             break;
          case 6:  this.slot_show1 = true;
                   this.slot_show2 = true;
                   this.slot_show3 = true;
                   this.slot_show4 = true;
                   this.slot_show5 = true;
            break;
            case 7: this.slot_show1 = true;
                    this.slot_show2 = true;
                    this.slot_show3 = true;
                    this.slot_show4 = true;
                    this.slot_show5 = true;
                    this.slot_show6 = true;
            break;
            case 8: this.slot_show1 = true;
                    this.slot_show2 = true;
                    this.slot_show3 = true;
                    this.slot_show4 = true;
                    this.slot_show5 = true;
                    this.slot_show6 = true;
                    this.slot_show7 = true;
            break;
            default:
              break;
        }
      },

    getNewHandler(type) {
      let cursor = getHandler(type, this.transform.rotation)
      let { handlerSize } = this
      let props = {}
      let half = -Math.floor(handlerSize / 2) + 'px'
      switch (type) {
        case 'tl':
          props = {
            top: half,
            left: half,
          }
          break
        case 'tm':
          props = { top: half, 'margin-left': half }
          break
        case 'tr':
          props = { right: half, top: half }
          break
        case 'r':
          props = { right: half, 'margin-top': half }
          break
        case 'br':
          props = { bottom: half, right: half }
          break
        case 'bm':
          props = { 'margin-left': half, bottom: half }
          break
        case 'bl':
          props = { left: half, bottom: half }
          break
        case 'l':
          props = { 'margin-top': half, left: half }
          break
      }
      return {
        cursor: cursor + '-resize',
        width: Math.ceil(handlerSize) + 'px',
        height: Math.ceil(handlerSize) + 'px',
        ...props,
      }
    },

    handleMouseDown(event) {
      if (!this.active) return
      let point = event.touches ? event.touches[0] : event
      let { clientX, clientY } = point
      this._lastX = clientX
      this._lastY = clientY
      this._activeTarget = event.target
      this._parentRect = this.$refs.wrapper.parentNode.getBoundingClientRect() //  DomRect 구하기 (각종 좌표값이 들어있는 객체)
      this.localeTransform = this.transform
      // Get the movable boundary of the element in the parent element
      if (this.parent) {
        let mouseDownRect = getBoundingRect(this.transform)
        let minLeft = this.transform.x - mouseDownRect.left
        let maxLeft = this._parentRect.width - this.transform.width - minLeft
        let minTop = this.transform.y - mouseDownRect.top
        let maxTop = this._parentRect.height - this.transform.height - minTop
        this.minBoundary = { minLeft, maxLeft, minTop, maxTop }
      }
      document.addEventListener('mousemove', this.handleMouseMove, false) // DOM객체. addEventListener(이벤트명, 실행할 함수명, 옵션)
      document.addEventListener('touchmove', this.handleMouseMove, false)
      document.addEventListener('touchend', this.handleMouseUp, false)
      document.addEventListener('mouseup', this.handleMouseUp, false)

      if (event.target.dataset.type === 'rotate') {
        this._handlerType = 'rotate'
        this.handleRotateStart(event)
        this.$emit('rotate-start', event, this.transform)
      } else if (this._activeTarget.dataset.resizetype) {
        this._handlerType = 'resize'
        this.handleResizeStart(event)
        this.$emit('resize-start', event, this.transform)
      }
    
      else {
        this._handlerType = 'drag'
        this.draggable && this.$emit('drag-start', event, this.transform)
      }
    },
        handleMouseDownA(event) {
      if (!this.active) return
      let point = event.touches ? event.touches[0] : event
      let { clientX, clientY } = point
      this._lastX = clientX
      this._lastY = clientY
      this._activeTarget = event.target
      this._parentRect = this.$refs.wrapper.parentNode.getBoundingClientRect() //  DomRect 구하기 (각종 좌표값이 들어있는 객체)
      this.localeTransform = this.transform
      // Get the movable boundary of the element in the parent element
      if (this.parent) {
        let mouseDownRect = getBoundingRect(this.transform)
        let minLeft = this.transform.x - mouseDownRect.left
        let maxLeft = this._parentRect.width - this.transform.width - minLeft
        let minTop = this.transform.y - mouseDownRect.top
        let maxTop = this._parentRect.height - this.transform.height - minTop
        this.minBoundary = { minLeft, maxLeft, minTop, maxTop }
      }
      document.addEventListener('mousemove', this.handleMouseMoveA, false) // DOM객체. addEventListener(이벤트명, 실행할 함수명, 옵션)
      document.addEventListener('touchmove', this.handleMouseMoveA, false)
      document.addEventListener('touchend', this.handleMouseUpA, false)
      document.addEventListener('mouseup', this.handleMouseUpA, false)
       console.log(event.target.dataset.type);
      if (event.target.dataset.type === 'rotate') {
        this._handlerType = 'rotate'
        this.handleRotateStart(event)
        this.$emit('rotate-start', event, this.transform)
      } else if (this._activeTarget.dataset.resizetype) {
        this._handlerType = 'resize'
        this.handleResizeStart(event)
        this.$emit('resize-start', event, this.transform)
      }
    
      else {
        this._handlerType = 'drag'
        this.draggable && this.$emit('drag-start', event, this.transform)
      }
    },
    handleMouseMove(event) {
        
      if (this._handlerType === 'resize') {
        this.handleResizeMove(event)
        this.$emit('resize', event, this.transform) // emit : 자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달할 때 사용됩니다. resize라는 키를 등록
      } else if (this._handlerType === 'drag' && this.draggable) {
        this.doMove(event)
        this.$emit('drag', event, this.transform)
      } else if (this._handlerType === 'rotate') {
        this.handleRotateMove(event)
        this.$emit('rotate', event, this.transform)
           
      }
     
      console.log("handleMouseMove : "+this._handlerType)
    },
     handleMouseMoveA(event) {
        
      if (this._handlerType === 'resize') {
        this.handleResizeMove(event)
        this.$emit('resize', event, this.transform) // emit : 자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달할 때 사용됩니다. resize라는 키를 등록
      } else if (this._handlerType === 'drag' && this.draggable) {
        this.doMove(event)
        this.$emit('drag', event, this.transform)
      } else if (this._handlerType === 'rotate') {
        this.handleRotateMove(event)
        this.$emit('rotate', event, this.transform)
           
      }
     
      console.log("handleMouseMove_A : "+this._handlerType)
    },
    doMove(event) {
      let { clientX, clientY } = event.touches ? event.touches[0] : event
      let deltaX = clientX - this._lastX
      let deltaY = clientY - this._lastY
      this._lastX = clientX
      this._lastY = clientY
      if (this.parent) {
        this.localeTransform.x += deltaX
        this.localeTransform.y += deltaY
        this.restrictToParentBoundary()
      } else {
        this.transform.x = Math.round(this.transform.x + deltaX)
        this.transform.y = Math.round(this.transform.y + deltaY)
      }
    },
    restrictToParentBoundary() {
      let x = Math.max(this.minBoundary.minLeft, this.localeTransform.x)
      let y = Math.max(this.minBoundary.minTop, this.localeTransform.y)
      x = Math.min(this.minBoundary.maxLeft, x)
      y = Math.min(this.minBoundary.maxTop, y)
      this.transform.x = Math.round(x)
      this.transform.y = Math.round(y)
    },
    handleMouseUp(event) {
      document.removeEventListener('mousemove', this.handleMouseMove, false)
      document.removeEventListener('mouseup', this.handleMouseUp, false)
      document.removeEventListener('touchmove', this.handleMouseMove, false)
      document.removeEventListener('touchend', this.handleMouseUp, false)
      let ev = {
        drag: 'draggable',
        resize: 'resizable',
        rotate: 'rotatable',
      }
      this.isInitialRatio = false
      this[ev[this._handlerType]] && this.$emit(this._handlerType + '-end', event, this.transform)
    },
    handleMouseUpA(event) {
      document.removeEventListener('mousemove', this.handleMouseMoveA, false)
      document.removeEventListener('mouseup', this.handleMouseUpA, false)
      document.removeEventListener('touchmove', this.handleMouseMoveA, false)
      document.removeEventListener('touchend', this.handleMouseUpA, false)
      let ev = {
        drag: 'draggable',
        resize: 'resizable',
        rotate: 'rotatable',
      }
      this.isInitialRatio = false
      this[ev[this._handlerType]] && this.$emit(this._handlerType + '-end', event, this.transform)
    },
    handleResizeStart(event) {
      let type = event.target.dataset.resizetype
      let rect = this.transform
      let matrix = getPoints(rect)
      let pressAngle
      let opposite = matrix[pointMap[type]]
      let opp2 = matrix[pointMap2[type]]
      let { clientX, clientY } = event.touches ? event.touches[0] : event
      let x1 = clientX - this._parentRect.left - opp2.x
      let y1 = clientY - this._parentRect.top - opp2.y
  
      let _width = rect.width,
        _height = rect.height
      if (tr2bl[type]) {
        if (widthMap[type]) _height /= 2
        pressAngle = rad2deg(Math.atan2(_width, _height))
      } else {
        if (heightMap[type]) _width /= 2
        pressAngle = rad2deg(Math.atan2(_height, _width))
      }
      let startAngle = rad2deg(Math.atan2(y1, x1))
      this._resizeOpt = {
        matrix,
        rect,
        type,
        opposite,
        opp2,
        pressAngle,
        startAngle,
      }
    },
    handleResizeMove(event) {
      let { clientX, clientY } = event.touches ? event.touches[0] : event
      let { opposite, opp2, type, pressAngle, startAngle } = this._resizeOpt
      let x = clientX - this._parentRect.left - opp2.x,
        y = clientY - this._parentRect.top - opp2.y,
        dis = Math.hypot(y, x)
      let ratio = event.shiftKey || this.acceptRatio
      if (!this.isInitialRatio && ratio) {
        this.currentRatio = this.transform.width / this.transform.height
        this.isInitialRatio = true
      }

      if (!ratio) {
        this.isInitialRatio = false
      }

      let { w, h } = getSize({
        type,
        dis,
        x,
        y,
        startAngle,
        pressAngle,
      })
      let transform = Object.assign({}, this.transform)
      if (this.isInitialRatio) {
        if (widthMap[type]) h = w / this.currentRatio
        else w = h * this.currentRatio
      }
      w = Math.max(Math.round(w), this.minWidth)
      h = Math.max(Math.round(h), this.minHeight)
      if (widthMap[type] && !ratio) {
        transform.width = w
      } else if (heightMap[type] && !ratio) {
        transform.height = h
      } else {
        transform.width = w
        transform.height = h
      }

      let matrix = getPoints(transform)
      let _opp = matrix[pointMap[type]]
      let deltaX = -(_opp.x - opposite.x),
        deltaY = -(_opp.y - opposite.y)
      transform.x = Math.round(transform.x + deltaX)
      transform.y = Math.round(transform.y + deltaY)

      this.transform = transform
    },
    handleRotateStart(event) {
      let { clientX, clientY } = event.touches ? event.touches[0] : event
      let t = this.$refs.wrapper.getBoundingClientRect(),
        cx = t.left + t.width / 2,
        cy = t.top + t.height / 2,
        startAngle = (180 / Math.PI) * Math.atan2(clientY - cy, clientX - cx),
        rotation = this.transform.rotation
      this._rotateOpt = { cx, cy, startAngle, rotation }
    },
    handleRotateMove(event) {

      let { cx, cy, startAngle, rotation } = this._rotateOpt
      let { clientX, clientY } = event.touches ? event.touches[0] : event
      let x = clientX - cx,
         
        y = clientY - cy,
        angle = (180 / Math.PI) * Math.atan2(y, x),
        currentAngle = angle - startAngle,
        r = rotation + currentAngle

      r = r % 360
      r = r < 0 ? r + 360 : r
      this.transform.rotation = Math.floor(r)
    },
   textBox_Add() {
					const addedForm = document.getElementById('modal-body') // getElementById : document 객체를 대상으로 해당 id 를 가진 요소 노드를 찾아 줍니다.
					const str = `<textarea type="text" class="textBox" cols="80" rows="15" id="textBoxData" placeholder="글을 입력해주세요." 
            style="position:absolute;width:1100px;height:330px;"></textarea>
                 <div ref="wrapper"
              :style="style"
              :class="{ active: active }"
              @touchstart="handleMouseDown"
              @mousedown="handleMouseDown"
              class="textBox_Controller" style="top:430px;left:50px;">
                <div v-if="resizable">
                  <span
                    :data-resizetype="item"
                    :key="item"
                    :class="item"
                    :style="{ ...getNewHandler(item) }"
                    class="textBox_resize-handler"
                    v-for="item in resizeHandler"
                  ></span>
                </div>
                <span :style="rotateHandler" v-if="rotatable" data-type="rotate" class="textBox_rotate-handler" ></span>
            </div> `

					const div = document.createElement('div') // createElement : HTML 엘리먼트를 생성 
					div.id = 'added' + this.textBox_count
					div.innerHTML = str
        
					addedForm.appendChild(div) // appendChild : 부모 노드에 자식 노드를 추가 -> parent.append(child);
					this.textBox_count++
	},
  //  textBox_Add() {
	// 				const addedForm = document.getElementById('textBox_Buttons') // getElementById : document 객체를 대상으로 해당 id 를 가진 요소 노드를 찾아 줍니다.
	// 				const str = `<textarea type="text" class="textBox" cols="80" rows="15" id="textBoxData" placeholder="글을 입력해주세요." 
  //         name="done${this.textBox_count}" id="done${this.textBox_count}"
  //         style="top:${this.textBox_count*370+180}px;left:300px;font-size:15px;position: absolute; resize: both;"></textarea>
  //                <div
  //             ref="wrapper"
  //             :style="style"
  //             :class="{ active: active }"
  //             @touchstart="handleMouseDown"
  //             @mousedown="handleMouseDown"
  //             class="textBox_Controller" style="top:430px;left:50px;">
          
  //               <div v-if="resizable">
  //                 <span
  //                   :data-resizetype="item"
  //                   :key="item"
  //                   :class="item"
  //                   :style="{ ...getNewHandler(item) }"
  //                   class="textBox_resize-handler"
  //                   v-for="item in resizeHandler"
  //                 ></span>
  //               </div>
  //               <span :style="rotateHandler" v-if="rotatable" data-type="rotate" class="textBox_rotate-handler" ></span>
  //           </div> `

	// 				const div = document.createElement('div') // createElement : HTML 엘리먼트를 생성 
	// 				div.id = 'added' + this.textBox_count
	// 				div.innerHTML = str }
        
	// 				addedForm.appendChild(div) // appendChild : 부모 노드에 자식 노드를 추가 -> parent.append(child);
	// 				this.textBox_count++
	// },
    textBox_Delete() {
      if (this.textBox_count > 1) {
        const addedDiv = document.getElementById('added' + (--this.textBox_count))
        document.getElementById('textBox_Buttons').removeChild(addedDiv)
      }
    },	

   textChange_Style() { // 글자 폰트 변경
             document.getElementById('done${this.textBox_count}').style.fontFamily = this.selected;          
        },
    textChange_Size() { // 글자 크기 변경
    document.getElementById('done${this.textBox_count}').style.fontSize = this.selected;                 
  },
    textChange_Bold() { // 글자 굵기 변경
    document.getElementById('done${this.textBox_count}').style.fontWeight = this.selected;                
  },
   },
  
}
</script>

<style scoped>
.screen{
  height: auto;
  width: auto;
  margin: 50px 50px 50px 50px;
  background-color: rgba(255, 255, 255, 0);
}

.test{
    width: 290px;
    height: 400px;
    top: 150px;
    left: 320px;
    position:absolute;
}
.postButton{/* 모달 보기 버튼*/
  width: 290px;
  height: 400px;
}
.editButton{ /* 모달 수정하기 버튼*/
  top: 10px;
  left: 20px;
  width: 110px;
  height:40px;
  background-color: rgb(70, 70, 70);
}
.Left{
    width: 100px;
    height: 200px;
    top: 480px;
    left: 100px;
    position: absolute;
}
.Right{
    width: 100px;
    height: 200px;
    top: 480px;
    left: 1625px;
    position: fixed;

}
.MenuButton{
    top: 0px;
    left:0px;
    position: fixed;
}
.tittle{ 
    position: absolute;
    top: 30px;
    left: 60px;
    height: 30px;
    width: 150px;
    
    background-color: rgb(255, 255, 255);
    border: none;
    color: rgb(27, 27, 27);
    padding: 15px 15px;
    text-align:start;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 2px 2px;
    cursor: pointer;

   word-wrap: break-word;
}
/* 글 제목  */
.tittleContent{ 
   position: absolute;
    height: 50px;
   width: 150px;
    top: 0px;
    left: 150px;
  background-color: rgb(255, 255, 255);
  border: none;
   color: rgb(27, 27, 27);
  padding: 15px 30px;
  text-align:start;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);
   word-wrap: break-word;
}
.TitlleImgBox{
   position: absolute;
    height: 30px;
   width: 310px;
    top: 50px;
    left: 70px;
  background-color: rgb(255, 255, 255);
  border: none;
   color: rgb(27, 27, 27);
  padding: 15px 30px;
  text-align:start;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);
   word-wrap: break-word;
}
/* 모달에서 파일 선택 버튼 */
.fileSelectBtn{
   position: absolute;
   top: 90px;
   left: 70px;
   height: 30px;
   width: 310px;
  background-color: rgba(194, 194, 194, 0.938);
  
}
/* 모달에서 추가된 파일 목록들 */
.addedFileList{ 
   position: relative;
   top: 40px;
   left: 479px;
   font-size:15px;
   width: 330px;
    height: 30px;
   background-color: rgba(212, 212, 212, 0.938);
}
.fileImgButton{
   position: fixed;
    height: 300px;
    width: 30px;
    top: 130px;
    left: 70px;
}
.fileTextBox{
   position: absolute;
    height: 30px;
   width: 310px;
    top: 130px;
    left: 70px;
  background-color: rgb(255, 255, 255);
  border: none;
   color: rgb(27, 27, 27);
  padding: 15px 30px;
  text-align:start;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);
   word-wrap: break-word;
}
.button_Else{
    position: absolute;
    background-color: rgb(255, 196, 0);
    color: rgb(255, 255, 255);
    border: solid 2px rgb(0, 0, 0); 
 
}
.button_TextBox{
    position: absolute;
    background-color: rgb(102, 102, 102);
    color: rgb(255, 255, 255);
    border: solid 2px rgb(0, 0, 0);
}
.page__demo-group {
   top: 600px;
    left: 320px;
    margin-bottom: 16px;
   width: 100px; 
   position:fixed;
}
 .inputfile {
    /* top:50px; */
    left:150px;
    font-size:15px;
    width: auto;
    height: auto;
    position: absolute;
}
/* 모달에서 업로드 된 파일의 부모 -> 올라온 파일들의 영역 설정을 위해 부모의 크기를 설정함 */
.files{
  width: 460px;
  height: auto;
  text-align: center;
  /* background-color: aqua; */
}
/* 모달에서 업로드된 이미지들 */
.fileImage{
    max-width: 100%;
    /* width : 400px */
}
.fileVideo{
   max-width: 100%;
}
/* 글보기 이미지 버튼 */
    .albumImg1 {
        width: 270px;
        height: 300px;
        top: 180px;
        left: 350px;
        position: fixed;
    }

    .albumImg2 {
        width: 270px;
        height: 300px;
        top: 180px;
        left: 650px;
        position: fixed;
    }

    .albumImg3 {
        width: 270px;
        height: 300px;
        top: 180px;
        left: 950px;
        position: fixed;
    }

    .albumImg4 {
        width: 270px;
        height: 300px;
        top: 180px;
        left: 1250px;
        position: fixed;
    }

    .albumImg5 {
        width: 270px;
        height: 300px;
        top: 530px;
        left: 350px;
        position: fixed;
    }

    .albumImg6 {
        width: 270px;
        height: 300px;
        top: 530px;
        left: 650px;
        position: fixed;
    }

    .albumImg7 {
        width: 270px;
        height: 300px;
        top: 530px;
        left: 950px;
        position: fixed;
    }

    .albumImg8 {
        width: 270px;
        height: 300px;
        top: 530px;
        left: 1250px;
        position: fixed;
    }
    .dotSetting1 {
        width: 75px;
        height: 25px;
        top: 480px;
        left: 850px;
        position: fixed;
    }

    .dotSetting2 {
        width: 75px;
        height: 25px;
        top: 480px;
        left: 1150px;
        position: fixed;
    }

    .dotSetting3 {
        width: 75px;
        height: 25px;
        top: 480px;
        left: 1450px;
        position: fixed;
    }

    .dotSetting4 {
        width: 75px;
        height: 25px;
        top: 830px;
        left: 550px;
        position: fixed;
    }

    .dotSetting5 {
        width: 75px;
        height: 25px;
        top: 830px;
        left: 850px;
        position: fixed;
    }

    .dotSetting6 {
        width: 75px;
        height: 25px;
        top: 830px;
        left: 1150px;
        position: fixed;
    }

    .dotSetting7 {
        width: 75px;
        height: 25px;
        top: 830px;
        left: 1450px;
        position: fixed;
    }
 .yoyoo-ddr {
    width: auto;
    height: auto;
    position: absolute;
}


.img {
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;   
}
.yoyoo-ddr .resize-handler,
.yoyoo-ddr .rotate-handler {
  display: none;
}

.yoyoo-ddr.active {
  border: 1px dashed #607d8b;
}

.yoyoo-ddr.active .resize-handler,
.yoyoo-ddr.active .rotate-handler {
  display: inline-block;
}

.resize-handler,
.rotate-handler {
  position: absolute;
  border: 1px solid #607d8b;
  background: #fff;
  box-sizing: border-box;
  border-radius: 50%;
}

.textBox_resize-handler,
.textBox_rotate-handler {
  position: absolute;
  border: 1px solid #607d8b;
  background: #fff;
  box-sizing: border-box;
  border-radius: 50%;
}
.resize-handler.tm {
  left: 50%;
}

.resize-handler.r {
  top: 50%;
}

.resize-handler.bm {
  left: 50%;
}

.resize-handler.l {
  top: 50%;
  cursor: pointer;
}

.rotate-handler {
  left: 50%;
  cursor: crosshair;
} 
.textBox_rotate-handler {
  left: 50%;
  cursor: crosshair;
} 

/* 글 수정하기 모달 텍스트 박스 */
._editTextArea {
  position: relative;
  text-align:left; /* 글자 왼쪽 정렬*/
  text-overflow: ellipsis;
  overflow-y:scroll;
  white-space:normal;
  top:200px;
  height:400px;
  left:300px;
  font-size:15px;
  border: 2px solid #141414; /* 외곽선 설정*/
  resize: both;
}
 .addFileImage{
   left: 20px;
   background-size: cover;
   resize: both; /* 이미지 최대 사이즈에 적용 */
   width: auto;
   height: auto;

   overflow: scroll;
   object-fit: cover;
}

</style>

