// Select a file:
// <input type="file" id="myFile">
// <button onclick='processFile()'>Process</button>
// <div class="test"></div>

// <script>
    var validator = require("email-validator");
    let valno = 0
    let invalno = 0
    function processFile() {

        // let test = document.querySelector(".test");
        var file = "BULKEMAIL.csv"
        var reader = new FileReader();
        reader.readAsText(file);

        //if you need to read a csv file with a 'ISO-8859-1' encoding
        /*reader.readAsText(file,'ISO-8859-1');*/

        //When the file finish load
        reader.onload = function (event) {

            //get the file.
            var csv = event.target.result;

            //split and get the rows in an array
            var rows = csv.split('\n');

            //move line by line
            for (var i = 1; i < rows.length; i++) {
                //split by separator (,) and get the columns
                cols = rows[i].split(',');

                //move column by column
                for (var j = 0; j < cols.length; j++) {
                    /*the value of the current column.
                    Do whatever you want with the value*/
                    var values = cols[j];
                    //   test.innerHTML = 1;
                    ValidateEmail(values)
                }
            }
            console.log(valno)
            console.log(invalno)
        }
    }
    function ValidateEmail(input) {
        let test = validator.validate(input); 
        if(test == true){
            valno +=1
        }
        else{
            invalno +=1
        }
    }

processFile()
// </script>