import { FaFilePdf } from 'react-icons/fa';
import { PiCertificate } from 'react-icons/pi';
import PropTypes from 'prop-types';

function SummarySection({ summaryDownloadLink, certificateDownloadLink }) {
  return (
    <div className="lg:w-1/2">
      <div className="text-center">
        <div className="flex flex-col items-center">
          <FaFilePdf className="text-5xl text-green-400 mb-2" />
          <a
            href={summaryDownloadLink}
            className="inline-block px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-300"
            download
          >
            Zusammenfassung herunterladen
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <div className="flex flex-col items-center">
          <PiCertificate className="text-5xl text-green-400 mb-2" />
          <a
            href={certificateDownloadLink}
            className="inline-block px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-300"
            download
          >
            Zertifikat herunterladen
          </a>
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
