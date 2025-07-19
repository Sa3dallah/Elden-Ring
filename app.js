let btnOpen = document.getElementById("open");
let navbar = document.getElementById("navbar");
let brger1 = document.getElementById("brger1");
let brger2 = document.getElementById("brger2");
let brger3 = document.getElementById("brger3");

btnOpen.onclick = function () {
  navbar.classList.toggle("hide");
  brger1.classList.toggle("brger1-btn");
  brger3.classList.toggle("brger3-btn");
  brger2.classList.toggle("brger2-btn");
};

window.addEventListener("scroll", function () {
  const img = document.querySelector(".land-img");
  const scrollY = window.scrollY;
  const newTop = 68 + scrollY * 0.2; // زود أو قلّل السرعة
  img.style.top = `${Math.min(newTop, 100)}%`;
});

let awordVid = document.getElementById("aword-vid");
let playIcon = document.getElementById("play-icon");
playIcon.onclick = function () {
  if (awordVid.requestFullscreen) {
    awordVid.requestFullscreen();
  } else if (awordVid.webkitRequestFullscreen) {
    awordVid.webkitRequestFullscreen();
  } else if (awordVid.msRequestFullscreen) {
    awordVid.msRequestFullscreen();
  }
  awordVid.play();
  awordVid.muted = false;
};
document.addEventListener("fullscreenchange", function () {
  if (!document.fullscreenElement) {
    awordVid.muted = true;
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

const sliderWrapper = document.querySelector(".classes-slider-wrapper");
const leftArrow = document.querySelector(".classes-arrow img:first-child");
const rightArrow = document.querySelector(".classes-arrow img:last-child");

let currentTranslate = 0;

const cardWidth = 390;
const gap = 50;
const totalCards = sliderWrapper.querySelectorAll(".class-box").length;

// احسب الطول الكلي للـ slider
const totalWidth = totalCards * (cardWidth + gap);

const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;

leftArrow.addEventListener("click", () => {
  currentTranslate += cardWidth + gap;
  if (currentTranslate > 0) {
    currentTranslate = -(totalWidth - containerWidth);
  }
  sliderWrapper.style.transform = `translateX(${currentTranslate}px)`;
});

rightArrow.addEventListener("click", () => {
  currentTranslate -= cardWidth + gap;
  if (Math.abs(currentTranslate) > totalWidth - containerWidth) {
    currentTranslate = 0;
  }
  sliderWrapper.style.transform = `translateX(${currentTranslate}px)`;
});
// const total = bossBoxes.length;
// const visibleCount = 4;
// let currentIndex = 0;
// let interval;

// // إنشاء الدواير
// for (let i = 0; i < total; i++) {
//   const dot = document.createElement("div");
//   dot.addEventListener("click", () => {
//     currentIndex = i;
//     scrollToBox(currentIndex);
//   });
//   circlesContainer.appendChild(dot);
// }

// const dots = circlesContainer.querySelectorAll("div:not(.active-bar)");

// function scrollToBox(index) {
//   const box = bossBoxes[index];
//   if (!box) return;
//   boxesContainer.scrollTo({
//     left: box.offsetLeft,
//     behavior: "smooth",
//   });
//   updateActiveBar(index);
// }

// function updateActiveBar(startIndex) {
//   const endIndex = Math.min(startIndex + visibleCount - 1, dots.length - 1);
//   const firstDot = dots[startIndex];
//   const lastDot = dots[endIndex];

//   if (!firstDot || !lastDot) return;

//   const containerRect = circlesContainer.getBoundingClientRect();
//   const left = firstDot.getBoundingClientRect().left - containerRect.left;
//   const width =
//     lastDot.getBoundingClientRect().right -
//     firstDot.getBoundingClientRect().left;

//   activeBar.style.left = `${left}px`;
//   activeBar.style.width = `${width}px`;
// }

// function autoScroll() {
//   scrollToBox(currentIndex);
//   currentIndex++;
//   if (currentIndex > total - visibleCount) {
//     currentIndex = 0;
//   }
// }

// function startAutoScroll() {
//   interval = setInterval(autoScroll, 5000);
// }

// function stopAutoScroll() {
//   clearInterval(interval);
// }

// // بدء التشغيل
// scrollToBox(currentIndex);
// startAutoScroll();

// // scroll listener عشان الدواير تتحدث عند السحب
// boxesContainer.addEventListener("scroll", () => {
//   const scrollLeft = boxesContainer.scrollLeft;
//   const boxWidth = bossBoxes[0].offsetWidth + 20; // 20 هي الـ gap
//   const index = Math.round(scrollLeft / boxWidth);

//   if (index !== currentIndex) {
//     currentIndex = index;
//     updateActiveBar(currentIndex);
//   }
// });

// // drag بالماوس
// let isDown = false;
// let startX, scrollLeft;

// boxesContainer.addEventListener("mousedown", (e) => {
//   isDown = true;
//   startX = e.pageX - boxesContainer.offsetLeft;
//   scrollLeft = boxesContainer.scrollLeft;
//   boxesContainer.classList.add("dragging");
//   stopAutoScroll();
// });

// boxesContainer.addEventListener("mouseleave", () => {
//   isDown = false;
//   boxesContainer.classList.remove("dragging");
//   startAutoScroll();
// });

// boxesContainer.addEventListener("mouseup", () => {
//   isDown = false;
//   boxesContainer.classList.remove("dragging");
//   startAutoScroll();
// });

// boxesContainer.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - boxesContainer.offsetLeft;
//   const walk = (x - startX) * 1.5;
//   boxesContainer.scrollLeft = scrollLeft - walk;
// });

// // touch على الموبايل
// let touchStartX = 0;

// boxesContainer.addEventListener("touchstart", (e) => {
//   stopAutoScroll();
//   touchStartX = e.touches[0].clientX;
// });

// boxesContainer.addEventListener("touchend", (e) => {
//   startAutoScroll();
//   const diff = touchStartX - e.changedTouches[0].clientX;
//   if (diff > 50) {
//     currentIndex++;
//     if (currentIndex > total - visibleCount) currentIndex = 0;
//     scrollToBox(currentIndex);
//   } else if (diff < -50) {
//     currentIndex--;
//     if (currentIndex < 0) currentIndex = total - visibleCount;
//     scrollToBox(currentIndex);
//   }
// });
window.addEventListener("beforeunload", function () {
  localStorage.setItem("scrollPosition", window.scrollY);
});

// أول ما الصفحة تفتح
window.addEventListener("load", function () {
  const scrollPos = localStorage.getItem("scrollPosition");
  if (scrollPos) {
    window.scrollTo(0, scrollPos);
  }
});

const leftBoxes = document.querySelectorAll(".left-box .content-box");
const rightBoxes = document.querySelectorAll(".right-box .content-box");

rightBoxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    // شيل active من كل عناصر الشمال
    leftBoxes.forEach((left) => left.classList.remove("active"));
    // ضيف active للعنصر المناسب
    leftBoxes[index].classList.add("active");

    // شيل active من اليمين كله
    rightBoxes.forEach((right) => right.classList.remove("active"));
    // ضيف active للي دست عليه
    box.classList.add("active");
  });
});

const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const textBoxes = document.querySelectorAll(".text-box");

  let current = document.querySelector(".text-box.active");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      const next = document.querySelector(
        `.text-box[data-content="${target}"]`
      );

      if (next === current) return;

      // ✅ 1. تحديث الألوان بإضافة وإزالة كلاس active
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // ✅ 2. إعداد حركة السلايد بين الصناديق
      const currentIndex = [...textBoxes].indexOf(current);
      const nextIndex = [...textBoxes].indexOf(next);

      textBoxes.forEach((box) => {
        box.classList.remove("active", "slide-left", "slide-right");
      });

      if (nextIndex > currentIndex) {
        current.classList.add("slide-left");
      } else {
        current.classList.add("slide-right");
      }

      next.classList.add("active");
      current = next;
    });
  });
}
