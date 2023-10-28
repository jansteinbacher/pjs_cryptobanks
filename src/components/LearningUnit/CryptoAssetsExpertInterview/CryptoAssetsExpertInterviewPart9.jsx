import { FaFilePdf } from 'react-icons/fa';
import { VscChecklist } from 'react-icons/vsc';
import DownloadButton from '../../DownloadButton';

/**
 * Component displaying options for downloading PDF documents related to Crypto Assets Expert Interviews.
 * It provides links to download the full anonymous interviews as a PDF and a checklist for banks interested in offering crypto asset services.
 */

function CryptoAssetsExpertInterviewPart9() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Vollständige anonymisierte Interviews als PDF zum Download:
      </h2>
      <p className="mb-12">
        Die Kernaussagen reichen dir nicht und du möchtest mehr erfahren? Hier
        findest du den vollständigen Artikel zu den anonymisierten Interviews
        als Download.
      </p>
      <div className="mb-12">
        <DownloadButton
          icon={<FaFilePdf />}
          downloadLink="downloads/expertInterviews.pdf"
          text="Experteninterviews herunterladen"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Checkliste:</h2>
      <p className="mb-12">
        Du möchstest direkt starten und deiner Bank helfen
        Kryptoasset-Dienstleisungen anzubieten? Hier findest du eine Checkliste
        für dich und deine Bank als Download.
      </p>
      <div className="mb-12">
        <DownloadButton
          icon={<VscChecklist />}
          downloadLink="downloads/checklist.pdf"
          text="Checkliste herunterladen"
        />
      </div>
    </div>
  );
}
export default CryptoAssetsExpertInterviewPart9;
