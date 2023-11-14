// Projects Detail
const projectDetails = [
  {
    title: "E-Commerce Aliexpress clone",
    subtitle: "Full Stack",
    description:
      "This is Web App that have client side E-commerce and Admin management dashboard. The App has ability to let user signup & login and order, payment, and setup delivery address. Admin dashboard let admin create & update items, check & track orders, update Banner ads. The app provides user's own Database.",
    stack:
      "Supabase (auth), Stripe (payment), Prisma, postgreSQL(database) Nuxt.js (Vuejs framwork) (framework-typescript), Netlify (deploy)",
    howToUse:
      "Users can easily signup or login with credentials or Google or Github account. Search items, add to cart, register delivery address, checkout with card payment",
    images: [
      "aliexpress-1.png",
      "aliexpress-2.png",
      "aliexpress-3.png",
      "aliexpress-4.png",
      "aliexpress-5.png",
      "aliexpress-6.png",
    ],
    url: "https://aliexpress-like.netlify.app/",
    onGoing: false,
  },
  {
    title: "E-Commerce with Admin",
    subtitle: "Full Stack",
    description:
      "This is Web App that have client side E-commerce and Admin management dashboard. The App has ability to let user signup & login and order, payment, and setup delivery address. Admin dashboard let admin create & update items, check & track orders, update Banner ads. The app provides user's own Database.",
    stack:
      "AWS (S3), Stripe (payment), Prisma, postgreSQL(database) Next.js-T3 (framework-typescript), Vercel (deploy)",
    howToUse:
      "Users can easily signup or login with credentials or Google account. Admin can login to dashboard with admin credencials (email: superadmin@email.com password: superadmin or email:admin@email.com password: admin).",
    images: [
      "E-Market.png",
      "E-Market-2.png",
      "E-Market-3.png",
      "E-Market-4.png",
      "E-Market-5.png",
      "E-Market-6.png",
    ],
    url: "https://e-commerce-t3.vercel.app/",
    onGoing: false,
  },
  {
    title: "Point Of Sale (POS) System",
    subtitle: "Full Stack",
    description:
      "This is Web App & Progressive Web App(PWA) that have Point of Sale(POS) system. The has ability to create transaction for customer's order, payment, assign to table, Cash up for closing a day, managing menu items and set up shop detail. Open up a new sales channel. Direct integration with the POS lets you process orders easily. The app provides user's own Database.",
    stack:
      "AWS (S3), Stripe (payment), Prisma(database), Next.js-T3 (framework-typescript), Vercel (deploy)",
    howToUse:
      "Admin can login to dashboard with admin credencials (email: superadmin@email.com password: superadmin or email:admin@email.com password: admin). All pages require authentication",
    images: [
      "pos-transaction.png",
      "pos-dashboard.png",
      "pos-payment.png",
      "pos-payment.png",
      "pos-setting.png",
    ],
    url: "https://pwa-pos.vercel.app/",
    onGoing: false,
  },
  {
    title: "Booking & online Order App",
    subtitle: "Full Stack",
    description:
      "This is E-commerce Web App that user can browse shopping online mall and order with payment system. It also has seperate admin dashboard with check bookings, paid order list, update opening hours, create promotion, manage user access and date, update menu items. The app provides user's own Database.",
    stack:
      "AWS (S3), Stripe (payment), Prisma(database), Next.js-T3 (framework-typescript), Vercel (deploy)",
    howToUse:
      "Customers can create account and be able to add watchlist & cart. Admin can login to dashboard with admin credencials (email: superadmin@email.com password: superadmin). Admin dashboard have ability to manage Banners (top, main, landing), Categories, Products, Delivery, Stocktakings, Special Deals and manage customers orders",
    images: [
      "project-Booking-App2.jpg",
      "restaurant-admin.png",
      "restaurant-admin-booking.png",
      "restaurant-admin-menu.png",
      "restaurant-admin-opening.png",
      "restaurant-admin-promotion.png",
      "restaurant-admin-table.png",
    ],
    url: "https://fc-restaurant-booking.netlify.app/",
    onGoing: false,
  },
  {
    title: "TradeMe Manager App",
    subtitle: "Full Stack",
    description:
      "Trademe-Manager provides the tool for Trademe Sellers. TradeMe-Manager uses all Trademe APIs, making it easy for you. Profile Authentication by API key Trademe-Manager is working on tmsandbox (dev Server) Server. Stacks .",
    stack:
      "Next.js (Framework) Tailwind (Styling) AlanAI (voice assistant) NodeMailer, Knex (Subscription) Netlify (Deploy) Auth1.0 (Authentication)",
    howToUse:
      "Login or Register with tmsandbox api key and manage your tradeMe listing",
    images: ["project-TradeMe-Manager.jpg"],
    url: "https://trademe-manager.netlify.app",
    onGoing: false,
  },
  {
    title: "E-commerce Website",
    subtitle: "Full Stack",
    description:
      "This is basic e-Commerce website. App provides banner, user cart, online payment, shipping detail. Admin can create new products, update and delete products.",
    stack:
      "Next.js(framework), Sanity(admin dashboard), stripe(payment) This App can be improved by adding categories, Authentication, tracking.",
    howToUse: "Choose the products you want and make test payment via cart.",
    images: ["project-ecommerce.jpg"],
    url: "https://ecommerce-jiho.vercel.app/",
    onGoing: false,
  },
  {
    title: "Web3 Minting Website",
    subtitle: "Frontend, Smart Contract",
    description:
      "Our website is a user-friendly platform that allows you to easily mint your own NFTs through our secure smart contract. With our landing page, you can quickly navigate to our minting page where you can create unique and one-of-a-kind NFTs to showcase your creativity and imagination. Our platform is designed to be simple and intuitive, so anyone can participate in the world of NFTs.",
    stack:
      "Solidity (Smart Contract), React (front-end), web3js (Interact with the Ethereum)",
    howToUse:
      "Install MetaMask wallet extension and connect on Mint page. You will be able to mint NFTs",
    images: ["project-clbplayers.jpg"],
    url: "https://clbplayers.netlify.app",
    onGoing: false,
  },
  {
    title: "Movie Discover Website",
    subtitle: "Frontend",
    description:
      "FilmPire is the web app that user can discover movie, TV shows. The app uses TMDB API to get data and user can login with TMDB credencials. User can find details of movies and TV shows by search, categories, genres.",
    stack:
      "Next.js (framework) MUI (styling component) Alan-AI (voice assistant)",
    howToUse: "Login or register via TMDB and search or browse movies you want",
    images: ["project-FilmPire.jpg"],
    url: "https://firmpaire-jiho.netlify.app/",
    onGoing: false,
  },
  {
    title: "Self-Improvement App",
    subtitle: "Full Stack (Group Project)",
    description:
      "S.I.P (Self ImProvement) is Trello style Todo list App. App provides user basic todo list features and period so user can create his/her life cycle. App also provides location setting, success rate chart.",
    stack:
      "Google Map API, React Drag & Drop(react-dnd), Chart.js Knex App could be improved by develop Mobile App version if it is necessary.",
    howToUse:
      "Create category and cards and fill the detail (title, description, address, period). App will record your schdule and check your progress",
    images: ["project-SIP.jpg"],
    url: "https://github.com/harakeke-2023/sip",
    onGoing: false,
  },
];

