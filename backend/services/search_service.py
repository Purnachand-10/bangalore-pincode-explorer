from utils.helpers import load_pincodes

class SearchService:
    def __init__(self):
        self.data = load_pincodes()
        
    def search_by_pincode(self, pincode: str):
        # Exact match for pincode
        results = [item for item in self.data if item["pincode"] == pincode]
        return results

    def search_by_area(self, area: str):
        # Partial match, case-insensitive
        query = area.lower()
        results = [item for item in self.data if query in item["area"].lower()]
        return results
