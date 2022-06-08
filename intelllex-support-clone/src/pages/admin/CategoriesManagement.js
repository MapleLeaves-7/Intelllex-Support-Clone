import { Breadcrumb, Navigation } from '../../components';
import { convertToId } from '../../utils';
import adminRights from '../../images/admin/categories-management/admin-rights-1.png';
import newCategory from '../../images/admin/categories-management/new-category-1.png';
import newSubCategory1 from '../../images/admin/categories-management/new-sub-category-1.png';
import newSubCategory2 from '../../images/admin/categories-management/new-sub-category-2.png';
import mergeAndRename1 from '../../images/admin/categories-management/merge-and-rename-categories-1.png';
import mergeAndRename2 from '../../images/admin/categories-management/merge-and-rename-categories-2.png';
import mergeAndRename3 from '../../images/admin/categories-management/merge-and-rename-categories-3.png';
import mergeAndRename4 from '../../images/admin/categories-management/merge-and-rename-categories-4.png';
import mergeAndRename5 from '../../images/admin/categories-management/merge-and-rename-categories-5.png';
import mergeAndRename6 from '../../images/admin/categories-management/merge-and-rename-categories-6.png';
import mergeAndRename7 from '../../images/admin/categories-management/merge-and-rename-categories-7.png';
import nestCategories1 from '../../images/admin/categories-management/nest-categories-1.png';
import nestCategories2 from '../../images/admin/categories-management/nest-categories-2.png';
import nestCategories3 from '../../images/admin/categories-management/nest-categories-3.png';
import nestCategories4 from '../../images/admin/categories-management/nest-categories-4.png';
import standAloneCategory1 from '../../images/admin/categories-management/stand-alone-category-1.png';
import standAloneCategory2 from '../../images/admin/categories-management/stand-alone-category-2.png';

