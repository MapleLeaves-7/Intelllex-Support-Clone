import { Link } from 'react-router-dom';
import { Breadcrumb, Navigation } from '../../components';
import { convertToId } from '../../utils';
import firmLibrary1 from '../../images/stacks/search-in-stacks/firm-library-1.png';
import firmLibrary2 from '../../images/stacks/search-in-stacks/firm-library-2.gif';
import firmLibrary3 from '../../images/stacks/search-in-stacks/firm-library-3.png';
import firmLibrary4 from '../../images/stacks/search-in-stacks/firm-library-4.png';
import searchFilters1 from '../../images/stacks/search-in-stacks/search-filters-1.png';
import searchFilters2 from '../../images/stacks/search-in-stacks/search-filters-2.gif';
import autoSuggested from '../../images/stacks/search-in-stacks/auto-suggested-questions-1.gif';

export function SearchInStacks() {
  const sections = [
    "Browse your Firm's Library",
    'Use Search Filters in your Query',
    'Search through Auto-suggested Legal Questions',
  ];
  const heading = 'Search in STACKS';
  return (
    <main className="subpage-main">
      <div className="subpage-container container-width-breakpoints">
        <Breadcrumb pageName={heading} />
        <div className="flex flex-col md:flex-row">
          <Navigation sections={sections} isSubPage={true} />

          <div className="subpage-content">
            <header>
              <h1>{heading}</h1>
              <div className="">Updated on April 01, 2019</div>
            </header>

            <section
              id={convertToId(sections[0])}
              className="subpage-content-item"
            >
              <h2>{sections[0]}</h2>
              <p>
                Your Firm’s Library presents an{' '}
                <strong>overview of your firm’s knowledge resources</strong> on
                INTELLLEX, categorised by the following Category Types:
              </p>
              <ul className="list-disc">
                <li>
                  <strong>Legal Topic</strong>: Overarching areas of law, such
                  as Arbitration and Civil Procedure. Sub-categories nested
                  under the legal topics include relevant Issues and legal
                  bodies.
                </li>
                <li>
                  <strong>Document Type</strong>: Examples are Affidavits,
                  Closing Submissions and Regulatory Guidelines & Codes.
                </li>
                <li>
                  <strong>Others</strong>: Customise your own categories to help
                  you retrieve relevant resources precisely. Some examples from
                  our users include project and client names, facts of the case,
                  and jurisdiction.
                </li>
              </ul>
              <p>
                The resources are{' '}
                <strong>
                  instantly organised according to the view you want
                </strong>{' '}
                with the click of a button. This is a good starting point if you
                don’t have a specific search term in mind or want to navigate
                and discover your firm’s resources on INTELLLEX.
              </p>

              <ul className="list-decimal">
                <li>
                  Select the Category Type you want your firm’s resources to be
                  organised by.
                </li>
                <li>
                  Scroll down to browse the categories in alphabetical order.
                  <img
                    src={firmLibrary1}
                    alt="Browse categories in alphabetical order"
                  />
                </li>
                <li>
                  After you select the <strong>Legal Topic</strong> e.g.
                  Admiralty and Shipping, the associated sub-categories such as
                  Issues e.g. Charterparty will appear for you to make an even
                  more specific selection.
                </li>
                <li>
                  Click on the category to view all search results tagged with
                  the related category.
                </li>
                <li>
                  If the document belongs to you, you can click on the file
                  title to view it. If it belongs to another user in the firm,
                  simply send a request to access it.
                  <img src={firmLibrary2} alt="Request access" />
                </li>
                <li>
                  When someone requests for permission to a document which you
                  own, you will receive an email notification to approve or deny
                  the request in the notifications panel.
                  <img src={firmLibrary3} alt="Approve or deny requests" />
                </li>
                <li>
                  You can also view recently shared documents in your
                  notifications panel.
                  <img
                    src={firmLibrary4}
                    alt="Recently shared documents in notifications panel"
                  />
                </li>
              </ul>
            </section>

            <section
              id={convertToId(sections[1])}
              className="subpage-content-item"
            >
              <h2>{sections[1]}</h2>
              <p>
                If you are looking for information that matches specific
                conditions, using search filters is the fastest way to zoom in
                on the information you need. The more filters you use, the more
                refined your search results will be.{' '}
              </p>
              <p>
                <strong>Example</strong>: You know that your colleague, Ed
                typically works on Intellectual Property Law matters and you
                would like to refer to his submissions for a similar file you
                are working on.
              </p>

              <ul className="list-decimal">
                <li>
                  Narrow down your results from the start by using the{' '}
                  <strong>4 Search Filters</strong> in the drop-down menu which
                  will appear when the search bar is clicked.
                  <img
                    src={searchFilters1}
                    alt="Narrow results using 4 Search Filters"
                  />
                </li>
                <li>
                  For example, when you type the filter{' '}
                  <strong>“owner:”</strong> in the search bar, a drop-down list
                  of owners is displayed for you to make a selection. In this
                  case, clicking on ‘Ed Koh’ will trigger a search for all
                  resources which are owned by him.
                </li>
                <li>
                  Add another filter <strong>“cat:”</strong> to search by
                  categories. You can either select a category from selected
                  ones shown in the drop down menu or type in the category e.g.
                  <strong>submissions</strong> and select it to include it in
                  your search query. This narrows the search results to just 37
                  documents.
                </li>
                <li>
                  Finally, you can select the Legal Topic category
                  <strong>‘Intelllectual Property’</strong> from the left
                  navigation panel. Checking the box runs the search query to
                  bring you to just{' '}
                  <strong>1 document that fits the bill</strong>.
                </li>
                <li>
                  Click on <strong>‘Request Access’</strong> to notify Ed that
                  you would like to access the document. Find out more about
                  requesting for access to your firm’s resources in this{' '}
                  <Link
                    to="stacks/share-and-request-for-access"
                    className="text-blue-600 underline"
                  >
                    FAQ
                  </Link>
                  .
                  <img
                    src={searchFilters2}
                    alt="Request access from another user"
                  />
                </li>
              </ul>
            </section>

            <section
              id={convertToId(sections[2])}
              className="subpage-content-item"
            >
              <h2>{sections[2]}</h2>
              <p>
                You may also choose to search through questions picked up from
                your documents by our A.I. These are questions deemed to be of
                legal significance to accelerate your research.
              </p>
              <ul className="list-decimal">
                <li>Key in your desired search terms in the search bar.</li>
                <li>
                  Evaluate the list of auto-suggested questions and select your
                  desired research point.
                </li>
                <li>
                  You will be brought directly to the document that contains
                  this question.
                </li>
                <li>
                  You may also choose to delete any questions that are
                  automatically picked up.
                  <img
                    src={autoSuggested}
                    alt="Delete questions that were automatically picked up"
                  />
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
