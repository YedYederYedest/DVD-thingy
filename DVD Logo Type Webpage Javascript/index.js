const myBox = document.getElementById("myBox");
const moveAmount = 50;
let x = 0;
let y = 0;


document.addEventListener("keydown", event =>
{
    myBox.textContent = "Hello";
    myBox.style.backgroundColor = "black"
    myBox.style.color = "white";
    myBox.style.fontSize = 7;
}
);

document.addEventListener("keyup", event =>
{
  myBox.textContent = "Bye";
  myBox.style.backgroundColor = "red"
  myBox.style.color = "white";       
}
); 

document.addEventListener("keydown", event =>
{
    if(event.key.startsWith("Arrow"))
    {

        event.preventDefault();

        switch(event.key)
        {
            case "ArrowUp": 
            y-=moveAmount;
            break;

            case "ArrowDown":
            y+=moveAmount;
            break;

            case"ArrowLeft":
            x-=moveAmount;
            break;

            case"ArrowRight":
            x+=moveAmount;
            break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
}
);