import { useParams } from 'react-router-dom';
import { Banner } from '../../components';
import { Error } from '../Error';
import { SyncFoldersFiles } from './SyncFoldersFiles';
import { OrganiseStacks } from './OrganiseStacks';
import { SearchInStacks } from './SearchInStacks';
import { ShareRequestAccess } from './ShareRequestAccess';
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
    case 'share-and-request-for-access':
      content = <ShareRequestAccess />;
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
