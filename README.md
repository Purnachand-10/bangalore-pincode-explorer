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

## API Reference

The backend exposes a clean REST API. If you want to use the API directly, you can access the following endpoints:

- `GET /api/lookup/pincode/{pincode}` - Fetches area details for a specific 6-digit pincode.
- `GET /api/lookup/area/{area}` - Searches for areas using a partial text match.

*Note: You can view the interactive Swagger documentation by visiting `http://127.0.0.1:8000/docs` while the backend is running.*

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- [React-Leaflet](https://react-leaflet.js.org/) for the amazing mapping integration.
- [FastAPI](https://fastapi.tiangolo.com/) for the lightning-fast backend framework.
- [OpenStreetMap](https://www.openstreetmap.org/) for map tile data.
