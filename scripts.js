// Search on enter key event
document.getElementById("search-field").addEventListener("keydown",  event => {
    if (event.key === 'Enter') {
        var val = document.getElementById("search-field").value;
        window.open("https://searx.be/search?q=" + val);
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

// Weather Widget Function
!function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://weatherwidget.io/js/widget.min.js';
	fjs.parentNode.insertBefore(js,fjs);
    }
}
(document,'script','weatherwidget-io-js');

document.addEventListener("keydown", event => {
    if (event.key == 'Space') {          // Spacebar code to open search
        document.getElementById('search').style.display = 'flex';
        document.getElementById('search-field').focus();
    } else if (event.key == 'Escape') {   // Esc to close search
        document.getElementById('search-field').value = '';
        document.getElementById('search-field').blur();
        document.getElementById('search').style.display = 'none';
    }
});
