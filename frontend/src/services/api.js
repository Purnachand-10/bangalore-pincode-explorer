import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/lookup';

export const searchByPincode = async (pincode) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pincode/${pincode}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    }
    throw error;
  }
};

export const searchByArea = async (area) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/area/${area}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    }
    throw error;
  }
};
