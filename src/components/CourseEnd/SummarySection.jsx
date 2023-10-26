import { FaFilePdf } from 'react-icons/fa';
import { PiCertificate } from 'react-icons/pi';
import PropTypes from 'prop-types';
import DownloadButton from '../DownloadButton';

function SummarySection({ summaryDownloadLink, certificateDownloadLink }) {
  return (
    <div className="lg:w-1/2">
      <div className="text-center">
        <DownloadButton
          icon={<FaFilePdf />}
          downloadLink={summaryDownloadLink}
          text="Zusammenfassung herunterladen"
        />
      </div>
      <div className="text-center mt-8">
        <DownloadButton
          icon={<PiCertificate />}
          downloadLink={certificateDownloadLink}
          text="Zertifikat herunterladen"
        />
      </div>
    </div>
  );
}

SummarySection.propTypes = {
  summaryDownloadLink: PropTypes.string.isRequired,
  certificateDownloadLink: PropTypes.string.isRequired,
};

export default SummarySection;
