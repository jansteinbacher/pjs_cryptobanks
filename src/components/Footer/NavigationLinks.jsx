function NavigationLinks() {
  const links = [
    { id: 'home', text: 'Home', href: '/' },
    { id: 'courses', text: 'Kurse', href: '/course-overview' },
    {
      id: 'individual-course',
      text: 'Individueller Kurs',
      href: '/decisiontree',
    },
    { id: 'overview', text: 'Übersicht', href: '/overview' },
    {
      id: 'expertInterviews',
      text: 'Experteninterviews',
      href: '/crypto-assets-expert-interview',
    },
    {
      id: 'survey',
      text: 'Umfrage',
      href: '/crypto-assets-adoption',
    },
    {
      id: 'news',
      text: 'News',
      href: '/news',
    },
  ];

  return (
    <div className="flex space-x-6 text-gray-600">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="hover:text-gray-800 transition"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}

export default NavigationLinks;
