export async function fetchData(apiUrl, dataName) {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Response status : ${response.status}`);
    }

    const data = await response.json();

    // SessionStorage is limited at 10Mo
    if (dataName !== "region") {
      sessionStorage.setItem(dataName, JSON.stringify(data));
    }
    return data;
  } catch (error) {
    console.error("Catch :", error.message);
  }
}
