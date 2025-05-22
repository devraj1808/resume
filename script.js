const downloadBtn = document.getElementById('download-btn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', function () {
    const element = document.querySelector('.resume-wrapper');
    html2pdf().from(element).save('Devraj-Resume.pdf');
  });
}

// Print Resume
const printBtn = document.getElementById('print-btn');
if (printBtn) {
  printBtn.addEventListener('click', function () {
    window.print();
  });
}

// Toggle Theme
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
  });
}
