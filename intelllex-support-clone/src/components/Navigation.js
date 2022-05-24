import navService from '../services.js/nav';

export function Navigation({ sections }) {
  return (
    <div>
      {sections.map(section => (
        <div
          key={section.id}
          onClick={navService.scrollToID(section.id)}
          className="px-4 py-2 mb-2 font-primary font-medium tracking-tight leading-tight text-lg text-gray-600 rounded-sm cursor-pointer 
          hover:bg-slate-300 hover:bg-opacity-30"
        >
          {section.heading}
        </div>
      ))}
    </div>
  );
}
