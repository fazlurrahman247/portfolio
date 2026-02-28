// Portfolio Data - Add new projects here
const portfolioData = [
  {
    title: "Login Website",
    image: "Image/login page.png",
    category: "Web Developer",
    pdf: "pdf/login-page.pdf",
    date: "Nov 2024",
  },
  {
    title: "Music Website",
    image: "Image/music page.png",
    category: "Web Developer",
    pdf: "pdf/music-page.pdf",
    date: "Nov 2024",
  },
  {
    title: "Calculator",
    image: "Image/calculator.png",
    category: "Web Developer",
    pdf: "pdf/calculator.pdf",
    date: "Nov 2024",
  },
  {
    title: "Bento UI Design",
    image: "Image/Photo1.png",
    category: "UI/UX Design",
    pdf: "pdf/Bento UI.pdf",
    date: "Nov 2024",
  },
  {
    title: "Laptop Landing Page UI",
    image: "Image/Laptop design ui.jpg",
    category: "UI/UX Design",
    pdf: "pdf/Laptop-design-ui.pdf",
    date: "Jan 2025",
  },
  {
    title: "Hari Pahlawan UI",
    image: "Image/HARI PAHLAWAN.png",
    category: "UI/UX Design",
    pdf: "pdf/HARI-PAHLAWAN.pdf",
    date: "Nov 2024",
  },
  {
    title: "EDU FUSION Logo",
    image: "Inkscape/EDU FUSION.png",
    category: "Graphic Design",
    pdf: "pdf/EDU-FUSION.pdf",
    date: "Nov 2024",
  },
  {
    title: "Cafe Bliss Logo",
    image: "Inkscape/Cafe Bliss.png",
    category: "Graphic Design",
    pdf: "pdf/Cafe-Bliss.pdf",
    date: "Dec 2024",
  },
  {
    title: "INNO CREATIVE Logo",
    image: "Inkscape/INNO CREATIVE.png",
    category: "Graphic Design",
    pdf: "pdf/INNO-CREATIVE.pdf",
    date: "Nov 2024",
  },
  {
    title: "Well Heart Logo",
    image: "Inkscape/Well Heart.png",
    category: "Graphic Design",
    pdf: "pdf/Well-Heart.pdf",
    date: "Dec 2024",
  },
  {
    title: "GreenTech Logo",
    image: "Inkscape/GreenTech.png",
    category: "Graphic Design",
    pdf: "pdf/GreenTech.pdf",
    date: "Dec 2024",
  },
];

// Get category icon
function getCategoryIcon(category) {
  const icons = {
    "Web Developer": "globe",
    "UI/UX Design": "customize-computer",
    "Graphic Design": "palette",
  };
  return icons[category] || "globe";
}

// Function to render portfolios
function renderPortfolios(filter = "all") {
  const container = document.getElementById("portfolio-grid");

  if (!container) return;

  // Filter portfolios
  const filteredData =
    filter === "all"
      ? portfolioData
      : portfolioData.filter((p) => p.category === filter);

  container.innerHTML = filteredData
    .map(
      (portfolio, index) => `
    <div class="portfolio" data-category="${portfolio.category}" data-aos="fade-up" data-aos-delay="${(index % 3) * 100}">
      <div class="portfolio-cover">
        <img src="${portfolio.image}" alt="${portfolio.title}" />
      </div>
      <div class="portfolio-info">
        <div class="portfolio-title">
          <h4>${portfolio.title}</h4>
          <a href="${portfolio.pdf}" target="_blank" class="portfolio-link" title="View PDF">
            <img src="Icon/file-pdf.png" alt="PDF" />
          </a>
        </div>
        <div class="portfolio-tags">
          <div>
            <img src="Icon/${getCategoryIcon(portfolio.category)}.png" alt="" />
            ${portfolio.category}
          </div>
          <div>${portfolio.date}</div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  // Re-initialize AOS for new elements
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
}

// Filter button functionality
function initFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      // Filter portfolios
      const category = this.dataset.category;
      renderPortfolios(category);
    });
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  renderPortfolios();
  initFilterButtons();
});
