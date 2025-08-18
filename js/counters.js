let upToClients = 330;

function updateClientsValue() {
  let count = document.querySelector(".text-counter-clients");
  const increased = ++upToClients;
  count.innerHTML = increased.toLocaleString() + " + <span>clienți fericiți</span>";
  if (upToClients === 400) {
    clearInterval(countClients);
  }
}

let countExperience;
let countCars;
let countClients;

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("text-counter-clients") && !countClients) {
          countClients = setInterval(updateClientsValue, 30);
        }
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".text-counter-xp, .text-counter-cars, .text-counter-clients").forEach((el) => observer.observe(el));
