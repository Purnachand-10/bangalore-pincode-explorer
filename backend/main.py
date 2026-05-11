from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.lookup import router as lookup_router

app = FastAPI(title="Bangalore Pincode Explorer API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For dev purposes
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(lookup_router, prefix="/api/lookup", tags=["Lookup"])

@app.get("/")
def root():
    return {"message": "Welcome to Bangalore Pincode Explorer API"}
