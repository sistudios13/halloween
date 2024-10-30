document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    document.querySelector('.overlay').style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.9) 20%)`;
  });