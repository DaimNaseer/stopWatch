var reset=document.getElementById('resetBtn');
var start=document.getElementById('startBtn');
var stop=document.getElementById('stopBtn');
var watch=document.querySelector('.watch');
var i='0'+0;
var j='0'+0;
var k='0'+0;
var a;

function startStopWatch(){
     i++;
     if(i<10){
         i='0'+i;
     }
     if(i<60){
          watch.innerHTML='<p ><span class="hour">'+ k +'</span>:<span class="min">'+ j +'</span>:<span class="sec">'+ i +'</span></p> ';
    }else{
     i='0'+0;
     j++;
     if(j<10){
        j='0'+j;
    }
     if(j<60){ 
         watch.innerHTML=' <p ><span class="hour">'+ k +'</span>:<span class="min">'+ j +'</span>:<span class="sec">'+ i +'</span></p> ';     
        }else{
            j='0' + 0;
            k++;
            if(k<10){
                k='0'+k;
            }
            watch.innerHTML='<p ><span class="hour">'+ k +'</span>:<span class="min">'+ j +'</span>:<span class="sec">'+ i +'</span></p> ';
        }
    }
}
start.addEventListener('click',function(){
    
   a= setInterval(startStopWatch,1000);  
});
reset.addEventListener('click',function(){
    watch.innerHTML='<p ><span class="hour">00</span>:<span class="min">00</span>:<span class="sec">00</span></p> ';
    clearInterval(a);
    i='0'+0;
    j='0'+0;
    k='0'+0;

});
stop.addEventListener('click',function(){
   
   clearInterval(a);
});

