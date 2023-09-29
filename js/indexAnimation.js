const newObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation");
    } else {
      entry.target.classList.remove("show-animation");
    }
  });
});

const hiddenEl = document.querySelectorAll(".hidden-animation");

hiddenEl.forEach((el) => newObserver.observe(el));

const newSlideObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation-slide");
    } else {
      entry.target.classList.remove("show-animation-slide");
    }
  });
});

const hiddenSlideEl = document.querySelectorAll(".hidden-animation-slide");

hiddenSlideEl.forEach((el) => newSlideObserver.observe(el));

// observer.observe();

const newBubbleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation-bubble");
    } else {
      entry.target.classList.remove("show-animation-bubble");
    }
  });
});

const hiddenBubbleEl = document.querySelectorAll(".hidden-animation-bubble");

hiddenBubbleEl.forEach((el) => newBubbleObserver.observe(el));

const percentageNumber1 = document.getElementById("percentageNumber1");
const percentageContainer1 = document.getElementById("percentageContainer1");
const percentageNumber2 = document.getElementById("percentageNumber2");
const percentageContainer2 = document.getElementById("percentageContainer2");
const percentageNumber3 = document.getElementById("percentageNumber3");
const percentageContainer3 = document.getElementById("percentageContainer3");
let currentPercentage = 0;

function increasePercentage() {
  if (currentPercentage <= 92) {
    percentageNumber1.innerHTML = `${currentPercentage}<span class="percent-sign">%</span>`;
    percentageNumber2.innerHTML = `${currentPercentage}<span class="percent-sign">%</span>`;
  }
  if (currentPercentage < 98) {
    currentPercentage = currentPercentage + 2;
    percentageNumber3.innerHTML = `${currentPercentage}<span class="percent-sign">%</span>`;
  }
  setTimeout(increasePercentage, 14);
}
const increaseObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      increasePercentage();
    }
  },
  { threshold: 0.5 } // Adjust the threshold as needed
);

increaseObserver.observe(percentageContainer3);

function changeSectionBackgroundColor(sectionEl) {
  const colors = ["#b5f145", "#b66bff"];
  let currentIndex = 0;

  function getNextColor() {
    const color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    return color;
  }

  function applyBackgroundColor() {
    sectionEl.style.backgroundColor = getNextColor();
  }

  applyBackgroundColor();
  setInterval(applyBackgroundColor, 500); // Run every 2 seconds
}

const sectionElement = document.getElementById("section-information"); // Replace with the actual ID of your section
changeSectionBackgroundColor(sectionElement);

const newLightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation_light");
    } else {
      entry.target.classList.remove("show-animation_light");
    }
  });
});

const hiddenLightEl = document.querySelectorAll(".hidden-animation_light");
hiddenLightEl.forEach((el) => newLightObserver.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  const scrollElement0 = document.querySelector(".colors-change-0");
  const scrollElement1 = document.querySelector(".colors-change-1");
  const scrollElement2 = document.querySelector(".colors-change-2");
  const scrollElement3 = document.querySelector(".colors-change-3");
  const scrollElement4 = document.querySelector(".colors-change-4");
  const scrollElement5 = document.querySelector(".colors-change-5");
  const scrollElement6 = document.querySelector(".colors-change-6");
  const scrollElement7 = document.querySelector(".colors-change-7");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 3800) {
      scrollElement0.classList.add("scrolled");
    } else {
      scrollElement0.classList.remove("scrolled");
    }
    if (window.scrollY >= 3900) {
      scrollElement1.classList.add("scrolled1");
    } else {
      scrollElement1.classList.remove("scrolled1");
    }
    if (window.scrollY >= 4000) {
      scrollElement2.classList.add("scrolled2");
    } else {
      scrollElement2.classList.remove("scrolled2");
    }
    if (window.scrollY >= 4100) {
      scrollElement3.classList.add("scrolled3");
    } else {
      scrollElement3.classList.remove("scrolled3");
    }
    if (window.scrollY >= 4200) {
      scrollElement4.classList.add("scrolled4");
    } else {
      scrollElement4.classList.remove("scrolled4");
    }
    if (window.scrollY >= 4300) {
      scrollElement5.classList.add("scrolled5");
    } else {
      scrollElement5.classList.remove("scrolled5");
    }
    if (window.scrollY >= 4400) {
      scrollElement6.classList.add("scrolled6");
    } else {
      scrollElement6.classList.remove("scrolled6");
    }
    if (window.scrollY >= 4500) {
      scrollElement7.classList.add("scrolled7");
    } else {
      scrollElement7.classList.remove("scrolled7");
    }
  });
});
