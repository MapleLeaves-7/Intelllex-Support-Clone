export function MainContentItem({ mainContentItem }) {
  return (
    <div id={mainContentItem.id}>
      <h1>{mainContentItem.heading}</h1>
      <div>
        {mainContentItem.paragraphs.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {mainContentItem.images &&
          mainContentItem.images.map(image => (
            <img key={image.alt} src={image.src} alt={image.alt} />
          ))}
      </div>
      {mainContentItem.links.length > 0 && (
        <div>
          {mainContentItem.links.map(link => (
            <a key={link.heading} href="/">
              {link.heading}
            </a>
          ))}
        </div>
      )}
      {mainContentItem.id === 'contact' && (
        <div>
          <br />
          <a href="mailto:support@intelllex.com">Email us</a>
        </div>
      )}
    </div>
  );
}
