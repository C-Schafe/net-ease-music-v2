var APP_ID = 'sm1o9As93aAVbtgzgMXkHJzh-gzGzoHsz';
var APP_KEY = '186bhesUrwc4H0RMtXrIv9S8';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
// //创建数据库,这里只是本地创建
// var TestObject = AV.Object.extend('playList');
// //创建一条记录
// var testObject = new TestObject();
// //保存记录，这里是真的保存上去
// testObject.save({
//   name:"test",
//   cover:"test",
//   creatorId:"test",
//   description:"test",
//   songs:['1','2','3']
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })