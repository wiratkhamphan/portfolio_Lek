
import { API_URL } from './config.js';

window.sendMessage = function () {
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    $.ajax({
        url: API_URL + "/Message", 
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ name, email, message }),
        success: function (response) {
            alert("Message sent successfully!");
            console.log(response);
        },
        error: function (error) {
            alert("Failed to send message.");
            console.log(error);
        }
    });
};
