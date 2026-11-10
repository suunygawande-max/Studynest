document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector('.site-footer');

  if (footer) {
    const text = footer.querySelector('p');
    if (text) {
      text.textContent = `Smart learning for more focused futures. © ${year}`;
    }
  }
});
