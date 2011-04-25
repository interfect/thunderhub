#!/usr/bin/env node
require("../lib/dicks")(process.argv[2], function (er,d){
  if(er)throw er
  console.log(d.join("\n"))
})
