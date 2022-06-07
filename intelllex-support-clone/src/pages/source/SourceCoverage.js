import {
  Breadcrumb,
  Navigation,
  RequestContentInclusion,
} from '../../components';
export function SourceCoverage() {
  const sections = [
    { id: 'legal-commentaries', heading: 'Legal Commentaries' },
    { id: 'cases', heading: 'Cases' },
    { id: 'submissions', heading: 'Submissions' },
    { id: 'legislation-and-regulations', heading: 'Legislation & Regulation' },
  ];
  return (
    <main className="subpage-main">
      <div className="subpage-container">
        <Breadcrumb pageName="SOURCE+ Coverage" />
        <div className="flex flex-col md:flex-row">
          <Navigation sections={sections} isSubPage={true} />

          <div className="subpage-content">
            <header>
              <h1>SOURCE+ Coverage</h1>
              <div className="">Updated on April 14, 2022</div>
            </header>

            <section id={sections[0].id} className="subpage-content-item">
              <h2>Legal Commentaries</h2>
              <p>A curated selection of sources are available:</p>
              <ul>
                <li>Barristers' Chambers (e.g. Fountain Court, Essex Court)</li>
                <li>International Law Firms (e.g. Herbert Smith Freehills)</li>
                <li>Digital Libraries (e.g. SAL Digital Archive)</li>
              </ul>
            </section>

            <section id={sections[1].id} className="subpage-content-item">
              <h2>Cases</h2>
              <p>
                Coverage extends to courts/tribunals of varying authority, from
                simple county courts to the highest appellate courts. We index
                cases from these jurisdictions:
              </p>
              <ul>
                <li>Singapore</li>
                <li>United Kingdom</li>
                <li>Hong Kong</li>
                <li>Australia</li>
                <li>Dubai International Financial Centre</li>
                <li>Canada</li>
                <li>New Zealand</li>
                <li>
                  Eastern Caribbean Supreme Court (incl. British Virgin Islands)
                </li>
              </ul>
            </section>

            <section id={sections[2].id} className="subpage-content-item">
              <h2>Submissions</h2>
              <p>
                Submissions from High Court of Australia will be available in
                the basic plan for a limited period and submissions from the
                Court of Final Appeal Hong Kong will be coming soon.
              </p>
            </section>

            <section id={sections[3].id} className="subpage-content-item">
              <h2>Legislation & Regulations</h2>
              <p>Legislation & Regulations search coming soon.</p>
            </section>

            <RequestContentInclusion />
          </div>
        </div>
      </div>
    </main>
  );
}
