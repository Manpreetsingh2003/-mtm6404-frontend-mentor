document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const queryType = document.querySelector("input[name='query-type']:checked");
        const consent = document.getElementById("consent").checked;

        // Validation checks
        if (!firstName || !lastName || !email || !message) {
            alert("Please fill out all required fields.");
            return;
        }

        if (!queryType) {
            alert("Please select a query type.");
            return;
        }

        if (!consent) {
            alert("You must consent to being contacted by the team.");
            return;
        }

        // Form Data Object
        const formData = {
            firstName,
            lastName,
            email,
            queryType: queryType.value,
            message,
            consent
        };

        console.log("Form Submitted:", formData);

        // Simulating form submission
        alert("Form submitted successfully!");

        // Optionally, clear form after submission
        form.reset();
    });
});
