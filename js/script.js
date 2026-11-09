
// ======================================
// UMAYAN - WEBSITE FUNCTIONALITY
// ======================================

// Replace this with the actual business
// WhatsApp number, including country code.
// India example: 91 followed by 10 digits.
// Do not include + or spaces.

const WHATSAPP_NUMBER = "917779916300";


// Get the enquiry form
const enquiryForm = document.getElementById("enquiry-form");


// Listen for form submission
enquiryForm.addEventListener("submit", function (event) {

    // Prevent normal page refresh
    event.preventDefault();

    // Collect customer information
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eventType = document.getElementById("event").value;
    const guests = document.getElementById("guests").value;
    const eventDate = document.getElementById("event-date").value;
    const requirements = document.getElementById("requirements").value.trim();

    // Validate phone number
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Check WhatsApp configuration
    if (!/^91[0-9]{10}$/.test(WHATSAPP_NUMBER)) {
        alert("The business WhatsApp number has not been configured yet.");
        return;
    }

    // Create enquiry message
    const message = `
Hello Umayan Marriage & Banquet Hall!

I would like to enquire about hosting an event.

Name: ${name}
Phone: ${phone}
Event Type: ${eventType}
Approximate Guests: ${guests}
Preferred Event Date: ${eventDate || "Not specified"}
Additional Requirements: ${requirements || "None"}

Please share further details.

Thank you!
    `;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);

    // Generate WhatsApp URL
    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

});


// Display a welcome message in browser console
console.log("Umayan website loaded successfully!");
