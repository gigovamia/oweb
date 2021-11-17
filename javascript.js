

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
  
  function funkcija(){
    console.log("mia")
      var kocka = document.getElementById('kocka');
      if(flag==0) {
        //kocka.backgroundColor="red";
          kocka.style.backgroundImage = "url('like11.png')";
          flag = 1;
      }else{
          kocka.style.backgroundImage="url('like222.png')";
        //kocka.backgroundColor="red";
         flag=0;
      }
  }
  
  function funkcija2(){
    console.log("mia")
      var kocka = document.getElementById('kocka2');
      if(flag==0) {
        //kocka.backgroundColor="red";
          kocka.style.backgroundImage = "url('like11.png')";
          flag = 1;
      }else{
          kocka.style.backgroundImage="url('like222.png')";
        //kocka.backgroundColor="red";
         flag=0;
      }
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
        var text = document.getElementById('komentarot').value;
        console.log(text);
        var kade = document.getElementById('where');
        var textToAdd=document.createTextNode(text);
        //var textToAdd = document.createTextNode("Text to be added");
        kade.appendChild(textToAdd);
        kade.innerHTML+="</br>"
      }
  
  
  
      function postComment2(){
        console.log("hEy")
        var text = document.getElementById('komentarot').value;
        console.log(text);
        var kade = document.getElementById('where');
        var textToAdd=document.createTextNode(text);
        //var textToAdd = document.createTextNode("Text to be added");
        kade.appendChild(textToAdd);
        kade.innerHTML+="</br>"
      }
  
      function myFunction2() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
  
      function postComment3(){
        console.log("hEy")
        var text = document.getElementById('komentarot').value;
        console.log(text);
        var kade = document.getElementById('where');
        var textToAdd=document.createTextNode(text);
        //var textToAdd = document.createTextNode("Text to be added");
        kade.appendChild(textToAdd);
        kade.innerHTML+="</br>"
      }
  
  
  
      const likesNum=document.querySelector('#likes');
      const likeButton=document.querySelector('#kopce');
      let brojac=0;
  
      likeButton.addEventListener('click',funkk()) 
     function funkk(){
        brojac++;
        likesNum.textContent=brojac;
      }
  
      
    