//your JS code here. If required.
function btnclick() {
	  let counterElement = document.getElementById("counter"); // Get the counter element

        document.getElementById("incrementBtn").addEventListener("click", function() {
            let currentValue = parseInt(counterElement.textContent); // Get current counter value
            alert("Current value before increment: " + currentValue); // Show alert with the current value
            counterElement.textContent = currentValue + 1; // Update the counter text
        });
		
	
	
	
}