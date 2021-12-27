<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ffffff"
      img-width="800"
      img-height="400"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
<!--<b-carousel-slide img-src="../assets/img04.png"> <-->
       <b-carousel-slide>
        <b-button v-b-modal.modal-xl variant="primary">
            <img src="../assets/img06.png" class="test">
        </b-button>
        
        <b-modal id="modal-xl" size="xl" title="Extra Large Modal">
             <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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
      </b-carousel-slide>


      <router-link to="/PortfolioList1"><b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide></router-link>


      <router-link to="/PortfolioList2"><b-carousel-slide img-src="./assets/logo.png">
          <img src='../assets/logo.png'>
      </b-carousel-slide></router-link>
    </b-carousel>
    




  </div>
</template>


<style>
.carousel-1{
    top: 100px;
    left: 100px;
    position: fixed;
}
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
.modal-center.modal-fullsize{
    width: 100%; 
    height: 100%; 
    margin: 0; 
    padding: 0;


}
</style>
