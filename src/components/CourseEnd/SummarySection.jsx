import { FaFilePdf } from 'react-icons/fa';
import { PiCertificate } from 'react-icons/pi';
import { VscChecklist } from 'react-icons/vsc';
import PropTypes from 'prop-types';
import DownloadButton from '../DownloadButton';

function SummarySection({ summaryDownloadLink, certificateDownloadLink }) {
  return (
    <div className="lg:w-1/2 mx-auto px-40">
      <div className="text-center">
        <div className="flex justify-center space-x-4 mb-16">
          <DownloadButton
            icon={<FaFilePdf />}
            downloadLink={summaryDownloadLink}
            text="Zusammenfassung herunterladen"
          />
          <DownloadButton
            icon={<PiCertificate />}
            downloadLink={certificateDownloadLink}
            text="Zertifikat herunterladen"
          />
        </div>
      </div>
      <h3 className="text-xl text-center font-semibold mb-4">Checkliste:</h3>
      <p className="mb-8 text-center">
        Du möchstest direkt starten und deiner Bank helfen
        Kryptoasset-Dienstleisungen anzubieten? Hier findest du eine Checkliste
        für dich und deine Bank als Download.
      </p>

      <DownloadButton
        icon={<VscChecklist />}
        downloadLink="downloads/checklist.pdf"
        text="Checkliste herunterladen"
      />
    </div>
  );
}

SummarySection.propTypes = {
  summaryDownloadLink: PropTypes.string.isRequired,
  certificateDownloadLink: PropTypes.string.isRequired,
};

export default SummarySection;
