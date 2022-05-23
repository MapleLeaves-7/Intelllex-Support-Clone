import navService from '../services.js/nav';

export function Navigation({ sections, isSubPage }) {
  return (
    <div>
      {isSubPage && <h2>Sections:</h2>}
      {sections.map(section => (
        <div key={section.id} onClick={navService.scrollToID(section.id)}>
          {section.heading}
        </div>
      ))}
    </div>
  );
}
