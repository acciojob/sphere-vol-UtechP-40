function volume_sphere() {
    //Write your code here
    let r = document.getElementById("radius").value;
    document.getElementById("volume").value = 4/3*Math.PI*r**3;
  
} 
//Calculate the volume of the sphere using the formula: [ V = \frac{4}{3} \pi r^3 ]
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
