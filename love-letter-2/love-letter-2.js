document.addEventListener('DOMContentLoaded', function () {
  const envelope = document.getElementById('envelope');
  const toggleBtn = document.getElementById('toggleBtn2');
  if (!envelope || !toggleBtn) return;
  toggleBtn.addEventListener('click', function () {
    envelope.classList.toggle('open');
    envelope.classList.toggle('close');
  });
});
