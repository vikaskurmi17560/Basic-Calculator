let display=document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let buttonsarray=Array.from(buttons);
let str='';
buttonsarray.forEach(btn=>{

    btn.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML == 'DEL'){
          str=str.substring(0,str.length-1);
          display.value=str;
        }
        else if(e.target.innerHTML == 'AC'){
            str=' ';
            display.value=str;
        }
        else if(e.target.innerHTML == '='){
             str=eval(str);
             display.value=str;
        }
        else{
        str=str+e.target.innerHTML;
        display.value=str;
        }
    });
});
