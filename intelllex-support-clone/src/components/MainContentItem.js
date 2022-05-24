export function MainContentItem({ mainContentItem }) {
  return (
    <div className="mb-14 border-b border-gray-300" id={mainContentItem.id}>
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
        <div className="grid grid-cols-2 gap-6 mb-12 font-primary font-bold text-lg text-blue-600">
          {mainContentItem.links.map(link => (
            <a className="content-nav-link" key={link.heading} href="/">
              {link.heading}
            </a>
          ))}
        </div>
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
    </div>
  );
}
