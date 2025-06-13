// Data is generated in localStorage for to avoid making a call to the retrieval API for  each item

export async function fetchAPI(apiUrl, dataName) {

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Response status : ${response.status}`);
    }

    const data = await response.json();
    localStorage.setItem(dataName, JSON.stringify(data));
    return data;

  } catch (error) {
    console.error("Catch :", error.message);
  }
}
