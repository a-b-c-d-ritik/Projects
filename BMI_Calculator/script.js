const form=document.querySelector('form');
form.addEventListener('submit',function (e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    console.log(height,weight)
    const result=document.querySelector('#results')

    if(height===''|| height<0 ||isNaN(height)){
        result.innerHTML=`please give a valid height:${height}`
    }
    else if(weight===''|| weight<0 ||isNaN(weight)){
        result.innerHTML=`please give a valid weight:${weight}`
    }
    else{
    const bmi=(weight/(Math.pow(height,2)/10000)).toFixed(2);
    result.innerHTML=`<span>BMI=${bmi}</span>`
    }
})