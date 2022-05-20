export function MainSectionItem({ mainSectionItem }) {
  return (
    <div id={mainSectionItem.id} className="main-content-item">
      <h1>{mainSectionItem.heading}</h1>
      <div className="description">
        {mainSectionItem.paragraphs.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {mainSectionItem.images &&
          mainSectionItem.images.map(image => (
            <img key={image.alt} src={image.src} alt={image.alt} />
          ))}
      </div>
      {mainSectionItem.links && (
        <div className="main-content-nav-section">
          {mainSectionItem.links.map(link => (
            <div className="main-content-nav-item" key={link.heading}>
              {link.heading}
            </div>
          ))}
        </div>
      )}
      {mainSectionItem.anchorTags.map(a => (
        <a key={a.href} href={a.href}>
          {a.text}
        </a>
      ))}
    </div>
  );
}
