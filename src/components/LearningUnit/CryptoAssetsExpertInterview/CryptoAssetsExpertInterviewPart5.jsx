import ExpertInsights from '../../ExpertInsights';
import ExpertOpinion from '../../ExpertOpinion';

function CryptoAssetsExpertInterviewPart5() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Potenzielle Akzeptanzbarrieren von Kryptoassets:
      </h2>
      <ExpertOpinion
        paragraphs={[
          '„Also ich glaube, die größte Akzeptanzbarriere ist im Prinzip wirklich das fehlende Wissen. Also es ist schon so, dass generell kein Wissen besteht, was ist das Ganze oder was steckt dahinter sozusagen. Dazu kommt, dass wenn man gerade die klassischen Kryptowerte anguckt, die es gibt, ist da immer noch so ein gewisses Schmuddel-Image" dabei. Also es ist alles umweltschädigend und wird nur von Verbrechern genutzt.”',
        ]}
      />
      <ExpertInsights
        title="Technologische Barrieren:"
        items={[
          'Aufbau einer komplexen, blockchain-basierten Infrastruktur in Banken.',
          'Herausforderungen bei der Integration in bestehende Systeme.',
          'Unvorhersehbare Kosten in Form von Transaktions-Gasgebühren.',
          'Mangel an spezialisiertem Fachwissen in Banken.',
          'Unsicherheit der Transaktionsfinalität in öffentlichen Blockchains.',
          'Notwendigkeit benutzerfreundlicher Wallets und schneller Transaktionszeiten.',
          'Sicherheit von Kryptoassets erfordert spezielle Maßnahmen.',
        ]}
      />
      <ExpertInsights
        title="Rechtliche Barrieren:"
        items={[
          'Banken müssen regulatorische Anforderungen erfüllen, um Kryptoassets anzubieten.',
          'Regulatorische Unsicherheit und lange Bearbeitungszeiten bei Anträgen.',
          'Frage der Insolvenzregelungen für Kryptoasset-Verwahrer.',
          'Einhaltung von Geldwäsche-, Terrorismusfinanzierungs- und Sanktionsvorschriften.',
        ]}
      />
      <ExpertInsights
        title="Sicherheits- und Risikobarrieren:"
        items={[
          'Kryptoassets werden mit Kriminalität in Verbindung gebracht.',
          'Notwendigkeit von Compliance-Maßnahmen zur Geldwäscheprävention, Terrorismusbekämpfung und Sanktionskonformität.',
          'Einhaltung von Sanktionslisten und rechtliche Unsicherheit bei Transaktionsempfängern.',
        ]}
      />
      <ExpertInsights
        title="Vertrauensbarrieren:"
        items={[
          'Vorurteile und mangelndes Vertrauen in Kryptoassets und Blockchain-Technologie.',
          'Umweltbedenken im Zusammenhang mit Kryptoassets.',
          'Unvorhersehbare Entlohnung an unbekannte Dritte bei Kryptoasset-Transaktionen.',
          'Einhaltung von Geldwäsche-, Terrorismusfinanzierungs- und Sanktionsvorschriften.',
        ]}
      />
      <ExpertInsights
        title="Bildungs- und Informationsbarrieren:"
        items={[
          'Fehlendes Wissen und mangelndes Verständnis von Kryptoassets und Blockchain-Technologie.',
          'Überwindung von Bildungslücken und Ängsten bei Bankmitarbeitenden.',
        ]}
      />
      <ExpertInsights
        title="Wirtschaftliche und finanzielle Barrieren:"
        items={[
          'Notwendigkeit eines klaren Nutzens und Kundennachfrage.',
          'Auf- und Abbaukosten und Übergangszeit bei der Einführung von Kryptoassets in Banken.',
          'Finanzielle Auswirkungen und Übergangsphasen sollten berücksichtigt werden.',
        ]}
      />
    </div>
  );
}

export default CryptoAssetsExpertInterviewPart5;
