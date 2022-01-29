import $ from 'jquery-3.6.0.min.js';

let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
/* document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_left").innerHTML = user_time; */
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);



/*     let time = sessionStorage.getItem('time_left');     // get the time left from session storage
let name = sessionStorage.getItem('user_name');    */  // get the name from session storage

$.ajax({
    url: "./scorePost.php",
    type: "POST",
    data: sessionStorage.getItem("points"),
    beforeSend: function(){
        console.log(data);
        console.log("data sent");
    },
    success: function(data){
        console.log(data);
    }

})
