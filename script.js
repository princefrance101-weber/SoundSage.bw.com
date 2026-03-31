// 📧 Open Email
function sendEmail() {
    window.location.href = "mailto:soundsageaudiobw@gmail.com";
}

// 📞 Make Phone Call
function makeCall() {
    window.location.href = "tel:+26777730365";
}

// 💬 Open WhatsApp
function openWhatsApp() {
    let phone = "26777730365";
    let message = "Hello, I'm interested in your car audio products!";
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

// 📘 Open Facebook
function openFacebook() {
    window.open("https://facebook.com/", "_blank"); // 🔁 Replace with your real page link
}
// ORDER PRODUCT VIA WHATSAPP
function orderProduct(productName) {
    let phone = "26777730365";
    let message = "Hello, I want to buy: " + productName;
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
