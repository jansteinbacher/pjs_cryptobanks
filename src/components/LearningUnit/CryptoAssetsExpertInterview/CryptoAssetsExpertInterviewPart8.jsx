import Adam from '../../../images/experts/adam.jpeg';
import Maria from '../../../images/experts/maria.jpeg';
import Jonathan from '../../../images/experts/jonathan.jpeg';
import Niclas from '../../../images/experts/niclas.jpeg';
import Marc from '../../../images/experts/marc.jpeg';
import Placeholder from '../../../images/experts/placeholder.jpg';

import ExpertCharacteristics from '../../ExpertCharacteristics';
import CryptoAssetsExpertInterviewSources from './CryptoAssetsExpertInterviewSources';

function CryptoAssetsExpertInterviewPart8() {
  const expertData = [
    {
      id: 1,
      name: 'Marie-Therese Bless',
      imageSrc: Maria,
      characteristics:
        ' ist als Rechtsanwältin bei Heuking Kühn Lüer Wojtek tätig. Sie hält einen Master in Business for Legal Professionals und hat am DLT Talents Programm teilgenommen, welches von der Frankfurt School of Finance & Management initiiert ist. Heuking Kühn Lüer Wojtek berät mit mehr als 400 spezialisierten Rechtsanwälten, Steuerberatern und Notaren an neun Standorten in Deutschland. Zu den nationalen und internationalen Mandanten zählen mittelständische und große Unternehmen aus Industrie, Handel und Dienstleistung sowie Verbände, Körperschaften des öffentlichen Rechts und Privatkunden [1].',
    },
    {
      id: 2,
      name: 'Marc Henniges',
      imageSrc: Marc,
      characteristics:
        'ist als Senior Manager bei dfine tätig. Er hält einen Doktor in Physik. Im Rahmen seiner Tätigkeit bei dfine arbeitet er in verschiedenen Projekten rund um elektronische Wertpapiere/ Tokenisierung, dezentrale Identität, Staking und allgemeine DLT-bezogene Geschäftsstrategien. Das Unternehmen d-fine ist ein europäisches Beratungsunternehmen. Es verfügt über langjährige Erfahrung im Bereich Banking & Capital Markets. Zu unseren Kunden gehören alle wichtigen Finanzmarktakteure: Universal- & Spezialbanken genauso wie Fintechs & Neobanken, Verbände & Dienstleister, Börsen & Clearing-Häuser sowie Aufsichtsbehörden & Zentralbanken [2].',
    },
    {
      id: 2,
      name: 'Jonathan Leßmann',
      imageSrc: Jonathan,
      characteristics:
        'ist als Chief Marketing Officer bei SWIFT tätig. Er hält einen Master in Corporate Performance und Restructuring. SWIAT ist ein in Frankfurt ansässiges FinTech. Es entwickelt Blockchain-Software für eine offene dezentralisierte Finanzmarktinfrastruktur. Es wurde von Finanzunternehmen für die Finanzindustrie entwickelt. Das Netzwerk setzt auf Kooperationen, um gemeinsam die infrastrukturelle Fragmentierung im DLT-Umfeld zu überwinden und dennoch im Wettbewerb zu bleiben. [3].',
    },
    {
      id: 2,
      name: 'Niclas Voigt',
      imageSrc: Niclas,
      characteristics:
        'ist als Senior Manager bei der Commerzbank tätig. Er hat einen Master in Wirtschaftsinformatik. Zudem hält er ein Zertifikat des Venture Finance Programms der Universität Oxford. Die Commerzbank gliedert sich in zwei Geschäftsbereiche – Privat- und Unternehmerkunden sowie Firmenkunden – und bietet ein breites Portfolio an Finanzdienstleistungen an. Sie konzentriert sich auf den deutschen Mittelstand, Großunternehmen sowie institutionelle Kunden. Im internationalen Geschäft begleitet die Commerzbank Kunden mit einem Geschäftsbezug zu Deutschland und Unternehmen aus ausgewählten Zukunftsbranchen [4].',
    },
    {
      id: 2,
      name: 'Adam Zgraja',
      imageSrc: Adam,
      characteristics:
        'ist als Senior Manager bei der Cofinpro AG tätig. Er hält einen Master im Bereich Finance und Accounting und hat am DeFi Talents Programm teilgenommen, welches von der Frankfurt School of Finance & Management initiiert ist. Zudem ist er ein nach der European Tech School zertifizierter Blockchain Experte. Die Cofinpro AG ist eine Management-, Fach- und Technologieberatung. Im Rahmen der Managementberatung unterstützt sie ihre Kunden bei Transformationsprozess hin zu einer digitalen, agilen Organisation. Im Rahmen der Fachberatung ist die Cofinpro AG als Ansprechpartner bei Fragen zu Kredit, Wertpapier und Zahlungsverkehr beratend tätig und unterstützt bei der Adaption an neue Marktherausforderungen sowie Regulatorik. Bei der Technologieberatung konzentriert sich die AG auf die Aktualisierung und Verbesserung von IT-Architekturen, die Optimierung von IT-Prozessen und den Aufbau leistungsstarker digitaler Plattformen [5].',
    },
    {
      id: 2,
      name: 'Matthias Niemietz',
      imageSrc: Placeholder,
      characteristics:
        'ist als Digital Asset Custody Director bei der Deutschen Bank tätig. Er hält einen Diplom im Bereich Corporate Finance und Accounting, Management Accounting und Wirtschaftswissenschaften der Universität Mannheim. Er verfügt über eine fast zehnjährige Erfahrung bei der Deutschen Bank und war zuvor als Vice President im Bereich Corporate Bank Business Development sowie als Vice President im Bereich Strategic Planning / Group Planning & Performance Management (FP&A) tätig. Die Deutsche Bank AG ist eine Universalbank und eines der größten Kreditinstitute Deutschlands. Sie hat ihren Hauptsitz in Frankfurt am Main, unterhält darüber hinaus Niederlassungen in der ganzen Welt. Im Jahr 2021 waren weltweit rund 82.000 Mitarbeiter bei der Deutschen Bank tätig [6].',
    },
    {
      id: 2,
      name: 'Stefan Teis',
      imageSrc: Placeholder,
      characteristics:
        'ist seit Januar 2021 bei der Deutschen Bank und leitet im Produktmanagement der Corporate Bank Initiativen rund um Blockchain / Distributed Ledger Technology, digitale Assets und digitale Währungen. Er arbeitet seit 2016 an Blockchain-Themen. Vor seiner Tätigkeit bei der Deutschen Bank war er in verschiedenen leitenden Positionen in der Beratung, an Börsen und in der Softwarebranche tätig. Er hält einen Doktortitel in Theoretischer Kernphysik. Die Deutsche Bank AG ist eine Universalbank und eines der größten Kreditinstitute Deutschlands. Sie hat ihren Hauptsitz in Frankfurt am Main, unterhält darüber hinaus Niederlassungen in der ganzen Welt. Im Jahr 2021 waren weltweit rund 82.000 Mitarbeiter bei der Deutschen Bank tätig [6].',
    },
  ];
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Steckbriefe</h2>
      <div>
        {expertData.map((expert) => (
          <ExpertCharacteristics
            key={expert.id}
            id={expert.id}
            name={expert.name}
            imageSrc={expert.imageSrc}
            characteristics={expert.characteristics}
          />
        ))}
      </div>
      <CryptoAssetsExpertInterviewSources />
    </div>
  );
}

export default CryptoAssetsExpertInterviewPart8;
