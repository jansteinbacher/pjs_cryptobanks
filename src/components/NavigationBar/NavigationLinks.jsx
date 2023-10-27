import NavigationLink from './NavigationLink';

const links = [
  { id: 1, to: '/course-overview', text: 'Kurse' },
  {
    id: 2,
    to: '/decisiontree?from=individual-course',
    text: 'Individueller Lernplan',
  },
  { id: 3, to: '/overview', text: 'Übersicht' },
  { id: 4, to: '/crypto-assets-expert-interview', text: 'Experteninterviews' },
  { id: 5, to: '/crypto-assets-adoption', text: 'Umfrage' },
  { id: 6, to: '/news', text: 'News' },
  { id: 7, to: '/#about', text: 'Über das Projekt' },
];

function NavigationLinks() {
  return (
    <div className="sm:flex flex-col mt-4 sm:flex-row sm:mt-0 sm:space-x-12">
      {links.map((link) => (
        <NavigationLink key={link.id} to={link.to}>
          {link.text}
        </NavigationLink>
      ))}
    </div>
  );
}

export default NavigationLinks;
