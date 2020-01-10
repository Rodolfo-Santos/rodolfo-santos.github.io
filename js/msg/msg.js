document.querySelector("textarea").addEventListener("keyup", () => {
    var myNumbers = document.getElementById("numbers").value;
    var eachNumber = myNumbers.split("\n");
    document.getElementById("demo").innerHTML = eachNumber.length;
})


function sendMsg() {
  var myNumbers = document.getElementById("numbers").value;
  var myMsg = document.getElementById("msg").value;
  var sendWhats;

  // Trocando os carriage return pelo caracter %0A que a URL entende como enter:
  // %0A for newline \n <LF> e %0D for carriage return \r <CR>
  var myMsgCorrect = myMsg.replace(/\n/g, "%0A");
  var eachNumber = myNumbers.split("\n");

  // Enviando a mensagem para todos os contatos
  for (var i = 0, l = eachNumber.length; i < l; i++) {
      //alert('Número ' + (i + 1) + ': ' + eachNumber[i]);
      sendWhats = "https://api.whatsapp.com/send?phone=" + eachNumber[i] + "&text=" + myMsgCorrect + ""; //%20 BLANK
      //alert(sendWhats);

      window.open(sendWhats, "");
      //var win = window.open(sendWhats, '_blank');
      //win.focus();
  }
}


var newWin = window.open("popup.htm","go","width=1,height=1,top=900,left=900");             

if(!newWin || newWin.closed || typeof newWin.closed=='undefined') 
{ 
    alert("Para usar o sistema, desbloqueie as permissões de pop-up. ")
}