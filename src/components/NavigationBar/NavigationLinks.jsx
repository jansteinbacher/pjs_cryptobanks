import NavigationLink from './NavigationLink';

// Define an array of navigation links
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

// NavigationLinks component for rendering a list of navigation links
function NavigationLinks() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-12">
      {links.map((link) => (
        <NavigationLink key={link.id} to={link.to} className="mt-2 sm:mt-0">
          {link.text}
        </NavigationLink>
      ))}
    </div>
  );
}

export default NavigationLinks;
