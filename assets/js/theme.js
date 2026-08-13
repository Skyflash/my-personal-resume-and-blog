(function () {
  var buttons = document.querySelectorAll('.theme-switch__btn');
  if (!buttons.length) return;

  function currentChoice() {
    try {
      var stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (e) {}
    return 'auto';
  }

  function applyAttribute(choice) {
    if (choice === 'auto') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', choice);
    }
  }

  function updateButtons(choice) {
    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute('data-theme-choice') === choice;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function apply(choice) {
    applyAttribute(choice);
    try {
      if (choice === 'auto') {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', choice);
      }
    } catch (e) {}
    updateButtons(choice);
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn.getAttribute('data-theme-choice'));
    });
  });

  // Always reapply both the attribute and the button state to the saved
  // preference: don't trust that the inline script in <head> managed to do it
  // before paint (some privacy-focused browsers/extensions block inline
  // scripts while still allowing external files like this one).
  var initialChoice = currentChoice();
  applyAttribute(initialChoice);
  updateButtons(initialChoice);
})();
