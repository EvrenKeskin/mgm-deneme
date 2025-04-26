
function addHoverEvents() {
    const elements = document.querySelectorAll('.underline');
    console.log("Hover elements found:", elements.length);

    elements.forEach(element => {
        element.addEventListener('mouseover', (event) => {
            const popup = document.getElementById('popup');
            popup.innerText = event.target.getAttribute('data-info');
            popup.style.display = 'block';
            popup.style.top = (event.pageY + 10) + 'px';
            popup.style.left = (event.pageX + 10) + 'px';
        });
        element.addEventListener('mousemove', (event) => {
            const popup = document.getElementById('popup');
            popup.style.top = (event.pageY + 10) + 'px';
            popup.style.left = (event.pageX + 10) + 'px';
        });
        element.addEventListener('mouseout', () => {
            document.getElementById('popup').style.display = 'none';
        });
    });
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = timeString;
}
// Call the updateClock function immediately to display time instantly
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);



