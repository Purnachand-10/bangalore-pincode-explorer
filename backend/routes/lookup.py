from fastapi import APIRouter, HTTPException
from services.search_service import SearchService

router = APIRouter()
search_service = SearchService()

@router.get("/pincode/{pincode}")
def lookup_by_pincode(pincode: str):
    results = search_service.search_by_pincode(pincode)
    if not results:
        raise HTTPException(status_code=404, detail="Pincode not found")
    return results

@router.get("/area/{area}")
def lookup_by_area(area: str):
    results = search_service.search_by_area(area)
    if not results:
        raise HTTPException(status_code=404, detail="Area not found")
    return results
