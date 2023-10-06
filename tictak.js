let b1=document.getElementsByClassName("b1");
let a=new Array(9);
let y=0;
let moves=0;
for(let i=0; i<9; i++)
{
    a[i]="";
}
const checkValidMove=(x)=>{
    if(a[x]=== "")
    {
        moves=moves+1;
        if(y===1)
        {a[x]="x";
        y=0;
        let cimg=new Image();
        cimg.src='https://s6.imgcdn.dev/ZYUy9.png';
        cimg.style.height=`130px`;
        cimg.style.width=`130px`;
        b1[x].appendChild(cimg);
    }
        else
        {a[x]="o";
        y=1;
        let zimg=new Image();
zimg.src='https://s6.imgcdn.dev/ZYlAy.png';
zimg.style.height=`130px`;
zimg.style.width=`130px`;
        b1[x].appendChild(zimg);
    
    }
        return true;
    }
    else{
        alert("INVALID MOVE!!!!! FUCK U");
        return false;
    }
}
const reset=()=>{
    setTimeout(()=>{location.reload();
        console.log(fuck)},1000)
}
const ifEmpty=(cv)=>{
    if(cv ==="")
    {
        return false;
    }
    else{
        return true;
    }

}
const checkWinner=()=>{
      
        for(let i=0;i<9;i=i+3)
           {
              if(a[i]===a[i+1] && a[i+1]===a[i+2] && ifEmpty(a[i]))
              {
                alert(`User ${a[i]}  won`);
                return true;
              }
           }
           for(let i=0;i<9;i++)
           {
             if(a[i]===a[i+3] && a[i+3]===a[i+6] && ifEmpty(a[i]))
             {
                alert(`User ${a[i]}  won`);
                return true;
             }
           }
           if(a[0]===a[4] && a[4]===a[8] && ifEmpty(a[0]))
           {
            alert(`User ${a[0]}  won`);
            return true;
           }
           if(a[2]===a[4] && a[4]===a[6] && ifEmpty(a[2]))
           {
            alert(`User ${a[2]}  won`);
            return true;
           }
        if(moves===9)
        {
            alert("MATCH DRAW !!!!!!");
            return true;
        }
        
        return false;
}
for (let i = 0; i < 9; i++) {
    b1[i].addEventListener('click', () =>{

     if(checkValidMove(i))
     {
        if(checkWinner())
        {
            reset();
        }
     }
     console.log(a);
    });
}