// -----------SHOW MENU----------- //
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu Show //
// Validate if constant exist //
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// Menu Hidden //
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove Menu Mobile //
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};
navLink.forEach((el) => el.addEventListener("click", linkAction));

// Add Blur to Header //
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// Email JS //
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_89j8ndv",
      "template_o450b1s",
      "#contact-form",
      "B2n_U6rKZ5vIhg3Zf"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

// Scroll Up Button Display
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

contactForm.addEventListener("submit", sendEmail);

// Scrol Section Active Link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true //Animations repeat
});

// Projects Details
const projectsContainer = document.querySelector(".projects__container");

projectDetails.forEach((project, i) => {
  const card = document.createElement("div");
  card.classList.add("projects__card-container");
  card.innerHTML = `
<div>
 <h2 class="projects__title">${project.title}</h2>
 <div class="projects__sub-container">
 <span class="projects__subtitle">${project.subtitle}</span>
 ${
   project.onGoing
     ? "<span class='projects__subtitle ongoing'>- On Going</span>"
     : ""
 }
 </div>
 </div>
 <article class="projects__card">
   <button class="projects__button detail-btn projects__img-container" id="projects-button-${i}">
     <img
       src="./src/img/${project.images[0]}"
       alt="projects image"
       class="projects__img"
     />
   </button>
 </article>
 <div class="projects__buttons">
   <a href=${project.url} target="_blank" class="projects__button">
     View demo <i class="ri-external-link-line"></i>
   </a>
   <button class="projects__button detail-btn" id="projects-button-${i}">
     View Details <i class="ri-external-link-line"></i>
   </button>
 </div>
 `;
  projectsContainer.appendChild(card);
});

