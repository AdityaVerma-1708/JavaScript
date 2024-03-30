const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')
//choosing all button 
buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        if(event.target.id === 'grey'){
            // body.style.backgroundColor = 'grey';
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            // body.style.backgroundColor = 'yellow';
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'white'){
            // body.style.backgroundColor = 'white';
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'blue'){
            // body.style.backgroundColor = 'blue';
            body.style.backgroundColor = event.target.id;
        }
        
    })
})