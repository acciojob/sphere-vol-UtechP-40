function volume_sphere(event) {
    // Prevent form from submitting and refreshing the page
    event.preventDefault();

    // Get the radius input value from the form
    let r = document.getElementById("radius").value;

    // Convert input to a number
    let radius = parseFloat(r);

    // Validate if input is a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = 'NaN'; // If invalid, show NaN
    } else {
        // Calculate the volume of the sphere
        let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        
        // Round the volume to 4 decimal places
        document.getElementById("volume").value = volume.toFixed(4);
    }
}

// Attach the function to the form's submit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
