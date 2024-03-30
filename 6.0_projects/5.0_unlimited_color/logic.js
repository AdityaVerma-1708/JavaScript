
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0;i<6;i++){
        color = color + hex[Math.floor(Math.random() * 16)]; 
    }
    return color;
}

let func1;
document.querySelector('#start').addEventListener('click',function(){

    if(!func1){
        func1 = setInterval(()=>{
            document.body.style.backgroundColor = randomColor();
        },1000)
    }
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(func1);
    func1 = null;
})