export function CategoriesManagement() {
  const sections = [
    'Admin Rights',
    'Create a New Category',
    'Create a New Sub-category',
    'Merge and Rename User-created Categories',
    'Nest User-created Categories',
    'Convert to a Stand-alone Category',
  ];
  const heading = 'Categories Management';
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

            {/* Section 0: Admin Rights */}
            <section
              id={convertToId(sections[0])}
              className="subpage-content-item"
            >
              <h2>{sections[0]}</h2>
              <p>
                We understand the number of documents and number of categories
                that you manage on our platform will inevitably grow. Without
                proper management, the sheer volume of documents might
                eventually clutter your search experience with increasing number
                of irrelevant results.
              </p>
              <p>
                Admin users now have the ability to manage categories on a{' '}
                <strong>firm-wide level</strong>:
              </p>
              <ul className="list-disc">
                <li>Create new categories and sub-categories</li>
                <li>
                  Perform full suite of actions: Create, Rename, Delete, Merge
                  and Nest user-created categories (labelled 'USER-CREATED') of
                  your firm's documents.
                </li>
                <li>
                  Rename default categories (not labelled and from the INTELLLEX
                  category list)
                </li>
              </ul>
              <p>
                For <strong>default categories</strong>, Admin users can only
                Rename or Create new sub-categories under the default category.
                The other options are limited to{' '}
                <strong>user-created categories</strong> either by the Admin
                user or other users.
              </p>
              <img
                src={adminRights}
                alt="Can only move user-created categories"
              />
            </section>

            {/* Section 1: Create a New Category */}
            <section
              id={convertToId(sections[1])}
              className="subpage-content-item"
            >
              <h2>{sections[1]}</h2>
              <p>
                <strong>Example</strong>: You want to create a new firm-wide
                category called ‘Battlestar Corp’ under ‘Client’ to tag all
                documents related to this client.
              </p>
              <ul className="list-decimal">
                <li>Click on ‘Create new category’.</li>
                <li>
                  Key in the client name and save it.
                  <img src={newCategory} alt="Create category" />
                </li>
              </ul>
            </section>

            {/* Section 2: Create a New Sub-category */}
            <section
              id={convertToId(sections[2])}
              className="subpage-content-item"
            >
              <h2>{sections[2]}</h2>
              <p>
                <strong>Example</strong>: You want to <strong>create</strong> a
                new sub-category call ‘Crypto’ under the legal concept
                ‘Technology’ so as to standardise the way all crypto-related
                documents will be categorised in the future.
              </p>
              <ul className="list-decimal">
                <li>
                  Click on ‘Options’ and select ‘Create a new sub-category’.
                  <img src={newSubCategory1} alt="Create a new sub-category" />
                </li>
                <li>
                  Type in the sub-category name ‘Crypto’ and save it. There are
                  now 2 sub-categories under ‘Technology’.
                  <img src={newSubCategory2} alt="Type in sub-category name" />
                </li>
                <li>
                  You may create up to 3 levels of sub-categories, starting from
                  the primary category ‘Technology’’ to the sub-category
                  ‘Bitcoin’.
                </li>
              </ul>
            </section>

            {/* Section 3: Merge and Rename User-created Categories */}
            <section
              id={convertToId(sections[3])}
              className="subpage-content-item"
            >
              <h2>{sections[3]}</h2>
              <p>
                <strong>Example</strong>: You are doing a clean-up of firm-wide
                categories and noticed that some user-created categories are the
                same, notwithstanding misspellings or slight differences in the
                naming. You want to merge and standardise the naming conventions
                for those categories.
              </p>
              <ul className="list-decimal">
                <li>
                  For example, you want to merge the categories ‘CAN’ and
                  ‘Canadian’ and rename the category to ‘Canada’.
                </li>
                <li>
                  For ‘CAN’, select ‘Options’, and then ‘Merge to...’.
                  <img src={mergeAndRename1} alt="Merge categories" />
                </li>
                <li>
                  This will bring you to a page to select the{' '}
                  <strong>destination category</strong> you want to merge to.
                  Select the category ‘Canadian’.
                  <img
                    src={mergeAndRename2}
                    alt="Choose a destination category"
                  />
                </li>
                <li>
                  You will be brought to the next page to confirm the action.
                  You will be prompted if there are documents tied to the ‘CAN’
                  category, which will be updated as ‘Canadian’ after merging.
                </li>
                <li>
                  You may review the document(s) in question by clicking on the
                  blue document number.
                  <img src={mergeAndRename3} alt="Merging two categories" />
                </li>
                <li>
                  This will launch a search in STACKS in a separate tab, with
                  the documents under the search results.
                  <img
                    src={mergeAndRename4}
                    alt="Review documents to be merged"
                  />
                </li>
                <li>
                  If you are certain you want to merge the category ‘CAN’ into
                  ‘Canadian’, click on the blue button ‘Yes, merge these
                  categories’. You will see that only the ‘Canadian’ category
                  remains.
                  <img
                    src={mergeAndRename5}
                    alt="Only one remaining category"
                  />
                </li>
                <li>
                  To rename the category ‘Canadian’ to ‘Canada’, click on
                  ‘Options’ and select ‘Rename’.
                  <img src={mergeAndRename6} alt="Rename category" />
                </li>
                <li>
                  It will prompt you that the two documents associated with
                  ‘Canadian’ will have their category name changed. Click on the
                  number of documents if you want to view them in a separate tab
                  under STACKS search.
                </li>
                <li>
                  Otherwise, just type the new category name ‘Canada’ and save
                  it.
                  <img src={mergeAndRename7} alt="Type new category name" />
                </li>
              </ul>
            </section>

            {/* Section 4: Nest User-created Categories */}
            <section
              id={convertToId(sections[4])}
              className="subpage-content-item"
            >
              <h2>{sections[4]}</h2>
              <p>
                <strong>Example</strong>: One of your users created `Cargo
                abandoned by ‘shipper’ and ‘Cargo within the jurisdiction’ as
                separate categories. You want to <strong>Nest</strong> all 2
                under the broad legal concept of ‘Cargo’, so as to improve
                knowledge discovery by other users.
              </p>
              <ul className="list-decimal">
                <li>
                  Click on ‘Options’ for the category ‘Cargo abandoned by
                  shipper’ and select ‘Move under…’
                  <img src={nestCategories1} alt="Select move under" />
                </li>
                <li>
                  You will be brought to a page to select the parent category.
                  Either browse by alphabetical order or simply enter ‘Cargo’ in
                  the search bar and select the right option from the
                  suggestions.
                </li>
                <li>
                  Click on ‘Cargo’ to select it as the parent category and you
                  will be brought to the next page to confirm the action.{' '}
                  <img
                    src={nestCategories2}
                    alt="Confirm parent category selection"
                  />
                </li>
                <li>
                  Click on the button ‘Yes, move these categories’ to proceed or
                  you can go back, if you have selected the wrong parent
                  category.
                </li>
                <li>
                  Do the same (steps 1-4) to move ‘Cargo within the
                  jurisdiction’ under ‘Cargo’ as well.
                  <img src={nestCategories3} alt="Nest additional categories" />
                </li>
                <li>
                  Now, ‘Cargo’ has both sub-categories nested under it.
                  <img src={nestCategories4} alt="Multiple sub-categories" />
                </li>
              </ul>
            </section>

            {/* Section 5: Convert to a Stand-alone Category */}
            <section
              id={convertToId(sections[5])}
              className="subpage-content-item"
            >
              <h2>{sections[5]}</h2>
              <p>
                This function allows Admin Users to conveniently convert a
                user-created sub-category to a standalone category at the
                overarching level.
              </p>
              <p>
                <strong>Example</strong>: You realised one of the users had
                accidentally filed a client ‘Trekkies Corp’ wrongly under
                another Client category ‘Battlestar Corp’
              </p>
              <ul className="list-decimal">
                <li>
                  Click on ‘Options’ to select ‘Convert to a stand-alone
                  category’ for ‘Trekkies Corp’
                  <img
                    src={standAloneCategory1}
                    alt="Select 'Covert to stand-alone category'"
                  />
                </li>
                <li>
                  ‘Trekkies Corp’ is now a stand-alone category.
                  <img src={standAloneCategory2} alt="Stand alone category" />
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
