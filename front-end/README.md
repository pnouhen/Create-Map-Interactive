🗺️ Interactive Map – French Natural Reserves (RNF)

📌 Overview
This interactive map allows users to view and filter French natural reserves (RNF) along with their polygons and related information.

    It is built with a modular structure: each feature and function is organized in dedicated folders for clarity and scalability.

📁 Project Structure
/datas
Contains the stores generated from the API and updated dynamically.

    initialize.js: file that activates all necessary functions once the RNF store has been generated.

    /filters
    Contains six filters, each in its own folder:

        filterDepartments

        filterRange

        filterRegions

        getDistance

        searchRnfArea

        searchRnfName

    /filterTerritoires
    Shared logic between region and department filters.

    /loader
    Manages the loader state and display.

    /markers
    Generates clusters and markers on the map.

    /polygon
    Handles polygons and multi-polygons.

    /utils
    Shared utility functions used by multiple filters and components.

🧱 Tech Stack
Leaflet – interactive maps

    Turf.js – geospatial calculations

    Vite – build tool

    TailwindCSS – utility-first CSS framework

    Cleave.js – input formatting

    JavaScript – core language
