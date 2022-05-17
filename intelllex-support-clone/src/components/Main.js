import adminHomePage from '../images/admin-home-page.png';
import MainSectionItem from './MainSectionItem';

const Main = ({ scrollToID }) => {
  const mainSectionItems = [
    {
      id: 'source',
      heading: 'SOURCE+ precise and aggregated search',
      paragraphs: [
        'SOURCE+ is an intelligent legal search engine that understands legal concepts and their relevance to Cases, Commentaries and Court Submissions*.',
        'It helps you find pertinent information quickly and efficiently across several Commonwealth jurisdictions. *Submissions from High Court of Australia will be available in the basic plan for limited period with Legislation & Regulations coming soon.',
      ],
      images: [],
      links: [
        {
          heading: 'SOURCE+ Content Coverage',
          link: 'source/source-coverage',
        },
        {
          heading: 'Refine Your Search (Boolean Guide)',
          link: 'source/refine-your-search',
        },
      ],
      otherElements: [],
    },
    {
      id: 'stacks',
      heading: 'STACKS - knowledge library for your firm',
      paragraphs: [
        'Tired of navigating through a maze of folders to find a previous precedent or earlier research? Forgot how you named your folder?',
        'STACKS is your law firm’s knowledge library, where your work documents and legal research from different sources such as personal precedents, search result links, submissions and office memorandums, can be consolidated and organised intelligently.',
        'Our AI technology automatically recommends Categories to classify your documents which are synced and uploaded to INTELLLEX according to their legal topic and document type. Get organised from the get-go, so that future retrieval will be a cinch.',
      ],
      images: [],
      links: [
        {
          heading: 'Sync or Upload Your Folders and Files',
          link: 'stacks/sync-or-upload-your-folders-and-files/',
        },
        {
          heading: 'Organise your STACKS',
          link: 'stacks/organise-your-stacks',
        },
        {
          heading: 'Search in STACKS',
          link: 'stacks/search-in-stacks/',
        },
        {
          heading: 'Share and Request for Access',
          link: 'stacks/share-and-request-for-access',
        },
      ],
      otherElements: [],
    },
    {
      id: 'admin',
      heading: 'Workspace Administration',
      paragraphs: [
        'As a Workspace Admin, you are critical to the success of your organisation through effective management of your firm’s knowledge library and the optimal use of INTELLLEX.',
        'To assist you, we have built tools to help you manage user, Categories and view activity logs. Only Admins will have access to these features under the Admin section.',
      ],
      images: [
        {
          src: adminHomePage,
          alt: 'Admin Home Page',
        },
      ],
      links: [
        {
          heading: 'Categories Management',
          link: 'admin/categories-management',
        },
      ],
      otherElements: [],
    },
    {
      id: 'contact',
      heading: 'Contact Us',
      paragraphs: [
        'Experiencing an issue on INTELLLEX? Let us know how we can help.',
      ],
      images: [],
      links: [],
      otherElements: [<a href="mailto:support@intelllex.com">Email us</a>],
    },
  ];

  return (
    <div>
      <div className="main-nav">
        {mainSectionItems.map(item => (
          <div className="main-nav-item" onClick={scrollToID(item.id)}>
            {item.heading}
          </div>
        ))}
      </div>
      <div className="main-section">
        {mainSectionItems.map(item => (
          <MainSectionItem mainSectionItem={item} />
        ))}
      </div>
    </div>
  );
};
export default Main;
