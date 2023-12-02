// Assuming you have a container element in your HTML with the class "snowflakes-container"
const container = document.querySelector('.snowflakes-container');

for (var i = 0; i < 100; i++) {
    let snowDiv = document.createElement("div");
    snowDiv.classList.add("snow");
    snowDiv.style.animation = `snowfall ${Math.floor(Math.random() * 10) + 5}s ${Math.floor(Math.random() * 10)}s linear infinite`;
    snowDiv.style.left = `${Math.floor(Math.random() * 100)}%`;

    // For the snowflakes
    snowDiv.classList.add("snow");
}


for (var i = 0; i < 20; i++) {
    let snowDiv = document.createElement("div");
    snowDiv.classList.add("snowflake");
    let image = document.createElement("img")
    image.src = "./snowflake.svg"
    snowDiv.appendChild(image)
    snowDiv.style.animation = `snowfall ${Math.floor(Math.random() * 10) + 15}s ${Math.floor(Math.random() * 10)}s linear infinite`;
    snowDiv.style.left = `${Math.floor(Math.random() * 100)}%`;
    // For the other type of snowflake
    snowDiv.classList.add("snowflake");
}
