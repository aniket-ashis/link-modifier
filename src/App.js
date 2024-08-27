import React, { useState } from "react";

function App() {
  const [inputUrl, setInputUrl] = useState("");
  const [transformedUrl, setTransformedUrl] = useState("");

  const handleChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleTransform = () => {
    const newUrl = transformUrl(inputUrl);
    setTransformedUrl(newUrl);
  };

  const transformUrl = (url) => {
    return (
      url.replace(
        "/batch/dsa-sit-4-java/track/placement100-basic-Recursion/problem/",
        "/problems/"
      ) + "/1"
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>URL Transformer</h2>
      <input
        type="text"
        value={inputUrl}
        onChange={handleChange}
        placeholder="Enter the URL here"
        style={{ width: "80%", padding: "10px" }}
      />
      <button
        onClick={handleTransform}
        style={{ marginLeft: "10px", padding: "10px" }}
      >
        Transform URL
      </button>
      {transformedUrl && (
        <div style={{ marginTop: "20px" }}>
          <h4>Transformed URL:</h4>
          <a href={transformedUrl} target="_blank" rel="noopener noreferrer">
            {transformedUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
