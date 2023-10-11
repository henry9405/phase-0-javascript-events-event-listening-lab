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

  
