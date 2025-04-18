// Print functionality
document.addEventListener("DOMContentLoaded", () => {
  // Add print button if it exists
  const printButton = document.getElementById("printButton")
  if (printButton) {
    printButton.addEventListener("click", () => {
      // Prepare for printing
      const pages = document.querySelectorAll(".page-content")

      // Show all pages for printing
      pages.forEach((page) => {
        page.style.display = "block"
        // Add page break class except for the first page
        if (page.id !== "page1Content") {
          page.classList.add("page-break")
        }
      })

      // Make sure all tables are visible
      const tables = document.querySelectorAll(".expense-table")
      tables.forEach((table) => {
        table.style.display = "table"
        table.style.width = "100%"
      })

      // Make sure all data is visible
      const rows = document.querySelectorAll(".expense-table tr")
      rows.forEach((row) => {
        row.style.display = "table-row"
      })

      const cells = document.querySelectorAll(".expense-table td, .expense-table th")
      cells.forEach((cell) => {
        cell.style.display = "table-cell"
      })

      // Print the document
      window.print()

      // Restore original display state after printing
      updatePageDisplay()
    })
  }

  // Function to update page display based on current page
  function updatePageDisplay() {
    const currentPage = Number.parseInt(document.getElementById("currentPage").textContent)
    const pages = document.querySelectorAll(".page-content")

    pages.forEach((page, index) => {
      if (index + 1 === currentPage) {
        page.style.display = "block"
      } else {
        page.style.display = "none"
      }
    })
  }
})
