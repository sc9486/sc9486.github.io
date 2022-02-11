<template>
    <div>
      <!-- <meta charset="utf-8">
      <h1>서버 동기화</h1> -->
       <h1 class="idView" style="top:55px;left:1271px;width:200px;height:50px;float: right;margin-top:-30px;position:fixed;margin-right : 30px;font-size: small;"> 내 아이디 :  {{myID}}</h1>
      <button type="button" @click="GotoMainPage()"  style="border-radius: 10px;top:10px;width:65px;height:45px;left:1440px;position:fixed;background-color:#d44000;">Main</button>   
      <div class="screen" >
        <button type="button" @click="AWS_GetPost('1')" v-b-modal.modal-see variant="outline-light" style="background-color:#ffffff">
          <img src="../assets/slotForm.png" class="albumImg1">
        </button>
          <button type="button" @click="AWS_GetPost('2')" v-b-modal.modal-see variant="outline-light" style="background-color:#ffffff">
          <img v-show="slot_show1" src="../assets/slotForm.png" class="albumImg2">
        </button>
                <button type="button" @click="AWS_GetPost('3')" v-b-modal.modal-see variant="outline-light" style="background-color:#ffffff">
          <img v-show="slot_show2" src="../assets/slotForm.png" class="albumImg3">
        </button>
                <button type="button" @click="AWS_GetPost('4')" v-b-modal.modal-see variant="outline-light" style="background-color:#ffffff">
          <img v-show="slot_show3" src="../assets/slotForm.png" class="albumImg4">
        </button>
                <button type="button" @click="AWS_GetPost('5')" v-b-modal.modal-see variant="outline-light" style="background-color:#ffffff">
          <img v-show="slot_show4" src="../assets/slotForm.png" class="albumImg5">
        </button>
                <button type="button" @click="AWS_GetPost('6')" v-b-modal.modal-see variant="outline-light" style="background-color:#ffffff">
          <img v-show="slot_show5" src="../assets/slotForm.png" class="albumImg6">
        </button>
        <button type="button" @click="AWS_GetPost('7')" v-b-modal.modal-see variant="outline-light" style="background-color:#ffffff">
          <img v-show="slot_show6" src="../assets/slotForm.png" class="albumImg7">
        </button>
         <button type="button" @click="AWS_GetPost('8')"  style="background-color:#ffffff">
          <img v-show="slot_show7" src="../assets/slotForm.png" class="albumImg8">
        </button>
      </div>
    <div>   
       <modal>  <!-- 글 보기 모달 -->
        <b-modal id="modal-see" class="modal" size="xl">  <!-- ok 버튼 누르면 AWS에 파일 업로드 실행-->       
   
        <!-- 모달 좌측 상단의 설정들 -->
      <div id="modal-header" style="height:485px;">
       
        <div id = "tittle" class="tittle" style="width:150px;height:30px;top:14px;left:50px;"> [ 제목 ] :</div>
        <!-- 글 제목 창 -->
        <input type="text" id="postTittle" class="tittleContent" readonly style="width:310px;height:30px;top:30px;left:150px;font-size:10px;">
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
                 readonly style="position:absolute;top:10px;left:485px;width:610px;height:333px;resize:none">
        </textarea>  
      </div>
      <!-- <div id="content" style="top:125px;left:20px;position:absolute;width:1100px;height:400px;float:left;align:left;overflow-y:scroll;"></div> -->
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
import AWS from 'aws-sdk'

// var imgs = new Array();
export default {
  name: 'ddr',
  props: {
      textBox_content: String,// 글상자 내용
  },
  data() {
    return {
          // currentRatio: 1,
          // isInitialRatio: false,
          newImgSrc: '', // 새로운 이미지의 경로를 저장할 변수
          //textBox_count : 0, // 글상자 개수
          textBox_content: "",// 글상자 내용
          file_count: 0, // 글 불러올 때 서버에 올라가져있는 파일의 개수
        
          //selected: null, // 선택된 목록
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
        postCount:0,// 서버에서 받아온 글의 개수
        myID: ""
    }
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
      AWS_GetPost(postIndex) // AWS에 업로드 된 글 내용 불러오기 (글보기 모달에서 사용)
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

        // 리스트 갱신해주어야 함
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
          // id 추출
          var userId = this.$store.state.awsDatalists[i].substr(0,idx);
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
         // 서버의 파일들 중 로그인한 id가 작성한 파일들을 찾는다, 찾은 파일들 중 글의 index 번호가 올바른지 확인한다.
         if(userId != localStorage.getItem('userId')){ 
           this.myID=""
          return alert ("아이디를 확인할 수 없습니다. 메인페이지로 돌아가 로그인해주세요"+ localStorage.getItem('userId'))}
        
         if( (userId == localStorage.getItem('userId')) && (fileIndex == this.postIndex)&& (fileIndex!=0))
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
      },
      AWS_PostCountCheck()
      {
        this.$store.commit('GetAllFiles') // 서버 파일들의 목록을 가져옴

        for(var i=0; i<this.$store.state.awsDatalists.length; i++)
        {
            var fileName = this.$store.state.awsDatalists[i]        
            var id = localStorage.getItem('userId'); // id 조회

            for(var j=1; j<=8; j++)
            {
              var a = id+"$"+j+".txt"
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
  }
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
.img {
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;   
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
  left:330px;
  font-size:15px;
  /* 외곽선 설정*/
  /* border: 2px solid #141414; */ 
  resize: none;
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

