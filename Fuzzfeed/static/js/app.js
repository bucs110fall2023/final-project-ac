
const container = document.querySelector('.snowflakes-container');

for (var i = 0; i < 100; i++) {
    let snowDiv = document.createElement("div");
    snowDiv.classList.add("snow");
    snowDiv.style.animation = `snowfall ${Math.floor(Math.random() * 10) + 5}s ${Math.floor(Math.random() * 10)}s linear infinite`;
    snowDiv.style.left = `${Math.floor(Math.random() * 100)}%`;

    // For the snowflakes
    snowDiv.classList.add("snow");
}

