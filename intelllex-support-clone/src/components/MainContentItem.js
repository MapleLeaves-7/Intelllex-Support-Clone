export function MainContentItem({ mainContentItem }) {
  return (
    <div id={mainContentItem.id} className="main-content-item">
      <h1>{mainContentItem.heading}</h1>
      <div className="description">
        {mainContentItem.paragraphs.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {mainContentItem.images &&
          mainContentItem.images.map(image => (
            <img key={image.alt} src={image.src} alt={image.alt} />
          ))}
      </div>
      {mainContentItem.links && (
        <div className="main-content-nav-section">
          {mainContentItem.links.map(link => (
            <div className="main-content-nav-item" key={link.heading}>
              {link.heading}
            </div>
          ))}
        </div>
      )}
      {mainContentItem.anchorTags.map(a => (
        <a key={a.href} href={a.href}>
          {a.text}
        </a>
      ))}
    </div>
  );
}
