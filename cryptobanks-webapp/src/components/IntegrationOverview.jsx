import React from "react";
import MouseCursor from "../images/mouse-cursor.png";

const IntegrationOverview = () => {
  return (
    <>
      <div class="snap-y snap-mandatory">
        <div class="snap-start h-screen w-screen flex flex-col justify-center items-center">
          <div>
            <h1 id="text" class="text-7xl font bold text-center">
              Integration von Kryptoassets ins Bankensystem
            </h1>
            <img
              src={MouseCursor}
              alt="Scroll Down"
              className="mt-10 mx-auto w-32 transform scale-100 hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        <div class=" bg-gray-100 snap-start h-screen w-screen flex flex-col justify-center items-center">
          <h1 id="text" class="text-7xl font bold">
            Awendung von Cryptoassets
          </h1>
          <p class="text-2xl text-center mx-64 mt-8">
            Kryptoassets haben das Potenzial, in verschiedenen Bereichen des
            traditionellen Finanzbereichs Einzug zu halten. Hier sind einige
            Bereiche, in denen sie bereits an Bedeutung gewinnen oder in Zukunft
            eine Rolle spielen könnten:
          </p>
          <div class="container">
            <div className="grid grid-cols-3 grid-rows-2 justify-center gap-4 mt-12 mb-12">
              <details class="bg-[#F6FFDE] shadow rounded group mb-4">
                <summary class="list-none flex flex-wrap items-center cursor-pointer focus:outline-none focus:ring focus:ring-black rounded group-open:rounded-b-none group-open:z-[1] relative">
                  <h4 class="flex flex-1 p-4 font-semibold">Zahlungsverkehr</h4>
                  <div class="flex w-10 items-center justify center">
                    <div class="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left"></div>
                  </div>
                </summary>
                <div class="p-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet blanditiis maiores culpa iusto minima, hic vitae harum
                    aliquam beatae pariatur architecto aut accusamus qui
                    deserunt esse sed eaque dolor laudantium.
                  </p>
                </div>
              </details>
              <details class="bg-[#F6FFDE] shadow rounded group mb-4">
                <summary class="list-none flex flex-wrap items-center cursor-pointer focus:outline-none focus:ring focus:ring-black rounded group-open:rounded-b-none group-open:z-[1] relative">
                  <h4 class="flex flex-1 p-4 font-semibold">
                    Wertpapierhandel
                  </h4>
                  <div class="flex w-10 items-center justify center">
                    <div class="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left"></div>
                  </div>
                </summary>
                <div class="p-4">
                  <p>
                    Kryptoassets können als alternative Anlageklasse dienen.
                    Tokenisierte Wertpapiere, wie Security Tokens, ermöglichen
                    den Handel mit traditionellen Vermögenswerten wie Aktien,
                    Anleihen oder Immobilien in digitaler Form auf der
                    Blockchain.
                    <span class="inline">
                      <a href="/micaintroduction">
                        <p className="font-bold text-yellow-600 underline hover:underline">
                          mehr erfahren
                        </p>
                      </a>
                    </span>
                  </p>
                </div>
              </details>
              <details class="bg-[#F6FFDE] shadow rounded group mb-4">
                <summary class="list-none flex flex-wrap items-center cursor-pointer focus:outline-none focus:ring focus:ring-black rounded group-open:rounded-b-none group-open:z-[1] relative">
                  <h4 class="flex flex-1 p-4 font-semibold">
                    Kreditvergabe und Finanzierung
                  </h4>
                  <div class="flex w-10 items-center justify center">
                    <div class="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left"></div>
                  </div>
                </summary>
                <div class="p-4">
                  <p>
                    Kryptoassets können als Sicherheiten für Kredite dienen.
                    Durch Smart Contracts auf der Blockchain können Kreditgeber
                    und Kreditnehmer direkte, programmierbare
                    Kreditvereinbarungen abschließen, ohne auf traditionelle
                    Finanzintermediäre angewiesen zu sein.
                  </p>
                </div>
              </details>
              <details class="bg-[#F6FFDE] shadow rounded group mb-4">
                <summary class="list-none flex flex-wrap items-center cursor-pointer focus:outline-none focus:ring focus:ring-black rounded group-open:rounded-b-none group-open:z-[1] relative">
                  <h4 class="flex flex-1 p-4 font-semibold">
                    Vermögensverwaltung
                  </h4>
                  <div class="flex w-10 items-center justify center">
                    <div class="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left"></div>
                  </div>
                </summary>
                <div class="p-4">
                  <p>
                    Kryptoassets bieten neue Möglichkeiten für
                    Vermögensverwalter, digitale Vermögenswerte in ihre
                    Portfolios aufzunehmen. Dies ermöglicht eine breitere
                    Diversifizierung und eröffnet Zugang zu neuen Anlagechancen.
                  </p>
                </div>
              </details>
              <details class="bg-[#F6FFDE] shadow rounded group mb-4">
                <summary class="list-none flex flex-wrap items-center cursor-pointer focus:outline-none focus:ring focus:ring-black rounded group-open:rounded-b-none group-open:z-[1] relative">
                  <h4 class="flex flex-1 p-4 font-semibold">
                    Identitäts- und KYC-Verifikation
                  </h4>
                  <div class="flex w-10 items-center justify center">
                    <div class="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left"></div>
                  </div>
                </summary>
                <div class="p-4">
                  <p>
                    Blockchain-Technologie kann bei der Identitätsverifizierung
                    und der Durchführung von Know-Your-Customer (KYC)-Prozessen
                    helfen. Dies kann die Effizienz verbessern und gleichzeitig
                    die Sicherheit und den Datenschutz erhöhen.
                  </p>
                </div>
              </details>
              <details class="bg-[#F6FFDE] shadow rounded group mb-4">
                <summary class="list-none flex flex-wrap items-center cursor-pointer focus:outline-none focus:ring focus:ring-black rounded group-open:rounded-b-none group-open:z-[1] relative">
                  <h4 class="flex flex-1 p-4 font-semibold">
                    Handel und Clearing
                  </h4>
                  <div class="flex w-10 items-center justify center">
                    <div class="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left"></div>
                  </div>
                </summary>
                <div class="p-4">
                  <p>
                    Kryptoassets können den traditionellen Handel und das
                    Clearing von Finanzinstrumenten beeinflussen.
                    Blockchain-Technologie ermöglicht effizientere
                    Handelsabwicklung, reduziert Intermediäre und erhöht die
                    Transparenz.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div class="snap-start h-screen w-screen flex flex-col justify-center items-center">
          <div>
            <h1 id="text" class="text-7xl font bold">
              Regulatorik
            </h1>
          </div>
          <div className="grid grid-cols-3 justify-center gap-4 mt-12 mb-12">
            <a href="/micaintroduction">
              <div className="rounded-lg bg-[#F6FFDE] p-6 border-2 border-gray-950 mr-8">
                <h4 className="text-lg font-bold text-center hover:underline">
                  MiCA
                </h4>
              </div>
            </a>

            <a href="/">
              <div className="rounded-lg bg-[#F6FFDE] p-6 border-2 border-gray-950 mr-4 ml-4">
                <h4 className="text-lg font-bold text-center">BaFin</h4>
              </div>
            </a>

            <a href="/introduction">
              <div className="rounded-lg bg-[#F6FFDE] p-6 border-2 border-gray-950 ml-8">
                <h4 className="text-lg font-bold text-center">
                  Deutsche Gesetzgebung
                </h4>
              </div>
            </a>
          </div>
        </div>
        <div class="bg-gray-100 snap-start h-screen w-screen flex flex-col justify-center items-center">
          <div>
            <h1 id="text" class="text-7xl font bold">
              Technische Anforderungen
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 mb-12">
            <a href="/">
              <div className="rounded-lg bg-[#F6FFDE] p-6 border-2 border-gray-950 space-y-8 mr-8">
                <h4 className="text-lg font-bold text-center">...</h4>
              </div>
            </a>

            <a href="/">
              <div className="rounded-lg bg-[#F6FFDE] p-6 border-2 border-gray-950 space-y-8 mr-4 ml-4">
                <h4 className="text-lg font-bold text-center">...</h4>
              </div>
            </a>

            <a href="/">
              <div className="rounded-lg bg-[#F6FFDE] p-6 border-2 border-gray-950 space-y-8 ml-8">
                <h4 className="text-lg font-bold text-center">...</h4>
              </div>
            </a>
          </div>
        </div>
        <div class="h-screen w-screen flex flex-col justify-center items-center">
          <div>
            <h1 id="text" class="text-7xl font bold">
              Adoption in der Gesellschaft
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 mb-12">
            <div></div>

            <a href="/">
              <div className="rounded-lg bg-[#F6FFDE] p-6 border-2 border-gray-950 space-y-8 mr-4 ml-4">
                <h4 className="text-lg font-bold text-center">
                  Studie unter Studierenden
                </h4>
              </div>
            </a>

            <div></div>
          </div>
        </div>

        <div class="snap-start bg-gray-100 h-screen w-screen flex flex-col justify-center items-center">
          <div>
            <h1 id="text" class="text-7xl font bold">
              Fallbeispiele
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 mb-12">
            <a href="/">
              <div className="rounded-lg bg-[#F6FFDE] p-6 border-2 border-gray-950 space-y-8 mr-8">
                <h4 className="text-lg font-bold text-center">ETP</h4>
              </div>
            </a>

            <a href="/">
              <div className="rounded-lg bg-[#F6FFDE] p-6 border-2 border-gray-950 space-y-8 mr-4 ml-4">
                <h4 className="text-lg font-bold text-center">
                  Handel über Börsen
                </h4>
              </div>
            </a>

            <a href="/">
              <div className="rounded-lg bg-[#F6FFDE] p-6 border-2 border-gray-950 space-y-8 ml-8">
                <h4 className="text-lg font-bold text-center">Kryptofonds</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegrationOverview;
