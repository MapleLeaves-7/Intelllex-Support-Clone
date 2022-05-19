export function MainSectionItem({ mainSectionItem }) {
  return (
    <div id={mainSectionItem.id} className="main-section-item">
      <h1>{mainSectionItem.heading}</h1>
      <div className="main-section-content">
        {mainSectionItem.paragraphs.map(paragraph => (
          <p>{paragraph}</p>
        ))}
        {mainSectionItem.images &&
          mainSectionItem.images.map(image => (
            <img src={image.src} alt={image.alt} />
          ))}
      </div>
      {mainSectionItem.links && (
        <div className="main-section-nav-section">
          {mainSectionItem.links.map(link => (
            <div className="main-section-nav-item">{link.heading}</div>
          ))}
        </div>
      )}
      {mainSectionItem.otherElements.map(element => element)}
    </div>
  );
}
