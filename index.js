const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});

document.querySelectorAll('section').forEach(sec => observer.observe(sec));

// Select the curve and milestone

// Get total path length

// Place milestones evenly along the curve
milestones.forEach((circle, i) => {
  const pos = path.getPointAtLength((pathLength / (milestones.length - 1)) * i);
  circle.setAttribute("cx", pos.x);
  circle.setAttribute("cy", pos.y);
});


