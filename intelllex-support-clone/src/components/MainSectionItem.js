export function MainSectionItem({ mainSectionItem }) {
  return (
    <div id={mainSectionItem.id} className="main-section-item">
      <h1>{mainSectionItem.heading}</h1>
      <div className="main-section-content">
        {mainSectionItem.paragraphs.map((paragraph, index) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {mainSectionItem.images &&
          mainSectionItem.images.map(image => (
            <img key={image.alt} src={image.src} alt={image.alt} />
          ))}
      </div>
      {mainSectionItem.links && (
        <div className="main-section-nav-section">
          {mainSectionItem.links.map(link => (
            <div className="main-section-nav-item" key={link.heading}>
              {link.heading}
            </div>
          ))}
        </div>
      )}
      {mainSectionItem.anchorTags.map((a, index) => (
        <a key={a.href} href={a.href}>
          {a.text}
        </a>
      ))}
    </div>
  );
}
