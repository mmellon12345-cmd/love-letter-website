document.addEventListener('DOMContentLoaded', function () {
  const envelope = document.getElementById('envelope');
  const toggleBtn = document.getElementById('toggleBtn');

  toggleBtn.addEventListener('click', function () {
    if (envelope.classList.contains('close')) {
      envelope.classList.remove('close');
      envelope.classList.add('open');
    } else {
      envelope.classList.remove('open');
      envelope.classList.add('close');
    }
  });

  // Allow clicking the flap area to toggle
  const flap = document.getElementById('flap');
  if (flap) {
    flap.addEventListener('click', function () {
      toggleBtn.click();
    });
  }
});
