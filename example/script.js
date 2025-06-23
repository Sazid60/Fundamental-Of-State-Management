let count = 0; // state

const render = () => {
    document.getElementById("count").innerHTML = count;
};

const increment = () => {
    count++;
    render(); // ← call render after incrementing
};

const decrement = () => {
    count--;
    render(); // ← call render after decrementing
};

document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);

// render initially to display the starting count
render();
