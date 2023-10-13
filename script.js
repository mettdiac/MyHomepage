// Search Box

document.getElementById('search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      searchWithBing();
    }
});
  
document.getElementById('searchBtn').addEventListener('click', function() {
    searchWithBing();
});

function searchWithBing() {
    const searchTerm = document.getElementById('search').value;
    if (searchTerm) {
      const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(searchTerm)}`;
      window.location.href = searchUrl;
    }
}

// UTC +1 TIME
function displayTime() {
    const romeTimeElement = document.getElementById('displayTime');
    const romeOffset = 2;
    const currentTime = new Date();
    const romeTime = new Date(currentTime.getTime() + romeOffset * 3600000);

    const hours = ('0' + romeTime.getHours()).slice(-2);
    const minutes = ('0' + romeTime.getMinutes()).slice(-2);
    const seconds = ('0' + romeTime.getSeconds()).slice(-2);

    const formattedTime = `${hours}:${minutes}:${seconds}`;
    romeTimeElement.textContent = formattedTime;
    if (hours >= 7 && hours < 20) {
        timeImageElement.src = 'daytime_image.jpg';
    } else {
        timeImageElement.src = 'nighttime_image.jpg';
    }
    }
    setInterval(displayTime, 1000);
    displayTime();