// Search on enter key event
document.getElementById("search-field").addEventListener("keydown",  event => {
    if (event.keyCode === 13) {
        var val = document.getElementById("search-field").value;
        window.open("https://searx.be/search?q=" + val);
    }
});

// Get current time and format
getTime = () => {
    let date = new Date(),
        min = date.getMinutes(),
        hour = date.getHours();
    return "" +
        (hour < 10 ? ("0" + hour) : hour) + ":" +
        (min < 10 ? ("0" + min) : min);
}

// Get current date and format
getToday = () => {
    let date = new Date(),
        months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"],
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        day = date.getDate(),
    weekday = days[date.getDay() - 1],
        month = months[date.getMonth() - 1],
        year = date.getFullYear();

    return "" +
        weekday + " the " +
        ((day % 10) == 1 ? (day + "st") :
 ((day % 10) == 2 ? (day + "nd") :
  ((day % 10) == 3 ? (day + "rd") :
   (day + "th")
  )
 )
) + " of " +
month + " " +
        year;
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
    if (event.keyCode == 32) {          // Spacebar code to open search
        document.getElementById('search').style.display = 'flex';
        document.getElementById('search-field').focus();
    } else if (event.keyCode == 27) {   // Esc to close search
        document.getElementById('search-field').value = '';
        document.getElementById('search-field').blur();
        document.getElementById('search').style.display = 'none';
    }
});
