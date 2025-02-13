// Search on enter key event
document.getElementById("search-field").addEventListener("keydown",  event => {
    if (event.code === 'Enter') {
        var val = document.getElementById("search-field").value;
        window.open("https://search.brave.com/search?q=" + val);
    }
});

// Get current time and format
getTime = () => {
    let date = new Date();
    return date.toLocaleTimeString('en-UK');
}

// Get current date and format
getToday = () => {
    let date = new Date(),
        options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-UK', options);
}

window.onload = () => {
    // Set up the clock
    document.getElementById("clock").innerHTML = getTime();
    // Set clock interval to tick clock
    setInterval( () => {
        document.getElementById("clock").innerHTML = getTime();
    },100);
    // Set up the date
    document.getElementById("current_date").innerHTML = getToday();
}

document.addEventListener("keydown", event => {
    if (event.code == 'Space') {          // Spacebar code to open search
        document.getElementById('search').style.display = 'flex';
        document.getElementById('search-field').focus();
    } else if (event.code == 'Escape') {   // Esc to close search
        document.getElementById('search-field').value = '';
        document.getElementById('search-field').blur();
        document.getElementById('search').style.display = 'none';
    }
});
