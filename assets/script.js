const scrollTop = document.getElementById("scrollTop");

scrollTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

