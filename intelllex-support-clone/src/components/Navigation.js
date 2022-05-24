import navService from '../services.js/nav';

export function Navigation({ sections }) {
  return (
    <div>
      {sections.map(section => (
        <div
          key={section.id}
          onClick={navService.scrollToID(section.id)}
          className="nav-section-item"
        >
          {section.heading}
        </div>
      ))}
    </div>
  );
}