// closeBtn.addEventListener("click", () => {
//   detailContainer.classList.add("hidden");
//   removeDetails();
// });

const projectBtn = document.querySelectorAll(".detail-btn");
const detailContainer = document.querySelector(".projects__detail");
const closeBtn = document.querySelector(".close-btn");

function removeDetails() {
  detailContainer.innerHTML = "";
}
detailContainer.addEventListener("click", (e) => {
  if ([...e.target.classList].some((el) => el === "projects__detail")) {
    detailContainer.classList.add("hidden");
    removeDetails();
  }
});
// Arrow Button Icon
//  <svg
// class="arrow-btn left"
// xmlns="http://www.w3.org/2000/svg"
// width="16"
// height="16"
// fill="currentColor"
// class="w-5 h-5 text-red-500 bi bi-chevron-left dark:text-red-200"
// viewBox="0 0 16 16"
// >
// <path
//   fillRule="evenodd"
//   d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
// ></path>
// </svg>
// <svg
// class="arrow-btn right"
// xmlns="http://www.w3.org/2000/svg"
// width="16"
// height="16"
// fill="currentColor"
// class="w-5 h-5 text-red-500 bi bi-chevron-right dark:text-red-200"
// viewBox="0 0 16 16"
// >
// <path
//   fillRule="evenodd"
//   d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
// ></path>
// </svg>

projectBtn.forEach((desc) => {
  const index = desc.id.charAt(desc.id.length - 1);

  desc.addEventListener("click", () => {
    detailContainer.innerHTML = `
      <div class="projects__innerContainer">
      <i class="ri-close-line close-btn"></i>
      <h2 class="projects__title">${projectDetails[index].title}</h2>
      <span class="projects__subtitle">${projectDetails[index].subtitle} </span>

      <div class="relative">
      ${projectDetails[index].images
        .map((img) => `<img src="/src/img/${img}" />`)
        .join("")}
      </div>
      <hr />
      <h4>Description</h4>
      <p class="projects__desc">
      ${projectDetails[index].description}
      </p>
      <hr />
      <h4>Stack</h4>
      <p class="projects__desc">
      ${projectDetails[index].stack}
      </p>
      <hr />
      <h4>How to use</h4>
      <p class="projects__desc">
      ${projectDetails[index].howToUse}
      </p>
      <a
      href="${projectDetails[index].url}"
      target="_blank"
      class="projects__button"
      >
      View demo <i class="ri-external-link-line"></i>
      </a>
      </div>
      `;

    setTimeout(() => {
      document.querySelector(".projects__innerContainer").classList.add("show");
    }, 0);
    document.querySelector(".close-btn").addEventListener("click", () => {
      detailContainer.classList.add("hidden");
      removeDetails();
    });
    detailContainer.classList.remove("hidden");
  });
});

sr.reveal(
  `.home__data, .home__social, .contact__container, .footer__container`
);
sr.reveal(`.home__image`, { origin: "bottom" });
sr.reveal(`.about__data, .skills__data`, { origin: "left" });
sr.reveal(`.about__image, .skills__content`, { origin: "right" });
sr.reveal(`.services__card, .projects__card-container`, { interval: 100 });
