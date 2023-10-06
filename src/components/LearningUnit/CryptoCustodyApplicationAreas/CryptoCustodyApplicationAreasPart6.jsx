import React, { useState } from 'react';

const Sources = ({ sources }) => {
  const [showSources, setShowSources] = useState(false);

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  return (
    <div className="sources border border-gray-400 rounded p-4">
      <button
        className="text-lg font-semibold"
        id="sources"
        onClick={toggleSources}
      >
        Quellen:
      </button>
      {showSources && (
        <div className="source-list leading-relaxed mt-4">
          <ul>
            {sources.map((source, index) => (
              <li id={index + 1} key={index}>
                [{index + 1}] {source}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const CryptoCustodyApplicationAreasPart6 = () => {
  const articlesources = [
    'Z. Jaroucheh and G. Baraq, “Crypto Assets Custody: Taxonomy, Components, and Open Challenges,” 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), Dubai, United Arab Emirates, 2023, pp. 1-6.',
    'V. Di Nicola, R. Longo, M. Federico and R. Gaetano, “Resilient Custody of Crypto-Assets, and Threshold Multisignatures,” Mathematics, vol. 8, no. 10, p. 1773, 2020.',
    'S. Suratkar, M. Shirole and S. Bhirud, “Cryptocurrency Wallet: A Review,” 2020 4th International Conference on Computer, Communication and Signal Processing (ICCCSP), Chennai, India, 2020, pp. 1-7.',
    'A. J. Cabrera-Gutiérrez, E. Castillo, A. Escobar-Molero, J. A. Álvarez-Bermejo, D. P. Morales and L. Parrilla, “Integration of Hardware Security Modules and Permissioned Blockchain in Industrial IoT Networks,” in IEEE Access, vol. 10, pp. 114331-114345, 2022.',
    'H. Rezaeighaleh and C. C. Zou, “New Secure Approach to Backup Cryptocurrency Wallets,” 2019 IEEE Global Communications Conference (GLOBECOM), Waikoloa, HI, USA, 2019.',
    'A. Shamir, “How to share a secret,” Communications of the ACM, vol. 22, no. 11, pp. 612-613, 1979.',
    'J. Han, M. Song, H. Eom, Y. Son,  Mansub Song; Hyeonsang Eom and Yongseok Son “An efficient multi-signature wallet in blockchain using bloom filter,” Proceedings of the 36th Annual ACM Symposium on Applied Computing (SAC 21), Association for Computing Machinery, New York, NY, USA, pp. 273–281, 2021',
    'S. Ricci, Petr Dzurenda, Raúl Casanova-Marqués and Petr Číka, “Threshold Signature for Privacy-Preserving Blockchain,” Lecture notes in business information processing, pp. 100–115, Jan. 2022',
  ];

  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Anwedungsbereiche - Arten von Verwahrlösungen
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Technologie</h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Anhand der zusätzlichen Informationen durch das Browser-Plugin
            konnte Tobias bereits einiges über die verschiedenen Arten von
            Verwahrlösungen lernen. In einem weiteren Schritt möchte er nun mehr
            über verschiedene Technologien in Erfahrung bringen, die für die
            Sicherheit und den Zugang zu den Kryptoassets zuständig sind.
          </p>
        </div>
      )}

      <p className="mb-8">
        Bei Shamirs Secret Sharing (SSS) wird ein Geheimnis in mehrere Teile,
        gennant “Shares” unter eine Gruppe von Teilnehmern verteilt, wobei nur
        eine spezifische Teilmenge von Teilnehmern das Geheimnis rekonstruieren
        können. Für die Rekonstruktion des Geheimnis benötigt es eine bestimmte
        Anzahl an Shares, die “Schwelle”. Dabei wird die Schwelle so gewählt,
        dass nur qualifizierte Teilnehmer, die genügenden Shares besitzen{' '}
        <a href="#sources">[6].</a>
      </p>

      <p className="mb-8">
        Im Gegensatz dazu erfordert Multi Signature (MultiSig) mehrere private
        Schlüssel, um eine Transaktion zu autorisieren. Dieses Verfahren
        ermöglicht mehrere Anwendungen, unter anderem die Aufteilung der
        Verantwortung für den Besitz von Kryptoassets unter meheren Personen,
        die Vermeidung eines einzelnen Angriffspunkt und die Möglichkeit der
        Wiederherstellung bei Verlust eines privaten Schlüssels (Seeds){' '}
        <a href="#sources">[7]</a>.
      </p>

      <p className="mb-8">
        Die Treshhold-Signature lässt sich nochmal weiter untergliedern in die
        “Threshold Cryptography” und die “Multiparty Computation” (MPC). Die
        Threshold Cryptography ermöglicht einer Gruppe von Teilnehmern gemeinsam
        kryptografische Operationen durchzuführen, indem jeder ein Teil des
        privaten Schlüssels benutzt. Demnach erstellt eine Gruppe von
        Unterzeichnern auf einer Art Signaturschema eine Signatur auf einer
        Nachricht, ohne ihren privaten Schlüssel preiszugeben. Dadurch können
        Schwachstellen des Signierens mit einem einzigen privaten Schlüssel
        beseitigt werden. Diese Art der Technologie kann zusätzlich mit der
        Multi-Signature-Technologie verwendet werden, um eine zusätzliche
        Sicherheitsebene für Kryptoassets zu bieten. Im Gegensatz dazu
        ermöglicht MPC mehreren Parteien gemeinsame Berechnungen ohne
        Offenlegung von Eingaben/Ausgaben. Diese Protokolle nutzen verschiedene
        Kryptotechniken wie Schwellenkryptografie, Geheimnisaufteilung und
        homomorphe Verschlüsselung <a href="#sources">[8]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoCustodyApplicationAreasPart6;
