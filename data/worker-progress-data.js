// Sample data for Worker Progress Report form
const workerProgressData = {
  workerInfo: {
    workerAppId: "712041",
    submissionDate: "March 19, 2024 19:21",
    workerName: "Madeleine Willson",
    totalPages: 3,
  },
  recovery: {
    date: "March 15, 2024",
    returnStatus: "Terrible. Testing Testing",
  },
  returnToWork: {
    status: "not returned", // or "returned"
    returnDate: "",
    workType: "", // "full-regular", "full-reduced", "modified-regular", "modified-reduced", "other"
    otherWorkType: "",
    expectedReturnDate: "",
    concerns: "",
    employerContact: "",
    contactDate: "",
  },
  workStatus: {
    status: "not missed", // or "working"
  },
  painScale: 6, // 1-10
  medicalTreatment: {
    status: "not continuing", // or "continuing"
    providerType: "",
    lastTreatmentDate: "",
    lastProviderName: "",
    nextTreatmentDate: "",
    nextProviderName: "",
    frequency: "",
  },
  medication: {
    status: "not taking", // or "taking"
    medicationName: "",
  },
  exercises: {
    status: "not doing", // or "doing"
    exerciseList: "",
  },
  recoveryStatus: {
    status: "not recovered", // or "recovered"
    comments: "",
  },
  additionalInfo: "No info Testing Testing",
}

// Function to generate random data for demo purposes
function generateRandomData() {
  const randomData = JSON.parse(JSON.stringify(workerProgressData)) // Deep clone

  // Randomize recovery status
  const statuses = [
    "Improving slowly",
    "Getting better each day",
    "Still experiencing pain",
    "Making good progress",
    "Struggling with daily activities",
  ]
  randomData.recovery.returnStatus = statuses[Math.floor(Math.random() * statuses.length)]

  // Randomize return to work status
  randomData.returnToWork.status = Math.random() > 0.5 ? "not returned" : "returned"
  if (randomData.returnToWork.status === "returned") {
    const today = new Date()
    const returnDate = new Date(today)
    returnDate.setDate(today.getDate() - Math.floor(Math.random() * 30))
    randomData.returnToWork.returnDate = returnDate.toISOString().split("T")[0]

    const workTypes = ["full-regular", "full-reduced", "modified-regular", "modified-reduced", "other"]
    randomData.returnToWork.workType = workTypes[Math.floor(Math.random() * workTypes.length)]
  } else {
    const today = new Date()
    const expectedDate = new Date(today)
    expectedDate.setDate(today.getDate() + Math.floor(Math.random() * 60))
    randomData.returnToWork.expectedReturnDate = expectedDate.toISOString().split("T")[0]

    const concerns = [
      "Worried about re-injury",
      "Need more time to heal",
      "Pain is still significant",
      "Waiting for doctor's approval",
      "",
    ]
    randomData.returnToWork.concerns = concerns[Math.floor(Math.random() * concerns.length)]
  }

  // Randomize pain scale
  randomData.painScale = Math.floor(Math.random() * 10) + 1

  // Randomize medical treatment
  randomData.medicalTreatment.status = Math.random() > 0.5 ? "not continuing" : "continuing"
  if (randomData.medicalTreatment.status === "continuing") {
    const providers = ["Physiotherapist", "Chiropractor", "Family Doctor", "Specialist"]
    randomData.medicalTreatment.providerType = providers[Math.floor(Math.random() * providers.length)]

    const providerNames = ["Dr. Smith", "Dr. Johnson", "Dr. Williams", "Dr. Brown"]
    randomData.medicalTreatment.lastProviderName = providerNames[Math.floor(Math.random() * providerNames.length)]
    randomData.medicalTreatment.nextProviderName = providerNames[Math.floor(Math.random() * providerNames.length)]

    const frequencies = ["Weekly", "Bi-weekly", "Monthly", "As needed"]
    randomData.medicalTreatment.frequency = frequencies[Math.floor(Math.random() * frequencies.length)]
  }

  // Randomize medication
  randomData.medication.status = Math.random() > 0.5 ? "not taking" : "taking"
  if (randomData.medication.status === "taking") {
    const medications = ["Naproxen", "Ibuprofen", "Tylenol 3", "Tramadol", "Cyclobenzaprine"]
    randomData.medication.medicationName = medications[Math.floor(Math.random() * medications.length)]
  }

  // Randomize exercises
  randomData.exercises.status = Math.random() > 0.5 ? "not doing" : "doing"
  if (randomData.exercises.status === "doing") {
    const exercises = [
      "Stretching exercises for back",
      "Strengthening exercises for shoulder",
      "Walking 30 minutes daily",
      "Resistance band exercises as prescribed by physiotherapist",
    ]
    randomData.exercises.exerciseList = exercises[Math.floor(Math.random() * exercises.length)]
  }

  // Randomize recovery status
  randomData.recoveryStatus.status = Math.random() > 0.7 ? "recovered" : "not recovered"
  if (randomData.recoveryStatus.status === "not recovered") {
    const comments = [
      "Still experiencing pain when lifting objects",
      "Limited range of motion in affected area",
      "Pain interferes with sleep",
      "Improvement is slower than expected",
    ]
    randomData.recoveryStatus.comments = comments[Math.floor(Math.random() * comments.length)]
  } else {
    const comments = [
      "Feeling much better and able to perform all activities",
      "Pain has subsided completely",
      "Full range of motion restored",
      "Ready to return to full duties",
    ]
    randomData.recoveryStatus.comments = comments[Math.floor(Math.random() * comments.length)]
  }

  // Randomize additional info
  const additionalInfos = [
    "No additional information to provide",
    "Would like to discuss modified duties with employer",
    "Need clarification on coverage for additional treatments",
    "Requesting follow-up call from case manager",
  ]
  randomData.additionalInfo = additionalInfos[Math.floor(Math.random() * additionalInfos.length)]

  return randomData
}

module.exports = {
  workerProgressData,
  generateRandomData,
}
