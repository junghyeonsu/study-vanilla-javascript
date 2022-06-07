const API_END_POINT = '';

const request = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
    throw new Error(`HTTP 에러: ${response.statusText}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

const api = {
  getDatas: async () => request(`${API_END_POINT}/`),
};

export default api;
