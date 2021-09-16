<template>
  <div>
     <img src="https://testchn.s3.ap-northeast-2.amazonaws.com/image.jpg"> 
    <text src="https://testchn.s3.ap-northeast-2.amazonaws.com/testPortfolio.txt">
    <input type="button" class="button_TextBox" value="글 다운" v-on:click="download()" 
    style="width:175px;height:35px;top:80px;left:85px;font-size:15px;"> 

  </div> 
</template>
<script>
// export default ({
//  methods: {
//    download(bucket, folder, type, id, callback) {
//     const params = {
//         Bucket: (bucket || process.env.AWS_S3_BUCKET) + '/' + folder,
//         Key: id
//     };

//     const rstream = this.client.getObject(params).createReadStream();
//     return callback(null, null, rstream);
// },
//  setup() {
//   createCanvas(400, 400);
//   txt = loadStrings('나그네.txt');
//   String data[] = loadStrings("http://processing.org/about/index.html);
//   console.log(txt);
// }
//  },
// })
</script>


