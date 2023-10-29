import IntroductionBlockchainSources from './IntroductionBlockchainSources';

/**
 * Component representing the fifth part of the "Blockchain-Technologie" (Blockchain Technology) section. In this part, the focus is on the practical applications of blockchain technology. The component covers topics such as tokenization, smart contracts, decentralized finance, and their impact on various industries, including the transport and supply chain management sectors. Bernd's curiosity about the applications of blockchain and Distributed Ledger Technology (DLT) is addressed, providing real-world relevance to the content.
 */

function IntroductionBlockchainPart5() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Anwendungsbereiche
      </h2>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Tokenisierung
      </h3>
      <p className="mb-12 text-left">
        Die Tokenisierung ist eine Anwendung der Blockchain-Technologie, bei der
        digitale Vermögenswerte in tokenisierter Form auf einer dezentralen
        Blockchain-Plattform erstellt und verwaltet werden. Dies ermöglicht die
        Umwandlung physischer oder virtueller Vermögenswerte in digitale Token,
        die in der Blockchain registriert und nachverfolgt werden können. Diese
        Technologie steigert auch die Liquidität und den Handel erheblich. Zum
        Beispiel kann eine Immobilie in viele kleine Token aufgeteilt werden,
        wodurch Anleger Bruchteile dieser Vermögenswerte kaufen und verkaufen
        können<a href="#sources"> [1]</a>.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Smart Contracts und dezentrales Finanzwesen
      </h3>
      <p className="mb-12 text-left">
        Mit dem Aufkommen vieler neuerer Blockchains wie Ethereum ist es
        möglich, Anwendungen auf der Blockchain mithilfe von sogenannten Smart
        Contracts zu erstellen. Ein Smart Contract ist ein selbstausführender
        Code, der eine Aktion auslöst, sobald vordefinierte Bedingungen erfüllt
        sind. Sie tragen zur Dezentralisierung des Finanzwesens bei, indem sie
        die Vermittler, die traditionell zur Entscheidungsfindung notwendig
        sind, ersetzen. Um Informationen von außerhalb der Blockchain zu
        beziehen, nutzen Smart Contracts sogenannte Orakel, die diese Daten
        bereitstellen
        <a href="#sources"> [1]</a>.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Transportwesen und Supply-Chain-Management
      </h3>
      <p className="mb-12 text-left">
        Im Transportwesen und im Supply-Chain Management ermöglicht die
        Blockchain-Technologie die lückenlose Nachverfolgung von Produkten
        entlang der Lieferkette, was zu erhöhter Transparenz und Authentizität
        führt. Ebenso erleichtert die Blockchain den grenzüberschreitenden
        Handel, indem sie den Austausch von Informationen und Dokumenten
        zwischen verschiedenen Ländern rationalisiert. Im Bereich der
        Frachtverfolgung können Transporte und Lieferungen in Echtzeit verfolgt
        werden, was die Effizienz und Sicherheit verbessert
        <a href="#sources"> [6]</a>.
      </p>

      <IntroductionBlockchainSources />
    </div>
  );
}

export default IntroductionBlockchainPart5;
