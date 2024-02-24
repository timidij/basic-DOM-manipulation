
const header = document.querySelector('h1')
function clickMe(){
    if (header.innerHTML=="hello"){

        header.innerHTML = "goodbye";
    }else{

        header.innerHTML= "hello"
    }
}

// to make use of EventListener
// const button = document.querySelector('button')
// button.addEventListener("click", clickMe)



