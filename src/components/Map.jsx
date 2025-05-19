import { useEffect, useRef } from "react";

function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Wait for the 2GIS library to load
    const interval = setInterval(() => {
      if (window.DG) {
        clearInterval(interval); // Stop checking once DG is available

        // Initialize the map
        const map = window.DG.map(mapContainer.current, {
          center: [74.6, 42.87], // Bishkek coordinates
          zoom: 13,
        });

        // Add a marker
        window.DG.marker([42.87, 74.6]).addTo(map).bindPopup("Hello, Bishkek!");
      }
    }, 100); // Check every 100ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h2>2GIS Map</h2>
      <div
        ref={mapContainer}
        style={{ width: "100%", height: "400px", border: "1px solid #ccc" }}
      />
    </div>
  );
}

export default Map;