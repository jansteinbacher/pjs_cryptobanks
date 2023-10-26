import { FaFilePdf } from 'react-icons/fa';
import { PiCertificate } from 'react-icons/pi';
import PropTypes from 'prop-types';

function SummarySection({ summaryDownloadLink, certificateDownloadLink }) {
  const openSummary = () => {
    // Construct the full URL to your PDF file
    const fullPdfUrl = summaryDownloadLink;

    // Open the PDF in a new tab
    window.open(fullPdfUrl, '_blank');
  };
  const openCertificate = () => {
    // Construct the full URL to your PDF file
    const fullPdfUrl = certificateDownloadLink;

    // Open the PDF in a new tab
    window.open(fullPdfUrl, '_blank');
  };
  return (
    <div className="lg:w-1/2">
      <div className="text-center">
        <div className="flex flex-col items-center">
          <FaFilePdf className="text-5xl text-green-400 mb-2" />
          <button
            type="button"
            onClick={openSummary}
            className="inline-block px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-300"
          >
            Zusammenfassung herunterladen
          </button>
        </div>
      </div>
      <div className="text-center mt-8">
        <div className="flex flex-col items-center">
          <PiCertificate className="text-5xl text-green-400 mb-2" />
          <button
            type="button"
            onClick={openCertificate}
            className="inline-block px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-300"
          >
            Zertifikat herunterladen
          </button>
        </div>
      </div>
    </div>
  );
}

SummarySection.propTypes = {
  summaryDownloadLink: PropTypes.string.isRequired,
  certificateDownloadLink: PropTypes.string.isRequired,
};

export default SummarySection;
