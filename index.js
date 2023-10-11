//function addingEventListener() {
//}


function addingEventListener() {
    // Get a reference to the HTML element with the id "myButton"
    const input = document.getElementById('input');
  
    // Define a function to be called when the event is triggered
    function myEventListener () {
      alert('I was clicked');
    };
    input.addEventListener('click', myEventListener);
    }
  
    // Use addEventListener to bind the event listener to the element
  
  
  // Call the addingEventListener function to set up the event listener

  