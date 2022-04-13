let btn = document.querySelector(".btn");
btn.addEventListener("mouseover", function () {
    this.innerHTML = "Party Time";
});
btn.addEventListener("mouseout", function () {
    this.innerHTML = "Set Alarm";
});
function time() {

    var hours = document.getElementById("hours")
    var minutes = document.getElementById("minutes")
    var seconds = document.getElementById("seconds")
    var ampm = document.getElementById("ampm")


    var time = new Date()

    var hrs = time.getHours()
    var mins = time.getMinutes()
    var secs = time.getSeconds()
    var am_pm = "AM"

    if (hrs == 0) {

        hrs = 12 //11:59AM -->00:00 _-->12:00
    }
    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM"


    } //24 hrs format into 12hrs format

    if (hrs < 10) {

        hrs = "0" + hrs
    }
    if (mins < 10) {

        mins = "0" + mins
    }

    if (secs < 10) {

        secs = "0" + secs
    }

    hours.innerText = hrs
    minutes.innerText = mins
    seconds.innerText = secs
    ampm.innerText = am_pm

}

var oneseconds = 1000

setInterval(time, oneseconds)


//setting time:-


function setTime() {
    const date = new Date();
    let hour = date.getHours();
    let wakeup = document.getElementById("wakeup");
    let lunch = document.getElementById("lunch");
    let nap = document.getElementById("nap");
    let night = document.getElementById("night");

    if (parseInt(wakeup.value) === hour) {
        document.getElementById("timeMessage").innerText = "grab some healthy breakfast!!";
        document.getElementById("clock-image").src = "./morning.svg";
    }
    if (parseInt(lunch.value) === hour) {
        document.getElementById("timeMessage").innerText = "it's time to have some lunch!!";
        document.getElementById("clock-image").src = "./lunch_time.svg";
    }
    if (parseInt(nap.value) === hour) {
        document.getElementById("timeMessage").innerText = "it's nap time!!";
        document.getElementById("clock-image").src = "./nap_time.svg";
    }
    if (parseInt(night.value) === hour) {
        document.getElementById("timeMessage").innerText = "Good night! Have a nice sleep";
        document.getElementById("clock-image").src = "./goodnight_image.svg";
    }
    let timing = document.getElementsByClassName("timing");
    timing[0].innerText = wakeup.options[wakeup.selectedIndex].text;
    timing[1].innerText = lunch.options[lunch.selectedIndex].text;
    timing[2].innerText = nap.options[nap.selectedIndex].text;
    timing[3].innerText = night.options[night.selectedIndex].text;
}
//document.getElementById("submit").addEventListener("click", setTime, false);//


(function setMessage() {
    if (hour <= 12) {
        document.getElementById("form-message").innerHTML = "Good Morning!";
    }
    if (hour >= 12 && hour < 16) {
        document.getElementById("form-message").innerHTML = "Good Afternoon!";
    }
    if (hour >= 16 && hour < 19) {
        document.getElementById("form-message").innerHTML = "Good Evening!";
    }
    if (hour >= 19 && hour <= 23) {
        document.getElementById("form-message").innerHTML = "Good Night!";
    }
})();
