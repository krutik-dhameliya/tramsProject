# Tram Search Application
![Capture](https://github.com/user-attachments/assets/635a6d81-d2b5-4442-a9c2-12f626de02a3)

## Overview
This is an Angular-based Tram Search application that allows users to find tram and bus departures between selected stations. The application provides a sleek UI using Angular Material, includes error handling.

## Features
- **Search for Trams & Buses:** Users can select a 'From' and 'To' station to find relevant departures.
- **Live Departure Data:** Fetches tram and bus departures dynamically from a JSON file.
- **Error Handling:** Displays messages for incorrect input or if no departures are found.
- **Sleek UI with Angular Material:** Enhances user experience with material design elements.
- **Table Formatting:** Shows tram and bus data in a structured, readable format.
- **Hover Effects:** Highlights rows on hover for better visibility.

## Technologies Used
- **Angular** (Version 11)
- **TypeScript**
- **Angular Material**
- **RxJS** (for handling API calls and data streams)
- **GitHub** (for version control)

## Setup & Installation
### Step 1: Clone the Repository
```sh
git clone https://github.com/krutik-dhameliya/tramsProject/
cd your-repo
```

### Step 2: Install Dependencies
```sh
npm install
```

### Step 4: Run the Application
```sh
ng serve
```
Visit `http://localhost:4200/` in your browser.

## Data Source
The tram and bus data is stored in `assets/tram-data.json`. This JSON file contains:
- `departures` (list of upcoming trams and buses)
- `stop_deviations` (to map stations correctly)

## UI Components
### **Search Form**
- Two dropdowns (`From` & `To`) to select stations
- Search button to fetch results
- Error messages when inputs are invalid

### **Results Table**
- Displays trams and buses in separate tables
- Shows important details like final destination, scheduled time, expected time, state, and remaining time
- **Date Formatting:** The scheduled and expected times are formatted using Angular DatePipe (`yyyy-MM-dd HH:mm`)

### **Error Handling**
- "Please select From and To."
- "From and To must be different."
- "No trains or buses found."

## Table Design & CSS
- Full-width table layout for better readability
- Hover effect to highlight rows
- Material elevation for a modern look

## Author
[Krutik Dhameliya](https://github.com/krutik-dhameliya)

## License
This project is open-source and available.

