import navService from '../services.js/nav';

export function Navigation({ sections }) {
  return (
    <div className="main-nav">
      {sections.map(section => (
        <div
          key={section.id}
          className="main-nav-item"
          onClick={navService.scrollToID(section.id)}
        >
          {section.heading}
        </div>
      ))}
    </div>
  );
}
