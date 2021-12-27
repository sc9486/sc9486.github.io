<template>
    <div>
    <div>
        
        <b-button v-b-modal.modal-xl variant="primary">
            <img src="../assets/img06.png" class="test">
        </b-button>
        
        <b-modal id="modal-xl" size="xl" title="개인 페이지 글쓰기 화면">
      
           <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
           <div id = "tittle" class="tittle" style="width:150px;height:30px;top:14px;left:50px;"> [ 제목 ] :</div>
           <input type="tittleText" class="tittleText" placeholder="제목을 입력하세요!" style="width:310px;height:30px;top:30px;left:150px;font-size:10px;">
             <button id = "titlleImgButton" class="titlleImgButton" style="width:30px;height:30px;top:80px;left:70px;font-size:15px;"> + </button> 
           <input type="text" class="TitlleImgBox" placeholder="썸네일 이미지.jpg" style="width:310px;height:30px;top:80px;left:150px;font-size:15px;">
          <button id = "fileImgButton" class="fileImgButton" style="width:30px;height:30px;top:130px;left:70px;font-size:15px;"> + </button> 
          <input type="text" class="fileTextBox" placeholder="동영상, 사운드, 이미지.jpg" style="width:310px;height:30px;top:130px;left:150px;font-size:15px;">
       <div id = "buttons"> 
         <button id = "buttonAddTextBox" class="buttonAddTextBox" style="width:175px;height:35px;top:130px;left:500px;font-size:15px;"> 글상자 추가하기 </button>
         <button id = "button01" class="button01" style="width:50px;height:50px;top:30px;left:710px;font-size:15px;"> 글꼴 </button> 
         <button id = "button02" class="button02"  style="width:50px;height:50px;top:30px;left:770px;font-size:15px;"> 크기 </button> 
         <button id = "button03" class="button03"  style="width:50px;height:50px;top:30px;left:830px;font-size:15px;"> 색 </button> 
         <button id = "button04" class="button04"  style="width:140px;height:50px;top:30px;left:890px;font-size:15px;"> 하이퍼링크 </button>   
         <!-- <input type="text" class="textBox" placeholder="글을 입력하세요!" style="width:450px;height:418px;font-size:10px;"> -->      
      </div>
     <div class="box-solid">solid</div>


        </b-modal>

   
        <img src="../assets/img06.png" class="test1">
        <img src="../assets/img06.png" class="test2">
        <img src="../assets/image.jpg" class="test3">
        <img src="../assets/img06.png" class="test4">
        <img src="../assets/img06.png" class="test5">
        <img src="../assets/img06.png" class="test6">
        <img src="../assets/img06.png" class="test7">
        <img src="../assets/Left.jpg" class="Left">
        <img src="../assets/Right.jpg" class="Right">
    </div>

   <div>
    <b-button v-b-toggle.sidebar-variant class="MenuButton">Menu bar</b-button>
    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>
          Crasasd
        </p>
        <router-link to="/PortfolioList"><b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img></router-link>
        <b-text class = "Lee-link">이상민 포트폴리오</b-text>
      </div>
       <div class="px-3 py-3">
        <router-link to="/PortfolioList1"><b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img></router-link>
        <b-text class = "Lee-link">정아연 포트폴리오</b-text>
      </div>
   
       <div class="px-3 py-4">
        <router-link to="/PortfolioList2"><b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img></router-link>
        <b-text class = "Lee-link">조하늘 포트폴리오</b-text>
      </div>
      <div class="px-3 py-5">
        <router-link to="/PortfolioList3"><b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img></router-link>
        <b-text class = "Lee-link">박지호 포트폴리오</b-text>
      </div>
    </b-sidebar>
  </div>
</div>
</template>

<script> 
// import Content from './Content.vue';
// export default {
//   components: { Content }, 
//    name: "App", 
//    data() { 
//       return { 
//          is_modal_viewed: false, 
//       };
//    },
// }; 
</script>





