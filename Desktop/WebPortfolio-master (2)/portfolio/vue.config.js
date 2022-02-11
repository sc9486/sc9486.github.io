//vue.config.js
 module.exports = {
   chainWebpack: config => {
     config.module.rules.delete('eslint');
   },
   // 형식 : https://<username>.github.io/<repository name>/
  //  publicPath: 'https://sc9486.github.io/sc9486.github.io', 
  publicPath: 'http://localhost:3000/api',
    outputDir: 'dist',
   runtimeCompiler: true,

   transpileDependencies: [
     'vuetify'
   ],
   devServer: {

    host: 'localhost'
    }
   // 결과물이 backend로 가도록 설정
  //    devServer: { 
  //   proxy: { 
  //     '/api': { 
  //       target: 'http://localhost:3000/api',
  //       changeOrigin: true, 
  //       pathRewrite: { 
  //         '^/api': ''
  //       } 
  //     } 
  //   } 
  // },
  // outputDir: '../backend/public',
 }
