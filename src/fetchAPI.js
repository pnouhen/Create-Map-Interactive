// Data is generated in localStorage for to avoid making a call to the retrieval API for  each item

export async function fetchAPI() {
  const apiUrl = "https://apicarto.ign.fr/api/nature/rnn";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Response status : ${response.status}`);
    }

    const dataBase = await response.json();
    localStorage.setItem("dataRnn", JSON.stringify(dataBase));

    return dataBase;
  } catch (error) {
    console.error("Catch :", error.message);
  }
}
