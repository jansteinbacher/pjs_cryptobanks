import React, { useState } from "react";
import { Link } from "react-router-dom";

const Overview = () => {
  // Replace this with your glossary data
  const glossaryData = [
    {
      term: "Anwendungsfälle",
      explanation: "Lerne potenzielle Anwendungsfälle von Kryptoassets kennen",
      link: "/decisiontree",
    },
    {
      term: "Herausforderungen",
      explanation:
        "Baue ein Verständnis für die Herausforderungen im Zusammenhang mit der Einführung von Kryptoassets auf",
      link: "/banana-page",
    },
    {
      term: "Kryptoassets",
      explanation: "Baue ein Grundverständnis für Kryptoassets auf",
      link: "/carrot-page",
    },
    {
      term: "Regulatorik",
      explanation: "Bekomme einen Überblick über die aktuelle Regulatorik",
      link: "/grapes-page",
    },
    // Add more terms here
  ];

  // State to track the selected alphabet letter
  const [selectedLetter, setSelectedLetter] = useState("");

  // State to track the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to set the selected alphabet letter
  const handleSelectLetter = (letter) => {
    setSelectedLetter(letter);
  };

  // Function to handle search input
  const handleSearch = (e) => {
    setSelectedLetter(""); // Clear the selected letter when searching
    setSearchQuery(e.target.value);
  };

  // Function to filter glossary data based on the selected alphabet letter and search query
  const filteredData = glossaryData.filter(
    (item) =>
      (selectedLetter === "" ||
        item.term.charAt(0).toLowerCase() === selectedLetter.toLowerCase()) &&
      item.term.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort the filtered data alphabetically
  filteredData.sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div id="overview" className="flex flex-col mb-8">
      {/* Search box */}
      <input
        type="text"
        placeholder="Was möchtest du wissen?..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-1/2 p-2 border rounded-md mb-4 mx-auto"
      />

      {/* Alphabet navigation and glossary terms */}
      <div className="flex justify-center">
        {/* Alphabet navigation */}
        <div className="w-1/10 bg-gray-100 p-4">
          <ul className="uppercase">
            {Array.from(Array(26)).map((_, index) => {
              const letter = String.fromCharCode(65 + index);
              return (
                <li
                  key={letter}
                  className={`cursor-pointer ${
                    selectedLetter === letter ? "text-blue-500" : "text-black"
                  }`}
                  onClick={() => handleSelectLetter(letter)}
                >
                  {letter}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Glossary terms */}
        <div className="w-3/4 p-4">
          <div className="flex flex-col">
            {filteredData.map((item) => (
              <div key={item.term} id={item.term} className="mb-4">
                <h2 className="text-2xl font-bold">
                  <Link
                    to={item.link}
                    className="text-blue-500 hover:underline"
                  >
                    {item.term}
                  </Link>
                </h2>
                <p>{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
