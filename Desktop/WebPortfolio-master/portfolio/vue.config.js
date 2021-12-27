//vue.config.js
 module.exports = {
   chainWebpack: config => {
     config.module.rules.delete('eslint');
   },
   publicPath: '',
   outputDir: 'dist',
   runtimeCompiler: true,

   transpileDependencies: [
     'vuetify'
   ]
 }
