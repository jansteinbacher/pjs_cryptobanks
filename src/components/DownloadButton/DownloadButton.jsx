// Import React, PropTypes, and the FaFilePdf icon from react-icons
import React from 'react';
import PropTypes from 'prop-types';
import { FaFilePdf } from 'react-icons/fa';

// DownloadButton component can be used to display an icon and link for downloading a document
function DownloadButton({ icon, downloadLink, text }) {
  // Define a constant to determine if the link should open in a new tab
  const openInNewTab = true;

  // Function to initiate the download of the PDF document
  const downloadPdf = () => {
    if (openInNewTab) {
      // Open the download link in a new tab
      window.open(downloadLink, '_blank');
    } else {
      // Create a link element and trigger a download in the current tab
      const link = document.createElement('a');
      link.href = downloadLink;
      link.target = '_blank';
      link.download = 'document.pdf';
      link.click();
    }
  };

  return (
    <div className="text-center">
      <div className="flex flex-col items-center">
        {icon && // If an icon is provided, display it
          React.cloneElement(icon, {
            className: 'text-5xl text-green-400 mb-2',
          })}
        <button
          type="button"
          onClick={downloadPdf}
          className="bg-green-400 text-white hover:bg-green-500 rounded px-4 py-2 mt-4"
        >
          {text} {/* Display the button text */}
        </button>
      </div>
    </div>
  );
}

// Define the expected prop types for the DownloadButton component
DownloadButton.propTypes = {
  icon: PropTypes.element, // Icon element (optional)
  downloadLink: PropTypes.string.isRequired, // Requires a string for the download link
  text: PropTypes.string.isRequired, // Requires a string for the button text
};

// Set default props for the DownloadButton component
DownloadButton.defaultProps = {
  icon: <FaFilePdf />, // Default icon is the FaFilePdf icon
};

export default DownloadButton; // Export the DownloadButton component
