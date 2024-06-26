const form = document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();   //basically stoping the default action of the submit button of the form

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const bmi = weight/((height*height)/10000);

    if(bmi <= 18.6){
        result.innerHTML = `<span>${bmi}</span><br><span>UNDER WEIGHT</span>`;
    }
    else if(bmi > 18.6 && bmi <= 24.9){
        result.innerHTML = `<span>${bmi}</span><br><span>NORMAL</span>`;
    }
    else{
        result.innerHTML = `<span>${bmi}</span><br><span>OVER WEIGHT</span>`;
    }
})