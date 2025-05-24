document.addEventListener("DOMContentLoaded", function () {
    const replyButton = document.querySelector(".reply-button");
    const otpButton = document.querySelector(".otp-button");
  
    replyButton.addEventListener("click", function () {
      const reply = prompt("Type your reply to Professor xyz:");
      if (reply) {
        alert("Reply sent:\n" + reply);
      } else {
        alert("Reply canceled.");
      }
    });
  
    otpButton.addEventListener("click", function () {
      const generatedOTP = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
      alert("OTP sent: " + generatedOTP);
    });
  });