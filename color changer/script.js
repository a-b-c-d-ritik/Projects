const randomcolor=()=>{
    const hex='0123456789ABCDEF';
    let colorc='#'
    for(let i=0;i<6;i++)
    {
        colorc+=hex[Math.floor(Math.random()*16)]
    }
    return colorc;
}

console.log(randomcolor());

const fn1=()=>{
    document.body.style.backgroundColor=randomcolor();
}

//const intvid=setInterval(fn1,2000)
var intvid;
document.querySelector('#start').addEventListener('click',()=>{
    //intvid();
    intvid=setInterval(fn1,1500)
    console.log("started")
},false)

document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(intvid)
    console.log("stopped")
    intvid=null;//flush out memory
},false)
