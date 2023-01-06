var hours = JSON.parse(localStorage.getItem("hours")) || [
    {
        id: "0",
        hour: "9 AM",
        time: "09",
        reminder: ""
    },
    {
        id: "1",
        hour: "10 AM",
        time: "10",
        reminder: ""
    },
    {
        id: "2",
        hour: "11 AM",
        time: "11",
        reminder: ""
    },
    {
        id: "3",
        hour: "12 PM",
        time: "12",
        reminder: ""
    },
    {
        id: "4",
        hour: "1 PM",
        time: "13",
        reminder: ""
    },
    {
        id: "5",
        hour: "2 PM",
        time: "14",
        reminder: ""
    },
    {
        id: "6",
        hour: "3 PM",
        time: "15",
        reminder: ""
    },
    {
        id: "7",
        hour: "4 PM",
        time: "16",
        reminder: ""
    },
    {
        id: "8",
        hour: "5 PM",
        time: "17",
        reminder: ""
    },
    
  ]
  
function getDate(){
 var currentDate = dayjs().format('MMMM D, YYYY');
 $("#currentDay").text(currentDate);
}

getDate();

hours.forEach(function(thisHour) {
    // creates rows for hours
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    // creates box w time in it
    var hourField = $("<div>")
        .text((`${thisHour.hour}`))
        .attr({
            "class": "col-md-2 hour"
    });
    var hourPlan = $("<textarea>")
    .attr({
        "class": "col-md-5 description p-0"
    });
 //this color codes the hours   
//var planData = $("<textarea>");
//hourPlan.append(planData);
hourPlan.attr("id", thisHour.id);
if (thisHour.time < dayjs().format("HH")) {
    hourPlan.addClass ("past")
} else if (thisHour.time === dayjs().format("HH")) {
    hourPlan.addClass({
        "class": "present"
    })
} else if (thisHour.time > dayjs().format("HH")) {
    hourPlan.addClass("future")
}
var saveButton = $("<i class='far fa-save fa-lg'></i>");
var savePlan = $("<button>")
    .attr({
        "class": "col-md-1 saveBtn"
});
savePlan.append(saveButton);
hourRow.append(hourField, hourPlan, savePlan);
})





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  function displayTask() {
    console.log(hours)
    hours.forEach(function (_thisHour) { 
        console.log(_thisHour.id, _thisHour)
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

  //saveButton.addEventListener('click', function(event){
    //in the below line, you had click in ""in the parenthese w function but that was saying save button was undefined
  $(".saveBtn").click(function(event) {
    event.preventDefault();
    
    var saveIndex = $(this).siblings(".description").attr("id");
    
    hours[saveIndex].reminder = $(this).siblings(".description").val();
    


    function saveTask() {
        localStorage.setItem("hours", JSON.stringify(hours));
    }
    
    // sets any data in localStorage to the view
    
    saveTask();
    
    
   

})
displayTask();

 
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

 

  



});







