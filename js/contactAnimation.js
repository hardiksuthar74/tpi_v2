const newBubbleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation");
    }
  });
});

const hiddenBubbleEl = document.querySelectorAll(".hidden-animation");

hiddenBubbleEl.forEach((el) => newBubbleObserver.observe(el));
