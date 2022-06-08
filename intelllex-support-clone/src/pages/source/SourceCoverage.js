import {
  Breadcrumb,
  Navigation,
  RequestContentInclusion,
} from '../../components';
import { convertToId } from '../../utils';
export function SourceCoverage() {
  const sections = [
    'Legal Commentaries',
    'Cases',
    'Submissions',
    'Legislation & Regulation',
  ];
  const heading = 'SOURCE+ Coverage';
  return (
    <main className="subpage-main">
      <div className="subpage-container">
        <Breadcrumb pageName={heading} />
        <div className="flex flex-col md:flex-row">
          <Navigation sections={sections} isSubPage={true} />

          <div className="subpage-content">
            <header>
              <h1>{heading}</h1>
              <div className="">Updated on April 14, 2022</div>
            </header>

            <section
              id={convertToId(sections[0])}
              className="subpage-content-item"
            >
              <h2>Legal Commentaries</h2>
              <p>A curated selection of sources are available:</p>
              <ul className="list-disc tight">
                <li>Barristers' Chambers (e.g. Fountain Court, Essex Court)</li>
                <li>International Law Firms (e.g. Herbert Smith Freehills)</li>
                <li>Digital Libraries (e.g. SAL Digital Archive)</li>
              </ul>
            </section>

            <section
              id={convertToId(sections[1])}
              className="subpage-content-item"
            >
              <h2>Cases</h2>
              <p>
                Coverage extends to courts/tribunals of varying authority, from
                simple county courts to the highest appellate courts. We index
                cases from these jurisdictions:
              </p>
              <ul className="list-disc tight">
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

            <section
              id={convertToId(sections[2])}
              className="subpage-content-item"
            >
              <h2>Submissions</h2>
              <p>
                Submissions from High Court of Australia will be available in
                the basic plan for a limited period and submissions from the
                Court of Final Appeal Hong Kong will be coming soon.
              </p>
            </section>

            <section
              id={convertToId(sections[3])}
              className="subpage-content-item"
            >
              <h2>Legislation & Regulations</h2>
              <p>Legislation & Regulations search coming soon.</p>
            </section>

            <RequestContentInclusion caption="Let us know what content you would like us to include in SOURCE+ by emailing us at " />
          </div>
        </div>
      </div>
    </main>
  );
}
