const fs = require("fs");
const { parse } = require("csv-parse");
var validator = require("email-validator");

let ValNo = 0
let InValNo = 0

fs.createReadStream("BULKEMAIL.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) { 
    reexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reexp.test(row)==true){
        fun(row)
    }
    else{
        InValNo = InValNo +  1
    }   
}
)
  .on("end", function () {
    console.log(ValNo,InValNo)
  });
  function fun(input){
    console.log(input);
    console.log(1)
  }
  


