import { useParams } from 'react-router-dom';
import { Banner } from '../../components';
import { Error } from '../Error';
import { SourceCoverage } from './SourceCoverage';
export function Stacks() {
  let { page } = useParams();
  let content;
  switch (page) {
    case 'source-coverage':
      content = <SourceCoverage />;
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
