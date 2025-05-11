

    function showMessage() {
      // Hide the button
      document.querySelector(".button").style.display = "none";

      // Show "Waiting..." message
      document.getElementById("output").textContent = "";

      // After 5 seconds, show the final message
      setTimeout(function () {
        output.innerHTML = `
        <p style="font-size: 24px; color: #e91e63;"> Happy Mother's Day!</p>
        <img src="367677cb619f38c0ab6c6362cd31de9b.jpg" alt="Happy Mother's Day" style="width: 300px; border-radius: 20px;">
         <p style="font-size: 24px; color: #e91e63;">កូនសូមជូនពរអោយម៉ាក់​សុខភាពល្អ​ មុខដូចក្មេង១៨​ សម្រស់កាន់តែស្អាត</p>
      `
      }, 5000);
    }