




function Toggle(){
  var kocka = document.getElementById('btn');
        kocka.style.backgroundColor="green";
}


 


var clicks = 0;

document.getElementById("clicks").innerHTML = clicks;

$('.like-counter').click(function() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  $('.like-counter').addClass("liked");
  document.writeln("<p>Likes"+clicks+"</p>")
});



function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function toggleText1() {
  var text = document.getElementById("demo1");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function toggleText2() {
  var text = document.getElementById("demo2");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
var flag=0;
var noLikes=0;
function funkcija(){
  console.log("mia")
  if(noLikes==undefined){
    noLikes=0;
  }
  var tekst = document.getElementById('lajk');
    var kocka = document.getElementById('kocka');
    if(flag==0) {
        kocka.style.backgroundImage = "url('like11.png')";
        flag = 1;
    }else{
        kocka.style.backgroundImage="url('like222.png')";
        noLikes++;
        console.log(noLikes)
       flag=0;
    }
    tekst.innerHTML='<p>'+noLikes+'</p>'
}
var flag0=0;

var flag2=0;
var noLikes2=0;
function funkcija2(){
  console.log("mia")
  if(noLikes2==undefined){
    noLikes2=0;
  }
  var tekst2 = document.getElementById('lajk2');
    var kocka2 = document.getElementById('kocka2');
    if(flag2==0) {
        kocka2.style.backgroundImage = "url('like11.png')";
        flag2 = 1;
    }else{
        kocka2.style.backgroundImage="url('like222.png')";
        noLikes2++;
        console.log(noLikes2)
       flag2=0;
    }
    tekst2.innerHTML='<p>'+noLikes2+'</p>'
}

var flag3=0;
var noLikes3=0;
function funkcija3(){
  console.log("mia")
  if(noLikes3==undefined){
    noLikes3=0;
  }
  var tekst3 = document.getElementById('lajk3');
    var kocka3 = document.getElementById('kocka3');
    if(flag3==0) {
        kocka3.style.backgroundImage = "url('like11.png')";
        flag3 = 1;
    }else{
        kocka3.style.backgroundImage="url('like222.png')";
        noLikes3++;
        console.log(noLikes3)
       flag3=0;
    }
    tekst3.innerHTML='<p>'+noLikes3+'</p>'
}

var flag4=0;
var noLikes4=0;
function funkcija4(){
  console.log("mia")
  if(noLikes4==undefined){
    noLikes4=0;
  }
  var tekst4 = document.getElementById('lajk4');
    var kocka4 = document.getElementById('kocka4');
    if(flag4==0) {
        kocka4.style.backgroundImage = "url('like11.png')";
        flag4 = 1;
    }else{
        kocka4.style.backgroundImage="url('like222.png')";
        noLikes4++;
        console.log(noLikes4)
       flag4=0;
    }
    tekst4.innerHTML='<p>'+noLikes4+'</p>'
}

var flag5=0;
var noLikes5=0;
function funkcija5(){
  console.log("mia")
  if(noLikes5==undefined){
    noLikes5=0;
  }
  var tekst5 = document.getElementById('lajk5');
    var kocka5 = document.getElementById('kocka5');
    if(flag5==0) {
        kocka5.style.backgroundImage = "url('like11.png')";
        flag4 = 1;
    }else{
        kocka5.style.backgroundImage="url('like222.png')";
        noLikes5++;
        console.log(noLikes5)
       flag5=0;
    }
    tekst5.innerHTML='<p>'+noLikes5+'</p>'
}

var flag6=0;
var noLikes6=0;
function funkcija6(){
  console.log("mia")
  if(noLikes6==undefined){
    noLikes6=0;
  }
  var tekst6 = document.getElementById('lajk6');
    var kocka6 = document.getElementById('kocka6');
    if(flag6==0) {
        kocka6.style.backgroundImage = "url('like11.png')";
        flag6 = 1;
    }else{
        kocka6.style.backgroundImage="url('like222.png')";
        noLikes6++;
        console.log(noLikes6)
       flag6=0;
    }
    tekst6.innerHTML='<p>'+noLikes6+'</p>'
}

var flag7=0;
var noLikes7=0;
function funkcija7(){
  console.log("mia")
  if(noLikes7==undefined){
    noLikes7=0;
  }
  var tekst7 = document.getElementById('lajk7');
    var kocka7 = document.getElementById('kocka7');
    if(flag7==0) {
        kocka7.style.backgroundImage = "url('like11.png')";
        flag7 = 1;
    }else{
        kocka7.style.backgroundImage="url('like222.png')";
        noLikes7++;
        console.log(noLikes7)
       flag7=0;
    }
    tekst7.innerHTML='<p>'+noLikes7+'</p>'
}


var flag8=0;
var noLikes8=0;
function funkcija8(){
  console.log("mia")
  if(noLikes8==undefined){
    noLikes8=0;
  }
  var tekst8 = document.getElementById('lajk8');
    var kocka8 = document.getElementById('kocka8');
    if(flag8==0) {
        kocka8.style.backgroundImage = "url('like11.png')";
        flag8 = 1;
    }else{
        kocka8.style.backgroundImage="url('like222.png')";
        noLikes8++;
        console.log(noLikes8)
       flag8=0;
    }
    tekst8.innerHTML='<p>'+noLikes8+'</p>'
}





$(document).ready(function() {
  console.log("Hey")
  $("#myButton").click(function() {
    $("#textInput").show();
  });
});
var flag1=1;
function showDiv(){
  var newtextbox ='';
  if (!document.getElementById("textInput"))
  if(flag1==0) {
    
    console.log("Da se pali")
   newtextbox += '<input type="text" id="textInput" value="..." />'; 
      document.getElementById('tbox_div').innerHTML+=newtextbox;
      flag1=1;
    }else{
      console.log("Da se gasi")
      flag1=0;
    }

    }


    function myFunction() {
     
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

    }
    
    function postComment(){
  
      console.log("mia");
      var text =document.getElementById('komentarot').value;
      console.log(text);
      var kade = document.getElementById('where');
      var textToAdd=document.createTextNode(text);
      
      //var textToAdd = document.createTextNode("Text to be added");
     
      kade.appendChild(textToAdd);
      
     
      
      kade.innerHTML+="</br>"
    }
   



    function postComment2(){
      console.log("hEy")
      var text2 = document.getElementById('komentarot2').value;
      console.log(text2);
      var kade2 = document.getElementById('where2');
      var textToAdd2=document.createTextNode(text2);
      //var textToAdd = document.createTextNode("Text to be added");
      kade2.appendChild(textToAdd2);
      kade2.innerHTML+="</br>"
      
    }

    function myFunction2() {
      var x2 = document.getElementById("myDIV2");
      if (x2.style.display === "none") {
        x2.style.display = "block";
      } else {
        x2.style.display = "none";
      }
    }

    function postComment3(){
      console.log("hEy")
      var text3 = document.getElementById('komentarot3').value;
      console.log(text3);
      var kade3 = document.getElementById('where3');
      var textToAdd3=document.createTextNode(text3);
      //var textToAdd = document.createTextNode("Text to be added");
      kade3.appendChild(textToAdd3);
      kade3.innerHTML+="</br>"
      
    }

    function myFunction3() {
      var x3 = document.getElementById("myDIV3");
      if (x3.style.display === "none") {
        x3.style.display = "block";
      } else {
        x3.style.display = "none";
      }
    }



    function postComment4(){
      console.log("hEy")
      var text4 = document.getElementById('komentarot4').value;
      console.log(text4);
      var kade4 = document.getElementById('where4');
      var textToAdd4=document.createTextNode(text4);
      //var textToAdd = document.createTextNode("Text to be added");
      kade4.appendChild(textToAdd4);
      kade4.innerHTML+="</br>"
      
    }

    function myFunction4() {
      var x4 = document.getElementById("myDIV4");
      if (x4.style.display === "none") {
        x4.style.display = "block";
      } else {
        x4.style.display = "none";
      }
    }


    function postComment5(){
      console.log("hEy")
      var text5 = document.getElementById('komentarot5').value;
      console.log(text5);
      var kade5 = document.getElementById('where5');
      var textToAdd5=document.createTextNode(text5);
      //var textToAdd = document.createTextNode("Text to be added");
      kade5.appendChild(textToAdd5);
      kade5.innerHTML+="</br>"
      
    }

    function myFunction5() {
      var x5 = document.getElementById("myDIV5");
      if (x5.style.display === "none") {
        x5.style.display = "block";
      } else {
        x5.style.display = "none";
      }
    }

    function postComment6(){
      console.log("hEy")
      var text6 = document.getElementById('komentarot6').value;
      console.log(text6);
      var kade6 = document.getElementById('where6');
      var textToAdd6=document.createTextNode(text6);
      //var textToAdd = document.createTextNode("Text to be added");
      kade6.appendChild(textToAdd6);
      kade6.innerHTML+="</br>"
      
    }

    function myFunction6() {
      var x6 = document.getElementById("myDIV6");
      if (x6.style.display === "none") {
        x6.style.display = "block";
      } else {
        x6.style.display = "none";
      }
    }

    function postComment7(){
      console.log("hEy")
      var text7 = document.getElementById('komentarot7').value;
      console.log(text7);
      var kade7 = document.getElementById('where7');
      var textToAdd7=document.createTextNode(text7);
      //var textToAdd = document.createTextNode("Text to be added");
      kade7.appendChild(textToAdd7);
      kade7.innerHTML+="</br>"
      
    }

    function myFunction7() {
      var x7 = document.getElementById("myDIV7");
      if (x7.style.display === "none") {
        x7.style.display = "block";
      } else {
        x7.style.display = "none";
      }
    }

    function postComment8(){
      console.log("hEy")
      var text8 = document.getElementById('komentarot8').value;
      console.log(text8);
      var kade8 = document.getElementById('where8');
      var textToAdd8=document.createTextNode(text8);
      //var textToAdd = document.createTextNode("Text to be added");
      kade8.appendChild(textToAdd8);
      kade8.innerHTML+="</br>"
      
    }

    function myFunction8() {
      var x8 = document.getElementById("myDIV8");
      if (x8.style.display === "none") {
        x8.style.display = "block";
      } else {
        x8.style.display = "none";
      }
    }











    const likesNum=document.querySelector('#likes');
    const likeButton=document.querySelector('#kopce');
    let brojac=0;

    likeButton.addEventListener('click',funkk()) 
   function funkk(){
      brojac++;
      likesNum.textContent=brojac;
    }

    
    function countWord() {
 
      var words = document
          .getElementById("komentarot").value;

      var count = 0;

      var split = words.split(' ');

      for (var i = 0; i < split.length; i++) {
          if (split[i] != "") {
              count += 1;
          }
      }

      document.getElementById("show")
          .innerHTML = count;
  }

  