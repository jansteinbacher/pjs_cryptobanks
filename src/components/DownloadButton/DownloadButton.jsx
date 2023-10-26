import React from 'react';
import PropTypes from 'prop-types';
import { FaFilePdf } from 'react-icons/fa';

function DownloadButton({ icon, downloadLink, text }) {
  const openInNewTab = true;
  const downloadPdf = () => {
    if (openInNewTab) {
      window.open(downloadLink, '_blank');
    } else {
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
        {icon &&
          React.cloneElement(icon, {
            className: 'text-5xl text-green-400 mb-2',
          })}
        <button
          type="button"
          onClick={downloadPdf}
          className="inline-block px-4 py-2 bg-green-400 text-white rounded-lg hover-bg-green-500 transition duration-300"
        >
          {text}
        </button>
      </div>
    </div>
  );
}

DownloadButton.propTypes = {
  icon: PropTypes.element,
  downloadLink: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

DownloadButton.defaultProps = {
  icon: <FaFilePdf />,
};

export default DownloadButton;
