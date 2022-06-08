import { useParams } from 'react-router-dom';
import { Banner } from '../../components';
import { Error } from '../Error';
import { RefineYourSearch } from './RefineYourSearch';
import { SourceCoverage } from './SourceCoverage';
export function Source() {
  let { page } = useParams();
  let content;
  switch (page) {
    case 'source-coverage':
      content = <SourceCoverage />;
      break;
    case 'refine-your-search':
      content = <RefineYourSearch />;
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