<style>
.test{
    width: 290px;
    height: 400px;
    top: 150px;
    left: 320px;
    position:fixed;
}
.test1{
    width: 290px;
    height: 400px;
    top: 150px;
    left: 640px;
    position: fixed;
}
.test2{
    width: 290px;
    height: 400px;
    top: 150px;
    left: 960px;
    position: fixed;
}
.test3{
    width: 290px;
    height: 400px;
    top: 150px;
    left: 1280px;
    position: fixed;
}
.test4{
    width: 290px;
    height: 400px;
    top: 600px;
    left: 320px;
    position: fixed;
}
.test5{
    width: 290px;
    height: 400px;
    top: 600px;
    left: 640px;
    position: fixed;
}
.test6{
    width: 290px;
    height: 400px;
    top: 600px;
    left: 960px;
    position: fixed;
}
.test7{
    width: 290px;
    height: 400px;
    top: 600px;
    left: 1280px;
    position: fixed;
}
.Left{
    width: 100px;
    height: 200px;
    top: 480px;
    left: 100px;
    position: fixed;
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
    height: 30px;
    width: 150px;
    top: 30px;
    left: 60px;
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

  /* border-radius: 12px; */
   word-wrap: break-word;
}
.tittleText{
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
  /* border-radius: 12px; */
   word-wrap: break-word;
}
.titlleImgButton{
   position: absolute;
    height: 30px;
   width: 30px;
    top: 100px;
    left: 70px;
  background-color: rgb(255, 196, 0);
  border: none;
   color: rgb(255, 255, 255);
  padding: 15px 15px;
  text-align:center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 2px 2px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);
  line-height: 0px; 
    display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 12px; */
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
  /* border-radius: 12px; */
   word-wrap: break-word;
}
.fileImgButton{
   position: absolute;
    height: 30px;
   width: 30px;
    top: 130px;
    left: 70px;
  background-color: rgb(255, 196, 0);
  border: none;
   color: rgb(255, 255, 255);
  padding: 15px 15px;
  text-align:start;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);
    line-height: 0px; 
  /* border-radius: 12px; */
   word-wrap: break-word;
      display: flex;
  justify-content: center;
  align-items: center;
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
  /* border-radius: 12px; */
   word-wrap: break-word;
}
.buttonAddTextBox{
    position: absolute;
    height: 35px;
   width: 170px;
    top:630px;
    left: 400px;
  background-color: rgb(102, 102, 102);
  border: none;
 color: rgb(255, 255, 255);
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
 line-height: 3px;
   border: solid 2px rgb(0, 0, 0);
}
.button01{
 position: absolute;
    height: 50px;
   width: 100px;
    top: 50px;
    left: 620px;
    background-color: rgb(255, 196, 0);
  border: none;
   color: rgb(255, 255, 255);
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);
    line-height: 18px;
}
.button02{
  position: absolute;
    height: 50px;
   width: 100px;
    top: 100px;
    left: 720px;
    background-color: rgb(255, 196, 0);
  border: none;
   color: rgb(255, 255, 255);
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
   line-height: 18px;
   border: solid 2px rgb(0, 0, 0);
}
.button03{
   position: absolute;
    height: 50px;
   width: 100px;
    top: 100px;
    left: 820px;
  background-color: rgb(255, 196, 0);
  border: none;
   color: rgb(255, 255, 255);
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
   line-height: 18px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);
}
.button04{
   position: absolute;
    height: 50px;
   width: 150px;
    top: 100px;
    left: 920px;
  background-color: rgb(255, 196, 0);
  border: none;
   color: rgb(255, 255, 255);
  padding: 15px 30px;
   line-height: 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);
}

/* .textBox{
   position: absolute;
    height: 418px;
   width: 450px;
    top: 180px;
    left: 620px;
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
   border-radius: 12px; 
   word-wrap: break-word;
} */

</style>

