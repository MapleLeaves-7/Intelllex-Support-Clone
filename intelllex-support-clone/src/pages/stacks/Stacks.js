import { useParams } from 'react-router-dom';
import { Error } from '../Error';
import { SourceCoverage } from './SourceCoverage';
export function Stacks() {
  let { page } = useParams();
  switch (page) {
    case 'source-coverage':
      return <SourceCoverage />;
    default:
      return <Error />;
  }
}
