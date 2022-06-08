import { useParams } from 'react-router-dom';
import { Banner } from '../../components';
import { Error } from '../Error';
import { CategoriesManagement } from './CategoriesManagement';
export function Admin() {
  let { page } = useParams();
  let content;
  switch (page) {
    case 'categories-management':
      content = <CategoriesManagement />;
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
