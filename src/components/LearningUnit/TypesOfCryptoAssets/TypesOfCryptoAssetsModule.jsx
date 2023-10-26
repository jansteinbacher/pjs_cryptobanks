import Module from '../../Module';
import TypesOfCryptoAssetsQuiz from './TypesOfCryptoAssetsQuiz';
import TypesOfCryptoAssetsPart1 from './TypesOfCryptoAssetsPart1';
import TypesOfCryptoAssetsPart2 from './TypesOfCryptoAssetsPart2';
import TypesOfCryptoAssetsPart3 from './TypesOfCryptoAssetsPart3';
import TypesOfCryptoAssetsPart4 from './TypesOfCryptoAssetsPart4';
import TypesOfCryptoAssetsPart5 from './TypesOfCryptoAssetsPart5';
import TypesOfCryptoAssetsExpert from './TypesOfCryptoAssetsExpert';

function TypesOfCryptoAssetsModule() {
  const sections = [
    TypesOfCryptoAssetsPart1,
    TypesOfCryptoAssetsPart2,
    TypesOfCryptoAssetsPart3,
    TypesOfCryptoAssetsPart4,
    TypesOfCryptoAssetsPart5,
    TypesOfCryptoAssetsQuiz,
    TypesOfCryptoAssetsExpert,
  ];

  return <Module sections={sections} pagePath="/types-of-crypto-assets" />;
}

export default TypesOfCryptoAssetsModule;
