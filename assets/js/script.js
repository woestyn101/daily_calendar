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
       var btn11 = $("#btn11");
       var btn12 = $("#btn12");
       var btn1 = $("#btn1");
       var btn2 = $("#btn2");
       var btn3 = $("#btn3");
       var btn4 = $("#btn4");
       var btn5 = $("#btn5");
       var btn6pm = $("#btn6pm");
       
       //input vars
      var input06 = $("#input06");
     var input07 = $("#input07");
     var input08 = $("#input08");
     var input09 = $("#input09");
     var input10 = $("#input10");
     var input11 = $("#input11");
     var input12 = $("#input12");
     var input1 = $("#input1");
     var input2 = $("#input2");
     var input3 = $("#input3");
     var input4 = $("#input4");
     var input5 = $("#input5");
     var input6pm = $("#input6pm");
  
      
     
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

         var getInput11 = localStorage.getItem("event11am");
         console.log("local storage:", getInput11);
           input11.text(getInput11);

         var getInput12 = localStorage.getItem("event12pm");
         console.log("local storage:", getInput12);
           input12.text(getInput12);

         var getInput1 = localStorage.getItem("event1pm");
         console.log("local storage:", getInput1);
           input1.text(getInput1);

         var getInput2 = localStorage.getItem("event2pm");
         console.log("local storage:", getInput2);
           input2.text(getInput2);

         var getInput3 = localStorage.getItem("event3pm");
         console.log("local storage:", getInput3);
           input3.text(getInput3);

         var getInput4 = localStorage.getItem("event4pm");
         console.log("local storage:", getInput4);
           input4.text(getInput4);

         var getInput5 = localStorage.getItem("event5pm");
         console.log("local storage:", getInput5);
           input5.text(getInput5);

         var getInput6pm = localStorage.getItem("event6pm");
         console.log("local storage:", getInput6pm);
           input6pm.text(getInput6pm);
  
    

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

          // 11 am button
          btn11.on('click', store11);

         function store11(){
         console.log("Name:", input11.val());
         localStorage.setItem("event11am",input11.val())
         };

          // 12 pm button
          btn12.on('click', store12);

         function store12(){
         console.log("Name:", input12.val());
         localStorage.setItem("event12pm",input12.val())
         };

          // 1 pm button
          btn1.on('click', store1);

         function store1(){
         console.log("Name:", input1.val());
         localStorage.setItem("event1pm",input1.val())
         };

          // 2 pm button
          btn2.on('click', store2);

         function store2(){
         console.log("Name:", input2.val());
         localStorage.setItem("event2pm",input2.val())
         };

          // 3 pm button
          btn3.on('click', store3);

         function store3(){
         console.log("Name:", input3.val());
         localStorage.setItem("event3pm",input3.val())
         };

          // 4 pm button
          btn4.on('click', store4);

         function store4(){
         console.log("Name:", input4.val());
         localStorage.setItem("event4pm",input4.val())
         };

          // 5 pm button
          btn5.on('click', store5);

         function store5(){
         console.log("Name:", input5.val());
         localStorage.setItem("event5pm",input5.val())
         };

          // 6 pm button
          btn6pm.on('click', store6pm);

         function store6pm(){
         console.log("Name:", input6pm.val());
         localStorage.setItem("event6pm",input6pm.val())
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
  