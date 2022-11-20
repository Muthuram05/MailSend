let upload = document.getElementById('upload');
upload.addEventListener('change',()=>{
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload = function(){
        let Arr = fr.result.split(/r?\n | \n/).map(e =>{
            return e.split(',');
        });
        Window.valNo = 0;
        let invalNo = 0;
        Window.valMail = [];
        Arr.forEach(e =>{
            let em = String(e);
            let m = e.map(e=>{
                return `<td>${e}</td>`;

            })
            let creEle = document.createElement("tr");
            creEle.innerHTML = m;
            console.log("ok")
            if(em != ""){
                if(em.charAt(em.length - 4)=='.'){
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo +1
                    return false;
                }
                else if(em.charAt(em.length - 3)=='.'){
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo +1
                    return false;
                }
                else{
                    document.querySelector("table#val").appendChild(creEle);
                   invalNo = invalNo + 1;
                   return false;
                }

            }
        })
        document.querySelector("#valCount").innerHTML = Window.valNo;
        document.querySelector("#invalCount").innerHTML = invalNo;

    }

})

function sendEmail() {
	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "mr032495@gmail.com",
		Password: "81497AB4379ABD01728D0CB5972EE6EEF6F3",
		To: 'mr032495@gmail.com',
		From: "mr032495@gmail.com",
		Subject: "Sending Email using javascript",
		Body: "Well that was easy!!",
	})
		.then(function (message) {
		alert(message)
		});
}