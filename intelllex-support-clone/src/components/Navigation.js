export function Navigation({ sections, isSubPage }) {
  return (
    <div className="pr-4">
      {isSubPage && (
        <h3 className="pb-4 font-primary font-bold text-2xl text-dark-gray">
          Sections:
        </h3>
      )}
      {sections.map(section => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="block px-4 py-2 mb-2 font-primary font-medium tracking-tight leading-tight text-lg text-gray-600 rounded-md cursor-pointer 
          hover:bg-hover-color"
        >
          {section.heading}
        </a>
      ))}
    </div>
  );
}
