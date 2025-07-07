<script>
document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default form submission

    const inputs = document.querySelectorAll(".input-div input");
    let valid = true;

    inputs.forEach((input, index) => {
        // Clear previous red border
        input.style.borderBottom = "1.5px solid #DCD7D7";

        // Check for required fields (name and email)
        if ((index === 0 || index === 2) && input.value.trim() === "") {
            input.style.borderBottom = "2px solid red";
            valid = false;
        }
    });

    if (valid) {
        alert("Form submitted successfully!");
    } else {
        alert("Please fill in all required fields.");
    }
});
</script>