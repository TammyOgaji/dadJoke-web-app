const textBox = document.querySelector('#textBox');
const newJoke = document.querySelector('#btn1');
const resetBtn = document.querySelector('#btn2');


// function calls the API in order to generate the joke
const getDadJoke = async function() {
    try{
        const config = {headers: {Accept: 'application/json'}}
        const callJoke = await axios.get("https://icanhazdadjoke.com/", config)
        return callJoke.data.joke   
    }
    catch(error) {
        console.log(error, 'Sorry joke not available at this time')
    }
}


// this function calls the above function, then prints it out on the textBox on the client side
async function generateJoke(){
    jokeText = await getDadJoke()
    textBox.append(jokeText)
    newJoke.disabled = true
}

function reset(){
    textBox.innerHTML = ''
    newJoke.disabled = false
}

newJoke.addEventListener('click', generateJoke)

resetBtn.addEventListener('click', reset)