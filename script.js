// 🔧 Replace this with your actual Web App URL
const WEB_APP_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("expense-form");

    if (!form) {
        console.error("Form with ID 'expense-form' not found.");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Collect form data
        const formData = {
            date: document.getElementById("date").value,
            name: document.getElementById("name").value,
            amount: document.getElementById("amount").value,
            description: document.getElementById("description").value
        };

        try {
            // Send data to Google Apps Script
            await fetch(WEB_APP_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            // Confirmation
            alert("Expense saved successfully");

            // Redirect to history page
            window.location.href = "history.html";

        } catch (error) {
            console.error("Error:", error);
            alert("There was an error saving the expense.");
        }
    });
});
