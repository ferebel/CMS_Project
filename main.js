// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Animated counter for the feature section
const counters = document.querySelectorAll('.feature i');
const counterSpeed = 200; // Adjust this value to control the speed of the counter

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / counterSpeed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
