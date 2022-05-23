import navService from '../services.js/nav';

export function Navigation({ sections, isSubPage }) {
  return (
    <div className="main-nav">
      {isSubPage && <h2>Sections:</h2>}
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
