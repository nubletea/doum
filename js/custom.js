const BANNER = document.querySelectorAll('div.banner');
const HAMMBURGER = document.querySelector('.hamburger');
const LEFT = document.querySelectorAll('.bigfont-left');
const RIGHT = document.querySelectorAll('.bigfont-right');
const addEventListener = (element, fn) => {
    for(let i=0;i<element.length;i++){
        element[i].onclick = fn;
    }
};
window.addEventListener("DOMContentLoaded",() => {
    addEventListener([HAMMBURGER],hamburger);
    addEventListener(LEFT,banner_left);
    addEventListener(RIGHT,banner_right);
});
//slide
const is={
    ham_bul:true
}
const count={
    banner_count:0,
    banner_text_count:0
};
const class_change={
    class_all_remove:function(banner){
        for(let i=0;i<banner.length;i++){
            banner[i].classList.remove('active');
        }
    },
    class_add:function(banner,count){
        banner[count].classList.add('active');
    }
}
const cont={
    for_change:function(ME,value){
        for(let i=0;i<ME.length;i++){
            ME[i].style.left=value;
        }

    }
}
//자동 슬라이드
function slide(){
    if(count.banner_count>=BANNER.length-1){
        count.banner_count=0;
        count.banner_text_count=0;
        class_change.class_all_remove(BANNER);
        class_change.class_add(BANNER,0);
    }else{
        count.banner_count+=1;
        count.banner_text_count=0;
        class_change.class_all_remove(BANNER);
        class_change.class_add(BANNER,count.banner_count);
    }
};
//텍스트 슬라이드
function text_active(){
    let banner_count=count.banner_count+1;
    let banner_li=document.querySelectorAll('.banner'+banner_count+' li');
    if(count.banner_text_count>=banner_li.length-1){
        count.banner_text_count=0;
        class_change.class_all_remove(banner_li);
        class_change.class_add(banner_li,0);
    }else{
        count.banner_text_count+=1;
        class_change.class_all_remove(banner_li);
        class_change.class_add(banner_li,count.banner_text_count);
    }
}
//left 버튼
function banner_left(){
    if(count.banner_count>0){
        count.banner_count-=1;
        class_change.class_all_remove(BANNER);
        class_change.class_add(BANNER,count.banner_count);
    }
}
//right 버튼
function banner_right(){
    if(count.banner_count<BANNER.length-1){
        count.banner_count+=1;
        class_change.class_all_remove(BANNER);
        class_change.class_add(BANNER,count.banner_count);
    }
}
//햄버거 버튼
function hamburger(){
    let container=document.querySelectorAll('.container');
    let section=document.querySelectorAll('section');
    let nav=document.querySelector('.gnb ul');
    if(is.ham_bul==true){
    this.innerHTML='close';
    nav.style.display='block';
    cont.for_change(section,'150px');
    cont.for_change(container,'150px');
    is.ham_bul=false;
    }else{
        this.innerHTML='menu';
        nav.style.display='none';
        cont.for_change(section,0);
        cont.for_change(container,0);
        is.ham_bul=true;
    }
    console.log(this);
}
setInterval(text_active,2000);
setInterval(slide,10000);
