let arr = [ "red","#000","#2f39ec","hotpink","#a0a0a0"];
   const show = ()=>{
    for(let i=0;i<arr.length;i++)
    {
        document.getElementById(`div${i}`).style.backgroundColor=arr[i];
        
    }
   }
   c=""
 function pickC(e){
    c=c+e;
    document.getElementById("choice").style.backgroundColor = e;
    document.getElementById("choice").innerHTML="";

    console.log(c);
    
}

function btn(){


    let number = Math.random();
    let factor = number*arr.length;
    let floor =Math.floor(factor);
    let coler = arr[floor]
    document.getElementById("div").style.backgroundColor = coler;


  if (c=="")
  {alert("choce your coler");
  location.reload();}
  
  
 else if(c==coler)
  {
     document.getElementById("result").innerHTML = "you are winner";
     document.getElementById("result").style.scale=2;
     document.getElementById("result").style.transitionDelay=100;


    setTimeout(function() {
    location.reload();
  }, 10000)
 }
 else{
    document.getElementById("result").innerHTML = "Try next time";
    setTimeout(function() {
    location.reload(); // This will reload the page after a certain time (in milliseconds)
  }, 3000); 
    


 }
}
function res(){
    location.reload();}


