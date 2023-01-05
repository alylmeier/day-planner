var hours = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    
  ]
  
function getDate(){
 var currentDate = dayjs().format('MMMM D, YYYY');
 $("#currentDay").text(currentDate);
}

getDate();

hours.forEach(function(thisHour) {
    // creates timeblocks row
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    // creates time field
    var hourField = $("<div>")
        .text((`${thisHour.hour}${thisHour.meridiem}`))
        .attr({
            "class": "col-md-2 hour"
    });
    var hourPlan = $("<div>")
    .attr({
        "class": "col-md-9 description p-0"
    });
var planData = $("<textarea>");
hourPlan.append(planData);
planData.attr("id", thisHour.id);
if (thisHour.time < dayjs().format("HH")) {
    planData.attr ({
        "class": "past", 
    })
} else if (thisHour.time === dayjs().format("HH")) {
    planData.attr({
        "class": "present"
    })
} else if (thisHour.time > dayjs().format("HH")) {
    planData.attr({
        "class": "future"
    })
}
var saveButton = $("<i class='far fa-save fa-lg'></i>")
var savePlan = $("<button>")
    .attr({
        "class": "col-md-1 saveBtn"
});
savePlan.append(saveButton);
hourRow.append(hourField, hourPlan, savePlan);
})

// loads any existing localstorage data after components created
init();




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    hours[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();

    function saveReminders() {
        localStorage.setItem("hours", JSON.stringify(hours));
    }
    
    // sets any data in localStorage to the view
    function displayReminders() {
        hours.forEach(function (_thisHour) {
            $(`#${_thisHour.id}`).val(_thisHour.reminder);
        })
    }
    
    // sets any existing localStorage data to the view if it exists
    function init() {
        var storedDay = JSON.parse(localStorage.getItem("hours"));
    
        if (storedDay) {
            hours = storedDay;
        }
    
        saveReminders();
        displayReminders();
    }
})

 
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?




    // creates schdeduler data
  

    // creates save button
  



});







