// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {



       //button var
      var btn06 = $("#btn06");
      var btn07 = $("#btn07");
       var btn08 = $("#btn08");
       var btn09 = $("#btn09");
       var btn10 = $("#btn10");
       
       //input vars
      var input06 = $("#input06");
     var input07 = $("#input07");
     var input08 = $("#input08");
     var input09 = $("#input09");
     var input10 = $("#input10");
  
      
     
   // getting items from local storage
     var getInput06 = localStorage.getItem("event06am");
     console.log("local storage:", getInput06);
       input06.text(getInput06);

       var getInput07 = localStorage.getItem("event07am");
       console.log("local storage:", getInput07);
         input07.text(getInput07);

         var getInput08 = localStorage.getItem("event08am");
         console.log("local storage:", getInput08);
           input08.text(getInput08);
  
         var getInput09 = localStorage.getItem("event09am");
         console.log("local storage:", getInput09);
           input09.text(getInput09);

         var getInput10 = localStorage.getItem("event10am");
         console.log("local storage:", getInput10);
           input10.text(getInput10);
  
    

    // button functions to store item
   // 6 am button
       btn06.on('click', store06);
       
       function store06(){
      console.log("Name:", input06.val());
      localStorage.setItem("event06am",input06.val())
       };
        // 7 am button
        btn07.on('click', store07);
            
        function store07(){
        console.log("Name:", input07.val());
        localStorage.setItem("event07am",input07.val())
        };

         // 8 am button
         btn08.on('click', store08);
            
         function store08(){
         console.log("Name:", input08.val());
         localStorage.setItem("event08am",input08.val())
         };

         // 9 am button
         btn09.on('click', store09);
            
         function store09(){
         console.log("Name:", input09.val());
         localStorage.setItem("event09am",input09.val())
         };

         // 10 am button
         btn10.on('click', store10);
            
         function store10(){
         console.log("Name:", input10.val());
         localStorage.setItem("event10am",input10.val())
         };
                    
  // setting background color of inputfield
    $("#input06").css("background", "#d3d3d3");

    // getting and output of date

    let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});

    $("#currentDay").text(now);
console.log(now)



    //console.log("yes");
    //alert("jquery loaded");
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  