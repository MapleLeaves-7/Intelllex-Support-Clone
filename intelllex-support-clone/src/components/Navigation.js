import { convertToId } from '../utils';

export function Navigation({ sections, isSubPage }) {
  return (
    <div className="pr-4 min-w-[25%]">
      {isSubPage && (
        <h3 className="pb-4 font-primary font-bold text-2xl text-dark-gray">
          Sections:
        </h3>
      )}
      {sections.map(section => {
        let id;
        if (section.hasOwnProperty('id')) {
          id = section.id;
          section = section.heading;
        } else {
          id = convertToId(section);
        }
        return (
          <a
            key={id}
            href={`#${id}`}
            className="block px-4 py-2 mb-2 font-primary font-medium tracking-tight leading-tight text-lg text-gray-600 rounded-md cursor-pointer 
          hover:bg-hover-color"
          >
            {section}
          </a>
        );
      })}
    </div>
  );
}
