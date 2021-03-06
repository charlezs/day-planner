//make save button save to save to local storage
$(".saveBtn").on("click", function(){
   
    var planner = $(this).siblings(".planner").val();
    var time = $(this).parent().attr("id");
 
    localStorage.setItem(time, planner);
})
 
//set up time
function startPlanner() {
    $("#todaysDate").text(moment().format("dddd, MMMM YYYY"));
 
    $(".time-block").each(function(){
        let id = $(this).attr("id");
        var planner = localStorage.getItem(id);
 
        if (planner !== null){
            $(this).children(".planner").val(planner);
        }
    })
}
startPlanner();
 
//set up time to match color backgrounds
function timeTrack() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));
 
        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}
 
//state hr to Ids
const hour8 = $("#8");
const hour9 = $("#9");
const hour10 = $("#10");
const hour11 = $("#11");
const hour12 = $("#12");
const hour1 = $("#13");
const hour2 = $("#14");
const hour3 = $("#15");
const hour4 = $("#16");
const hour5 = $("#17");
 
//set time to = moment
var time = moment ();
 
timeTrack();
