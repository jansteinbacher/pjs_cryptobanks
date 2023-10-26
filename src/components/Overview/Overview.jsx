import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SearchBox from './SearchBox';
import LearningUnitTile from './LearningUnitTile';

function Overview() {
  const learningUnits = [
    {
      term: 'Kryptoasset-Dienstleistungen',
      explanation: 'Lerne potenzielle Kryptoasset-Dienstleistungen kennen.',
      link: '/crypto-asset-services?from=overview',
    },
    {
      term: 'Blockchain und Distributed-Ledger-Technologie',
      explanation:
        'Erfahre mehr über die zugrunde liegende Technologie für Kryptoassets.',
      link: '/introduction-blockchain?from=overview',
    },
    {
      term: 'Herausforderungen und Zukunftsaussichten',
      explanation:
        'Baue ein Verständnis für die Herausforderungen und Zukunftsaussichten im Zusammenhang mit der Einführung von Kryptoassets auf.',
      link: '/opportunities-challenges-crypto-assets?from=overview',
    },
    {
      term: 'Kryptoassets',
      explanation: 'Baue ein Grundverständnis für Kryptoassets auf.',
      link: '/introduction-crypto-assets?from=overview',
    },
    {
      term: 'Arten von Kryptoassets',
      explanation: 'Lerne verschiedene Arten von Kryptoassets kennen.',
      link: '/types-of-crypto-assets?from=overview',
    },
    {
      term: 'Regulatorik',
      explanation:
        'Bekomme einen Überblick über die Regulatorik auf nationaler und internationaler Ebene.',
      link: '/crypto-asset-regulation?from=overview',
    },
    {
      term: 'Trend und Adoption in der Gesellschaft',
      explanation:
        'Erhalte einen Einblick in die Adoption von Kryptoassets unter Studierenden.',
      link: '/crypto-assets-adoption?from=overview',
    },
    {
      term: 'Grundlagen der Kryptoassets-Verwahrung',
      explanation:
        'Bekomme ein Verständnis für die Grundlagen der Kryptoasset-Verwahrung.',
      link: '/introduction-crypto-custody?from=overview',
    },
    {
      term: 'Arten von Kryptoasset-Verwahrlösungen',
      explanation: 'Lerne verschiedene Kryptoasset-Verwahrlösungen kennen.',
      link: '/crypto-custody-application-areas?from=overview',
    },
    {
      term: 'Regulatorik zur Kryptoasset-Verwahrung',
      explanation:
        'Erhalte einen Einblick in die Regulatorik zur Kryptoasset-Verwahrung.',
      link: '/crypto-custody-regulation?from=overview',
    },
    {
      term: 'Herausforderungen und Zukunftsaussichten zur Kryptoasset-Verwahrung',
      explanation:
        'Baue ein Verständnis für die Herausforderungen und Zukunftsaussichten im Zusammenhang mit der Kryptoasset-Verwahrung.',
      link: '/crypto-custody-challenges?from=overview',
    },
    {
      term: 'Expertenmeinungen zur Implementation von Kryptoassets ins Bankwesen',
      explanation:
        'Erfahre mehr über die Meinungen von Experten zur Integration von Kryptoassets ins traditionelle Bankwesen',
      link: '/crypto-assets-expert-interview?from=overview',
    },
  ];

  // State to track search suggestions and show/hide flag
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // State to track the selected alphabet letter
  const [selectedLetter, setSelectedLetter] = useState('');

  // State to track the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to update search suggestions
  const updateSearchSuggestions = (input) => {
    const suggestions = learningUnits
      .filter(
        (item) =>
          item.term.toLowerCase().includes(input.toLowerCase()) &&
          input.trim() !== '',
      )
      .map((item) => item.term);

    setSearchSuggestions(suggestions);
    setShowSuggestions(suggestions.length > 0);
  };

  // Function to handle search input
  const handleSearch = (e) => {
    setSelectedLetter(''); // Clear the selected letter when searching
    setSearchQuery(e.target.value);

    // Update search suggestions
    updateSearchSuggestions(e.target.value);
  };

  const handleReset = () => {
    setSelectedLetter('');
    setSearchQuery('');
  };

  // Function to filter learning units based on the selected alphabet letter and search query
  const filteredData = learningUnits.filter(
    (item) =>
      (selectedLetter === '' ||
        item.term.charAt(0).toLowerCase() === selectedLetter.toLowerCase()) &&
      item.term.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Sort the filtered data alphabetically
  filteredData.sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-xl">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        Lerneinheiten
      </h1>
      <p className="mb-12">
        Nutze die Suchfunktion, um gezielt nach Lerneinheiten zu suchen, die
        deinen Interessen und Bedürfnissen entsprechen. Du kannst entweder nach
        dem Anfangsbuchstaben des Themas filtern oder einfach den Begriff
        eingeben, nach dem du suchst. Unsere Suchvorschläge helfen dir dabei,
        die passenden Lerneinheiten zu finden.
      </p>

      <SearchBox
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        searchSuggestions={searchSuggestions}
        showSuggestions={showSuggestions}
        setSearchQuery={setSearchQuery}
        setShowSuggestions={setShowSuggestions}
      />

      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleReset}
          className="text-blue-500 hover:underline cursor-pointer mb-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Zurück
        </button>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col">
          {filteredData.map((item) => (
            <LearningUnitTile
              key={item.term}
              term={item.term}
              explanation={item.explanation}
              link={item.link}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <hr className="w-4/5 border-t-2 border-gray-400 my-8 mb-16" />
      </div>
    </div>
  );
}

export default Overview;
