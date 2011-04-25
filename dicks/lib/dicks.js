module.exports=dicks
function dicks (n,c) {
  n = Math.abs(+n || 5)
  var d=[]
  var l = 12
  while(n--){
    var s=8
    var i=Math.ceil(Math.random()*l)
    var p=Math.floor(Math.random()*(l/i)*50)===0
    while(i--)s+='='
    s+='D'
    if(p)s+='~ ~ ~'
    d.push(s)
  }
  if(!c)return d
  process.nextTick(function(){c(null,d)})
}
dicks.dicks=dicks
dicks.sync=dicks.dicksSync=function(n){return dicks(n)}
