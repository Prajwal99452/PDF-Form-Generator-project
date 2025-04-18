const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000

// Import data sets
const medicalExpenseData = require("./data/medical-expense-data")
const workerProgressData = require("./data/worker-progress-data")

// Set up view engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

// Serve static files
app.use("/css", express.static(path.join(__dirname, "public/css")))
app.use("/js", express.static(path.join(__dirname, "public/js")))
app.use("/images", express.static(path.join(__dirname, "public/images")))

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "WCB Forms" })
})

// Medical Expense Form routes
app.get("/medical-expense", (req, res) => {
  // Default to small dataset
  const dataset = req.query.dataset === "large" ? medicalExpenseData.largeDataset : medicalExpenseData.smallDataset

  // Ensure all data is properly formatted for display
  const formattedData = {
    ...dataset,
    // Ensure all arrays have at least one item for display
    prescriptionDrugs: dataset.prescriptionDrugs.length > 0 ? dataset.prescriptionDrugs : [],
    otcDrugs: dataset.otcDrugs.length > 0 ? dataset.otcDrugs : [],
    medicalSupplies: dataset.medicalSupplies.length > 0 ? dataset.medicalSupplies : [],
    parking: dataset.parking.length > 0 ? dataset.parking : [],
    mileage: dataset.mileage.length > 0 ? dataset.mileage : [],
    busOrTaxi: dataset.busOrTaxi.length > 0 ? dataset.busOrTaxi : [],
  }

  res.render("medical-expense", {
    title: "Medical & Travel Expense Request",
    data: formattedData,
  })
})

// Worker Progress Report routes
app.get("/worker-progress", (req, res) => {
  // Generate random data if requested
  const dataset =
    req.query.random === "true" ? workerProgressData.generateRandomData() : workerProgressData.workerProgressData

  res.render("worker-progress", {
    title: "Worker Progress Report",
    data: dataset,
  })
})

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
