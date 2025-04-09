function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    document.querySelector("form").reset();
    document.getElementById("confirmation").style.display = "block";
    setTimeout(() => {
      document.getElementById("confirmation").style.display = "none";
    }, 3000);
  }
  