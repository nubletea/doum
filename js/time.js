const time = () => {
    let d= new Date();
    let yy=d.getFullYear();
    let mm=d.getMonth()+1;
    let	dd=d.getDate();	
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    if(mm<10&&m<10){
        document.getElementById("date").innerHTML=yy+".0"+mm+"."+dd+"."+h+":0"+m;}
    else if(mm<10){
        document.getElementById("date").innerHTML=yy+".0"+mm+"."+dd+"."+h+":"+m;}
    else if(m<10){
        document.getElementById("date").innerHTML=yy+"."+mm+"."+dd+"."+h+":0"+m;}
    else{
    document.getElementById("date").innerHTML=yy+"."+mm+"."+dd+"."+h+":"+m;}
}
setInterval(time(),100);