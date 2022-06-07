import { Link } from 'react-router-dom';
export function MainContentItem({ mainContentItem }) {
  return (
    <article className="mb-14 border-b border-gray-300" id={mainContentItem.id}>
      <h1 className="mb-6 font-primary font-bold text-5xl text-gray-700 leading-wide">
        {mainContentItem.heading}
      </h1>
      <div className="font-content mb-10">
        {mainContentItem.paragraphs.map(paragraph => (
          <p
            key={paragraph}
            className="mb-6 text-gray-600 tracking-wide leading-7"
          >
            {paragraph}
          </p>
        ))}
        {mainContentItem.images &&
          mainContentItem.images.map(image => (
            <img key={image.alt} src={image.src} alt={image.alt} />
          ))}
      </div>
      {mainContentItem.links.length > 0 && (
        <aside className="grid grid-cols-2 gap-6 mb-12 font-primary font-bold text-lg text-blue-600 text-opacity-95">
          {mainContentItem.links.map(link => (
            <Link
              className="before:content-['\2022'] before:mr-2 before:text-gray-300"
              key={link.heading}
              to={link.link}
            >
              {link.heading}
            </Link>
          ))}
        </aside>
      )}
      {mainContentItem.id === 'contact' && (
        <div className="mb-10">
          <br />
          <a
            className="py-4 px-6 font-primary font-bold text-sm text-white bg-blue-800 rounded-sm hover:bg-blue-700"
            href="mailto:support@intelllex.com"
          >
            Email us
          </a>
        </div>
      )}
    </article>
  );
}
