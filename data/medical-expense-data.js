// Sample data for Medical & Travel Expense Request form

// Small dataset (few entries)
const smallDataset = {
  claimInfo: {
    claimNumber: "20042047",
    workerAppId: "712041",
    submissionDate: "March 28, 2024 20:43",
    workerName: "Madeleine Willson",
    totalPages: 2,
  },
  prescriptionDrugs: [
    {
      drugName: "Naproxen",
      prescriptionDate: "February 28, 2024",
      datePurchased: "February 29, 2024",
      healthcareProviderName: "Dr. Best",
      paidAmount: "$20.00",
    },
  ],
  otcDrugs: [
    {
      drugName: "Advil",
      datePurchased: "March 28, 2024",
      paidAmount: "$8.00",
      sellerName: "Shoppers Drug Mart",
      reasonForPurchasing: "Pain",
    },
  ],
  medicalSupplies: [
    {
      itemPurchased: "Tensor",
      datePurchased: "February 28, 2024",
      wasPrescribed: "Yes",
      healthcareProviderName: "Dr. Best",
      paidAmount: "$10.00",
      sellerName: "Shoppers Drug Mart",
    },
  ],
  parking: [
    {
      appointmentDate: "March 28, 2024",
      address: "333 St Mary Ave, Winnipeg MB R3C 4A5, Canada",
      paidAmount: "$10.00",
      meterUsed: "yes",
      meterNumber: "12245",
    },
  ],
  mileage: [
    {
      appointmentDate: "March 28, 2024",
      healthcareAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
      workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
      kilometers: "20 km",
    },
  ],
  busOrTaxi: [
    {
      appointmentDate: "March 28, 2024",
      startingPoint: "",
      destination: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
      transportType: "Bus",
      farePaid: "$3.00",
    },
    {
      appointmentDate: "March 27, 2024",
      startingPoint: "25 Furby St, Winnipeg MB R3C 2A2, Canada",
      destination: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
      transportType: "Taxi",
      farePaid: "$15.00",
    },
  ],
}

// Large dataset (many entries)
const largeDataset = {
  claimInfo: {
    claimNumber: "20042047",
    workerAppId: "712041",
    submissionDate: "March 28, 2024 20:43",
    workerName: "Madeleine Willson",
    totalPages: 2,
  },
  prescriptionDrugs: [
    {
      drugName: "Naproxen",
      prescriptionDate: "February 28, 2024",
      datePurchased: "February 29, 2024",
      healthcareProviderName: "Dr. Best",
      paidAmount: "$20.00",
    },
    {
      drugName: "Amoxicillin",
      prescriptionDate: "March 10, 2024",
      datePurchased: "March 10, 2024",
      healthcareProviderName: "Dr. Smith",
      paidAmount: "$15.50",
    },
    {
      drugName: "Cyclobenzaprine",
      prescriptionDate: "March 15, 2024",
      datePurchased: "March 15, 2024",
      healthcareProviderName: "Dr. Johnson",
      paidAmount: "$12.75",
    },
    {
      drugName: "Tramadol",
      prescriptionDate: "March 20, 2024",
      datePurchased: "March 21, 2024",
      healthcareProviderName: "Dr. Best",
      paidAmount: "$18.25",
    },
  ],
  otcDrugs: [
    {
      drugName: "Advil",
      datePurchased: "March 28, 2024",
      paidAmount: "$8.00",
      sellerName: "Shoppers Drug Mart",
      reasonForPurchasing: "Pain",
    },
    {
      drugName: "Tylenol",
      datePurchased: "March 15, 2024",
      paidAmount: "$7.50",
      sellerName: "Walmart Pharmacy",
      reasonForPurchasing: "Headache",
    },
    {
      drugName: "Voltaren Gel",
      datePurchased: "March 20, 2024",
      paidAmount: "$15.99",
      sellerName: "London Drugs",
      reasonForPurchasing: "Joint Pain",
    },
  ],
  medicalSupplies: [
    {
      itemPurchased: "Tensor",
      datePurchased: "February 28, 2024",
      wasPrescribed: "Yes",
      healthcareProviderName: "Dr. Best",
      paidAmount: "$10.00",
      sellerName: "Shoppers Drug Mart",
    },
    {
      itemPurchased: "Wrist Brace",
      datePurchased: "March 10, 2024",
      wasPrescribed: "Yes",
      healthcareProviderName: "Dr. Smith",
      paidAmount: "$25.99",
      sellerName: "Medical Supply Store",
    },
    {
      itemPurchased: "Hot/Cold Pack",
      datePurchased: "March 15, 2024",
      wasPrescribed: "No",
      healthcareProviderName: "",
      paidAmount: "$12.50",
      sellerName: "Walmart",
    },
    {
      itemPurchased: "Compression Socks",
      datePurchased: "March 22, 2024",
      wasPrescribed: "Yes",
      healthcareProviderName: "Dr. Johnson",
      paidAmount: "$18.75",
      sellerName: "Medical Supply Store",
    },
  ],
  parking: [
    {
      appointmentDate: "March 28, 2024",
      address: "333 St Mary Ave, Winnipeg MB R3C 4A5, Canada",
      paidAmount: "$10.00",
      meterUsed: "Yes",
      meterNumber: "12245",
    },
    {
      appointmentDate: "March 15, 2024",
      address: "Health Sciences Centre, 820 Sherbrook St, Winnipeg MB",
      paidAmount: "$8.50",
      meterUsed: "Yes",
      meterNumber: "45678",
    },
    {
      appointmentDate: "March 20, 2024",
      address: "St. Boniface Hospital, 409 Taché Ave, Winnipeg MB",
      paidAmount: "$12.00",
      meterUsed: "No",
      meterNumber: "",
    },
  ],
  mileage: [
    {
      appointmentDate: "March 28, 2024",
      healthcareAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
      workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
      kilometers: "20 km",
    },
    {
      appointmentDate: "March 15, 2024",
      healthcareAddress: "St. Boniface Hospital, 409 Taché Ave, Winnipeg MB",
      workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
      kilometers: "15 km",
    },
    {
      appointmentDate: "March 20, 2024",
      healthcareAddress: "Victoria General Hospital, 2340 Pembina Hwy, Winnipeg MB",
      workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
      kilometers: "25 km",
    },
    {
      appointmentDate: "March 25, 2024",
      healthcareAddress: "Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB",
      workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
      kilometers: "18 km",
    },
  ],
  busOrTaxi: [
    {
      appointmentDate: "March 28, 2024",
      startingPoint: "",
      destination: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
      transportType: "Bus",
      farePaid: "$3.00",
    },
    {
      appointmentDate: "March 27, 2024",
      startingPoint: "25 Furby St, Winnipeg MB R3C 2A2, Canada",
      destination: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
      transportType: "Taxi",
      farePaid: "$15.00",
    },
    {
      appointmentDate: "March 20, 2024",
      startingPoint: "123 Main St, Winnipeg MB",
      destination: "St. Boniface Hospital, 409 Taché Ave, Winnipeg MB",
      transportType: "Bus",
      farePaid: "$3.00",
    },
    {
      appointmentDate: "March 15, 2024",
      startingPoint: "456 Portage Ave, Winnipeg MB",
      destination: "Health Sciences Centre, 820 Sherbrook St, Winnipeg MB",
      transportType: "Taxi",
      farePaid: "$18.50",
    },
  ],
}

module.exports = {
  smallDataset,
  largeDataset,
}
