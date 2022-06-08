import { Breadcrumb, Navigation } from '../../components';
import { convertToId } from '../../utils';
import intelligentCategorisation from '../../images/stacks/organise-stacks/intelligent-categorisation-1.gif';
import organiseResources1 from '../../images/stacks/organise-stacks/organise-your-resources-1.png';
import organiseResources2 from '../../images/stacks/organise-stacks/organise-your-resources-2.gif';
import manageMultiple from '../../images/stacks/organise-stacks/manage-multiple-resources-1.gif';

export function OrganiseStacks() {
  const sections = [
    'Intelligent Categorisation of Resources',
    'Organise Your Resources',
    'Manage Multiple Resources',
  ];
  const heading = 'Organise your STACKS';
  return (
    <main className="subpage-main">
      <div className="subpage-container">
        <Breadcrumb pageName={heading} />
        <div className="flex flex-col md:flex-row">
          <Navigation sections={sections} isSubPage={true} />

          <div className="subpage-content">
            <header>
              <h1>{heading}</h1>
              <div className="">Updated on April 01, 2019</div>
            </header>
            {/* Section 0: Intelligent Categorisation of Resources */}
            <section
              id={convertToId(sections[0])}
              className="subpage-content-item"
            >
              <h2>{sections[0]}</h2>
              <p>
                As your files are synced or uploaded, our Artificial
                Intelligence (AI) technology scans their contents and
                automatically generates{' '}
                <strong>relevant legal and document type Categories</strong> for
                each file.
              </p>
              <p>
                Our <strong>central taxonomy</strong> of Categories ensures that
                resources are
                <strong>organised consistently</strong> for the whole firm for
                seamless retrieval.
              </p>
              <p>There are three category types:</p>
              <ul className="list-disc">
                <li>
                  <strong>Legal Topic</strong> (
                  <span className="text-green-label">green</span>): These are
                  broad areas of law such as Contract, Arbitration, Civil
                  Procedure.
                </li>
                <li>
                  <strong>Document Type</strong> (
                  <span className="text-purple-label">purple</span>): Examples
                  are Affidavit, Closing Submissions and Regulatory Guidelines &
                  Codes.
                </li>
                <li>
                  <strong>Others</strong> (
                  <span className="text-grey-label">grey</span>): These are your
                  customised Categories which give you the flexibility of adding
                  other identifying markers, e.g. Client name, a Confidentiality
                  reference used previously, or even “advisory comments”.
                </li>
              </ul>

              <h3>Viewing and Modifying Categories</h3>
              <ul className="list-decimal">
                <li>
                  View or edit a file’s Categories by clicking on{' '}
                  <strong>‘ More’</strong>, and selecting
                  <strong>‘Categorise’</strong>. Click on the coloured
                  categories to display them.
                </li>
                <li>
                  <strong>Add</strong> additional categories by clicking on the{' '}
                  <strong>‘+’ icon</strong> for more detailed tagging. For
                  example, in addition to ‘Companies Law’ under the{' '}
                  <span className="text-green-label">green</span> ‘Legal Topic’
                  category, you could add a sub-category i.e. Joint Venture
                  Company.
                </li>
                <li>
                  <strong>Remove</strong> a category by clicking on the{' '}
                  <strong>‘X’ icon</strong>.
                </li>
                <img src={intelligentCategorisation} alt="Remove a category" />
              </ul>
            </section>
            {/* Section 1: Organise Your Resources */}
            <section
              id={convertToId(sections[1])}
              className="subpage-content-item"
            >
              <h2>{sections[1]}</h2>
              <ul className="list-decimal">
                <li>
                  <strong>Manage Folders</strong>: Click on the{' '}
                  <strong>More</strong> button to the right of the folder to
                  access these functions:
                  <ul className="sublist-disc">
                    <li>Move</li>
                    <li>Download</li>
                    <li>
                      Rename - <em>shown below</em>
                    </li>
                    <li>Permanent Delete</li>
                  </ul>
                </li>
                <img src={organiseResources1} alt="Rename a folder" />
                <li>
                  <strong>Manage Files</strong>: Click on the{' '}
                  <strong>More</strong> button to the right of the file to
                  access these functions:
                  <ul className="sublist-disc">
                    <li>Categorise</li>
                    <li>
                      Move - <em>shown below</em>
                    </li>
                    <li>Download</li>
                    <li>Rename</li>
                    <li>Permanent Delete</li>
                  </ul>
                </li>
                <img src={organiseResources2} alt="Move folder" />
              </ul>
            </section>

            {/* Section 1: Manage Multiple Resources */}
            <section
              id={convertToId(sections[2])}
              className="subpage-content-item"
            >
              <h2>{sections[2]}</h2>
              <p>
                We understand that organising knowledge is tedious. We make it
                easier for you to <strong>organise multiple resources</strong>{' '}
                with just <strong>a few clicks</strong>.
              </p>
              <ul className="list-decimal">
                <li>
                  For example, if you store your documents related to a single
                  area of law in one folder and want to categorise them at one
                  go, simply check the box next to the ‘Name’ field to select
                  all the documents in the folder.
                </li>
                <li>
                  Click on the <strong>‘Categorise’</strong> option,{' '}
                  <strong>Category type</strong> e.g. Legal Topic and type in
                  the legal topic. You will be prompted to pick a Category from
                  our standardised taxonomy in the drop-down menu.
                </li>
                <li>
                  Select the appropriate one and click to <strong>‘Add’</strong>{' '}
                  the Category to all the files!
                </li>
              </ul>
              <img src={manageMultiple} alt="Organise multiple resources" />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
