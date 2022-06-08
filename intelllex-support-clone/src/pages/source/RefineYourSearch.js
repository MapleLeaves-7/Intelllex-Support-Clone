import {
  Breadcrumb,
  Navigation,
  RequestContentInclusion,
} from '../../components';
import { convertToId } from '../../utils';
export function RefineYourSearch() {
  const sections = ['Boolean Search Operators', 'Filters'];
  const heading = 'Refine Your Search';
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

            {/* Section 0: Boolean Search Operators */}
            <section
              id={convertToId(sections[0])}
              className="subpage-content-item"
            >
              <h2>{sections[0]}</h2>
              <p>INTELLLEX supports the following common operators:</p>
              <table className="boolean-filters text-[0.9375rem]">
                <thead>
                  <tr>
                    <th>Operator</th>
                    <th>Functionality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>““</td>
                    <td>
                      Searches for documents that contain the exact phrase
                      within the quotation marks.
                    </td>
                  </tr>
                  <tr>
                    <td>AND</td>
                    <td>
                      Searches for documents that contain all of the provided
                      keywords connected by <strong>AND</strong>.
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="example">
                      E.g. searching{' '}
                      <strong>“court of appeal” AND “costs only”</strong>{' '}
                      returns results that contain both the exact phrase ‘court
                      of appeal’ and the exact phrase ‘costs only’.
                    </td>
                  </tr>
                  <tr>
                    <td>OR</td>
                    <td>
                      Searches for documents that contain at least one of the
                      provided keywords.
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="example">
                      E.g. searching <strong>contract OR agreement</strong>{' '}
                      returns results which contain ‘contract’ or ‘agreement’ or
                      both ‘contract’ and ‘agreement’.
                    </td>
                  </tr>
                  <tr>
                    <td>NOT</td>
                    <td>
                      Searches for documents that do not contain keywords after
                      <strong>NOT</strong>.
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="example">
                      E.g. searching <strong>NOT estate</strong> returns results
                      which do not contain ‘estate’.
                    </td>
                  </tr>
                  <tr>
                    <td>AND NOT</td>
                    <td>
                      <strong>Note</strong>: Use <strong>AND NOT</strong> to
                      connect search term(s) you want and the search term(s) to
                      exclude.
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="example">
                      E.g. searching{' '}
                      <strong>
                        "constructive trust" AND NOT remedial AND NOT impute
                      </strong>{' '}
                      returns results that contain the exact phrase
                      ‘constructive trust’ and do not contain ‘remedial’ and do
                      not contain ‘impute’.
                    </td>
                  </tr>
                  <tr>
                    <td>~</td>
                    <td>
                      Searches for documents that contain the provided keywords
                      within a given proximity of each other and{' '}
                      <strong>in the order specified</strong>.
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="example">
                      E.g. <strong>"implied faith"~3</strong> will return
                      results that contain the word ‘faith’ within 3 words after
                      ‘implied’.
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Proximity search also works for 3 search terms.</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="example">
                      E.g. <strong>"implied duty faith"~5</strong> returns
                      results that contain the words 'implied', 'duty' and
                      'faith' within 5 words of each other in that order.
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <strong>Note</strong>: There should be no space between ”
                      and ~ and the proximity value.
                    </td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>
                      Searches for documents that contain variations of the
                      provided keyword.
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="example">
                      E.g. <strong>negl*</strong> will return results that
                      contain any of the following words: ‘neglect’,
                      ‘negligence’, ‘negligent’, ‘negligently’, etc.
                    </td>
                  </tr>
                  <tr>
                    <td>(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</td>
                    <td>
                      Operates on the provided query within the parentheses
                      before executing on those outside of it.
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="example">
                      E.g.{' '}
                      <strong>
                        ("constructive trust" OR "constructive trustee") AND
                        director
                      </strong>{' '}
                      will return results with exact phrase ‘constructive trust’
                      and ‘director’ as well as results with exact phrase
                      ‘constructive trustee’ and ‘director’
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Section 1: Filters */}
            <section
              id={convertToId(sections[1])}
              className="subpage-content-item"
            >
              <h2>{sections[1]}</h2>
              <p>Filter and narrow down your search results by:</p>

              <h3>Searching Within (time frame)</h3>
              <p>
                Looking for resources within a specific time frame? Our filters
                help you identify the ones published within the past year, till
                those published within the past decade.
              </p>

              <h3>Court Types</h3>
              <p>
                Comparing research across different jurisdictions? Selecting
                ‘Court Types’ will automatically select the respective court(s)
                for all jurisdictions. Find the most authoritative results
                quickly without having to know the hierarchy within each
                jurisdiction.
              </p>

              <h3>Jurisdiction & Courts</h3>
              <p>
                Focusing your research on specific courts in specific
                jurisdictions? Narrow your search results to decisions made by
                courts of the highest authority in specific jurisdictions.
              </p>
            </section>

            <RequestContentInclusion caption="Need more help with refining your search? Email us at " />
          </div>
        </div>
      </div>
    </main>
  );
}
