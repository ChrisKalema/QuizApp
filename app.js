const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer,index) =>{
        if(answer === correctAnswers[index]){
           
            score += 25;
         
        };
    });
    //display score in the span class

    scrollTo(0,0); //this method takes the user to cordinates (0,0) as asoon as you click submit

    result.classList.remove('d-none'); // remove the bootstrap class that prevents displaying result

    //score animation
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;

        if(output===score){
            clearInterval(timer);  //stopping the interval
        }else{
            output++;
        }
    }, 10);     //setting the interval to 10 millisecs
});

//Window Object = All methods are stored to this object

