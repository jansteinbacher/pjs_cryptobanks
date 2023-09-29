import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
  // Replace this with your glossary data
  const glossaryData = [
    {
      term: "Anwendungsfälle",
      explanation: "Lerne potenzielle Anwendungsfälle von Kryptoassets kennen.",
      link: "/articles/IntroductionCryptoAssets",
    },
    {
      term: "Blockchain und Distributed-Ledger-Technologie",
      explanation:
        "Erfahre mehr über die zugrunde liegende Technologie für Kryptoassets.",
      link: "/articles/IntroductionCryptoAssets",
    },
    {
      term: "Herausforderungen und Zukunftsaussichten",
      explanation:
        "Baue ein Verständnis für die Herausforderungen und Zukunftsaussichten im Zusammenhang mit der Einführung von Kryptoassets auf.",
      link: "/banana-page",
    },
    {
      term: "Kryptoassets",
      explanation: "Baue ein Grundverständnis für Kryptoassets auf.",
      link: "/carrot-page",
    },
    {
      term: "Regulatorik",
      explanation: "Bekomme einen Überblick über die aktuelle Regulatorik.",
      link: "/grapes-page",
    },

    // Add more terms here
  ];

  // State to track search suggestions and show/hide flag
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Function to update search suggestions
  const updateSearchSuggestions = (input) => {
    const suggestions = glossaryData
      .filter(
        (item) =>
          item.term.toLowerCase().includes(input.toLowerCase()) &&
          input.trim() !== ""
      )
      .map((item) => item.term);

    setSearchSuggestions(suggestions);
    setShowSuggestions(suggestions.length > 0);
  };

  // Function to handle search input
  const handleSearch = (e) => {
    setSelectedLetter(""); // Clear the selected letter when searching
    setSearchQuery(e.target.value);

    // Update search suggestions
    updateSearchSuggestions(e.target.value);
  };

  const handleReset = () => {
    setSelectedLetter("");
    setSearchQuery("");
  };

  // State to track the selected alphabet letter
  const [selectedLetter, setSelectedLetter] = useState("");

  // State to track the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to set the selected alphabet letter
  const handleSelectLetter = (letter) => {
    setSelectedLetter(letter);
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
    <div
      id="overview"
      className="container mx-auto py-12 px-12 max-w-screen-xl"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        Glossar
      </h1>
      <p className="mb-12">
        Nutze unsere intuitive Suchfunktion, um gezielt nach Lerneinheiten zu
        suchen, die deinen Interessen und Bedürfnissen entsprechen. Du kannst
        entweder nach dem Anfangsbuchstaben des Themas filtern oder einfach den
        Begriff eingeben, nach dem du suchst. Unsere Suchvorschläge helfen dir
        dabei, die passenden Lerneinheiten zu finden.
      </p>
      {/* Search box */}
      <div className="flex justify-center">
        <div className="w-1/2 relative">
          <input
            type="text"
            placeholder="Was möchtest du wissen?..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 border rounded-md mb-4"
          />

          {/* Search suggestions */}
          {showSuggestions && (
            <ul
              className="list-none p-2 bg-white border border-gray-300 absolute"
              style={{ width: "100%", left: "0" }}
            >
              {searchSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="cursor-pointer hover:bg-gray-200 p-2"
                  onClick={() => {
                    setSearchQuery(suggestion);
                    setShowSuggestions(false);
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* Reset icon */}
      <div className="flex justify-center">
        <button
          onClick={handleReset}
          className="text-blue-500 hover:underline cursor-pointer mb-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Zurück
        </button>
      </div>

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
              <div key={item.term} id={item.term} className="mb-8">
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
      <div className="flex items-center justify-center">
        <hr className="w-4/5 border-t-2 border-gray-400 my-8 mb-16" />
      </div>
    </div>
  );
};

export default Overview;
