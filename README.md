# Bangalore Pincode Explorer

A full-stack web application designed to help users explore Bangalore's areas, pincodes, and municipal corporation zones on an interactive map. 

## Features

- **Interactive Map:** Pan and zoom across an interactive Leaflet map centered on Bangalore.
- **Smart Search:** Seamlessly search by entering either an exact 6-digit Pincode (e.g., `560001`) or partial Area Names (e.g., `Korama`).
- **Data Visualization:** Pincodes are plotted with custom colored markers corresponding to their municipal zones (Bengaluru Central, South, East, West, North).
- **Details Panel:** Instantly view selected area details including the exact Pincode, Area Name, and Corporation Zone.

## Tech Stack

- **Frontend:** React, Vite, React-Leaflet, Vanilla CSS.
- **Backend:** Python, FastAPI, Uvicorn.
- **Data Layer:** Local JSON storage for lightning-fast retrieval.

## Installation & Running Locally

### 1. Backend Setup

Open a terminal and navigate to the `backend` directory:
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
The FastAPI backend will run on `http://127.0.0.1:8000`.

### 2. Frontend Setup

Open a second terminal and navigate to the `frontend` directory:
```bash
cd frontend
npm install
npm run dev
```
The React frontend will be available at `http://localhost:5173`. 

## Repository Structure

```text
bangalore-pincode-explorer/
├── backend/            # FastAPI python backend
│   ├── main.py         # Main application and CORS setup
│   ├── pincodes.json   # JSON Database of Bangalore Pincodes
│   ├── routes/         # API Routing
│   └── services/       # Search logic & partial matching
└── frontend/           # Vite + React frontend application
    ├── src/
    │   ├── components/ # MapView, SearchBar, InfoPanel, Sidebar
    │   ├── services/   # Axios API calls
    │   ├── styles/     # Vanilla CSS styles
    │   └── utils/      # Color mapping utilities
    └── package.json
```
