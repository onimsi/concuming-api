const DOG_URL= "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

async function addNewDoggo(){
    const promise = await fetch(DOG_URL); //accept the promise then wait
    const processedResponse = await promise.json();

    // the object
    const img = document.createElement("img")
    img.src = processedResponse.message;
    img.alt = "doggos"
    doggos.appendChild(img)
    
    
}
document.getElementById("dog-btn").addEventListener("click",addNewDoggo)
