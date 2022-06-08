import { useParams } from 'react-router-dom';
import { Banner } from '../../components';
import { Error } from '../Error';
import { SyncFoldersFiles } from './SyncFoldersFiles';
export function Stacks() {
  let { page } = useParams();
  let content;
  switch (page) {
    case 'sync-or-upload-your-folders-and-files':
      content = <SyncFoldersFiles />;
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
