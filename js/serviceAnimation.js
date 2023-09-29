const newObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation");
    } else {
      // entry.target.classList.remove("show-animation");
    }
  });
});

const hiddenEl = document.querySelectorAll(".hidden-animation");

hiddenEl.forEach((el) => newObserver.observe(el));

const newBubbleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation-bubble");
    } else {
      // entry.target.classList.remove("show-animation-bubble");
    }
  });
});

const hiddenBubbleEl = document.querySelectorAll(".hidden-animation-bubble");

hiddenBubbleEl.forEach((el) => newBubbleObserver.observe(el));

const newLightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation_light");
    } else {
      // entry.target.classList.remove("show-animation_light");
    }
  });
});

const hiddenLightEl = document.querySelectorAll(".hidden-animation_light");
hiddenLightEl.forEach((el) => newLightObserver.observe(el));

const newReverseLightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-reverse-animation_light");
    } else {
      // entry.target.classList.remove("show-reverse-animation_light");
    }
  });
});

const hiddenReverseLightEl = document.querySelectorAll(
  ".hidden-reverse-animation_light"
);

hiddenReverseLightEl.forEach((el) => newReverseLightObserver.observe(el));
