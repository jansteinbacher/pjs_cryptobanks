import CreditItem from './CreditsItem';

// code for /credits page to attribute to creators of icons used on website
function Credits() {
  // array of iconcredits displayed on page
  const iconCredits = [
    {
      id: 1,
      href: 'https://www.flaticon.com/free-icons/crypto',
      title: 'crypto icons',
      text: 'Crypto icons created by GOWI - Flaticon',
    },
    {
      id: 2,
      href: 'https://www.flaticon.com/free-icons/path',
      title: 'path icons',
      text: 'Path icons created by Made by Made Premium - Flaticon',
    },
    {
      id: 3,
      href: 'https://www.flaticon.com/free-icons/individual',
      title: 'individual icons',
      text: 'Individual icons created by Design Circle - Flaticon',
    },
    {
      id: 4,
      href: 'https://www.flaticon.com/free-icons/dictionary',
      title: 'dictionary icons',
      text: 'Dictionary icons created by lutfix - Flaticon',
    },
    {
      id: 5,
      href: 'https://www.flaticon.com/free-icons/news',
      title: 'news icons',
      text: 'News icons created by Freepik - Flaticon',
    },
    {
      id: 6,
      href: 'https://www.flaticon.com/free-icons/did-you-know',
      title: 'did you know icons',
      text: 'Did you know icons created by Freepik - Flaticon',
    },
    {
      id: 7,
      href: 'https://www.flaticon.com/free-icons/opinion',
      title: 'opinion icons',
      text: 'Opinion icons created by noomtah - Flaticon',
    },
    {
      id: 8,
      href: 'https://www.flaticon.com/free-icons/goal',
      title: 'goal icons',
      text: 'Goal icons created by Freepik - Flaticon',
    },
    {
      id: 9,
      href: 'https://www.canva.com/de_de/',
      title: 'intro outro',
      text: 'Intro und Outro of videos created with Canva',
    },
    {
      id: 10,
      href: 'https://www.adobe.com/de/products/character-animator.html',
      title: 'video',
      text: 'Videos created with Adobe Charakter Animator',
    },
    {
      id: 11,
      href: 'http://ncs.io/dd-royalty',
      title: 'intro outro',
      text: 'Music in videos: Egzod & Maestro Chives - Royalty (Don Diablo Remix) [NCS Release] Music provided by NoCopyrightSounds',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg min-h-screen">
      <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        Credits
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 mb-8">
        Credits for Icons:
      </h2>

      <ul className="mb-12 list-disc ml-4">
        {iconCredits.map((credit) => (
          <CreditItem
            href={credit.href}
            title={credit.title}
            text={credit.text}
            key={credit.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default Credits;
