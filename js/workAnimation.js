const newBubbleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation-bubble");
    }
  });
});

const hiddenBubbleEl = document.querySelectorAll(".hidden-animation-bubble");

hiddenBubbleEl.forEach((el) => newBubbleObserver.observe(el));
