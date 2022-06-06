import adminHomePage from '../images/admin-home-page.png';
import { Navigation, MainContentItem } from '../components';

export function Main() {
  const mainContentItems = [
    {
      id: 'source',
      heading: 'SOURCE+ precise and aggregated search',
      paragraphs: [
        'SOURCE+ is an intelligent legal search engine that understands legal concepts and their relevance to Cases, Commentaries and Court Submissions*. It helps you find pertinent information quickly and efficiently across several Commonwealth jurisdictions.',
        '*Submissions from High Court of Australia will be available in the basic plan for limited period with Legislation & Regulations coming soon.',
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
    },
    {
      id: 'contact',
      heading: 'Contact Us',
      paragraphs: [
        'Experiencing an issue on INTELLLEX? Let us know how we can help.',
      ],
      images: [],
      links: [],
    },
  ];

  return (
    <main className="flex justify-center mb-14">
      <div className="flex flex-col gap-6 pt-16 w-11/12 max-w-lg md:flex-row md:max-w-2xl xl:max-w-5xl 2xl:max-w-7xl md:pt-20">
        <Navigation sections={mainContentItems} />
        <div className="flex flex-col">
          {mainContentItems.map(item => (
            <MainContentItem key={item.id} mainContentItem={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
