import { useParams } from 'react-router-dom';
import { Banner } from '../../components';
import { Error } from '../Error';
import { SyncFoldersFiles } from './SyncFoldersFiles';
import { OrganiseStacks } from './OrganiseStacks';
import { SearchInStacks } from './SearchInStacks';
export function Stacks() {
  let { page } = useParams();
  let content;
  switch (page) {
    case 'sync-or-upload-your-folders-and-files':
      content = <SyncFoldersFiles />;
      break;
    case 'organise-your-stacks':
      content = <OrganiseStacks />;
      break;
    case 'search-in-stacks':
      content = <SearchInStacks />;
      break;
    default:
      content = <Error />;
  }
  return (
    <>
      <Banner />
      {content}
    </>
  );
}
