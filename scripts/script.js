const aboutImg = document.querySelector(".about_us .flex_sec2_main img");
const aboutDesc = document.querySelector(".about_us .discription_about_us");
const aboutSection = document.querySelector(".about_us");

if (aboutSection && aboutImg && aboutDesc) {
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutImg.classList.add("animate");
          aboutDesc.classList.add("animate");
          aboutObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 },
  );

  aboutObserver.observe(aboutSection);
}

const servicesSection = document.querySelector(".our_services");
const servicesDesc = document.querySelector(".our_services_discription");
const servicesBoxes = document.querySelectorAll(".boxs_skill .box_child");

if (servicesSection) {
  const servicesObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (servicesDesc) servicesDesc.classList.add("animate");
          servicesBoxes.forEach((box) => box.classList.add("animate"));
          servicesObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 },
  );

  servicesObserver.observe(servicesSection);
}

const testimonialSection = document.querySelector(".testimonials");
const testTitle = document.querySelector(".testimonials .test_discription");
const testCard = document.querySelector(".testimonials .box_pepple");
const testImgs = document.querySelectorAll(
  ".testimonials .random_img .img_prof, .testimonials .random_img2 .img_prof",
);

if (testimonialSection) {
  const testObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (testTitle) testTitle.classList.add("animate");
          if (testCard) testCard.classList.add("animate");
          testImgs.forEach((img) => img.classList.add("animate"));
          testObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 },
  );

  testObserver.observe(testimonialSection);
}

const contactSection = document.querySelector(".contact_us");
const contactDesc = document.querySelector(".contact_us .discription_contact");
const contactForm = document.querySelector(".contact_us .form_contact");

if (contactSection) {
  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactSection.classList.add("animate");
          if (contactDesc) contactDesc.classList.add("animate");
          if (contactForm) contactForm.classList.add("animate");
          contactObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 },
  );
  contactObserver.observe(contactSection);
}

let meno_h = document.getElementById("meno_h");
let op_and_menu = document.getElementById("op_and_menu");
let btn_close = document.getElementById("close");

if (meno_h && op_and_menu && btn_close) {
  meno_h.addEventListener("click", () => {
    op_and_menu.classList.add("show_menu");

    document.body.classList.add("no_scoroll");

    document.documentElement.classList.add("no_scoroll");
  });

  btn_close.addEventListener("click", () => {
    const menoBox = document.querySelector(".open_box_meno");
    const ropBox = document.querySelector(".rop");

    menoBox.classList.add("closing");
    ropBox.classList.add("closing");

    setTimeout(() => {
      op_and_menu.classList.remove("show_menu");
      menoBox.classList.remove("closing");
      ropBox.classList.remove("closing");
      document.body.classList.remove("no_scoroll");
      document.documentElement.classList.remove("no_scoroll");
    }, 400);
  });
}
const tipEl = document.createElement("div");
tipEl.className = "js-tooltip";
document.body.appendChild(tipEl);

document.querySelectorAll(".has-tip").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    tipEl.textContent = el.getAttribute("data-tip");
    tipEl.classList.add("show");
  });

  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    tipEl.style.left = rect.left + rect.width / 2 - tipEl.offsetWidth / 2 + "px";
    tipEl.style.top = rect.top - tipEl.offsetHeight + 80 + "px";
  });

  el.addEventListener("mouseleave", () => {
    tipEl.classList.remove("show");
  });
   
   
});
window.addEventListener("scroll", function () {
    tipEl.classList.remove("show");

});
