const tracker = document.querySelector('.tracker');

document.addEventListener("mousemove", e => {
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
});