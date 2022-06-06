import { Link } from 'react-router-dom';
export function Breadcrumb({ pageName }) {
  return (
    <div className="-ml-4 font-primary">
      <Link to="/" className="text-blue-600">
        Support
      </Link>
      <span className="px-1 text-gray-400">{'>'}</span>
      <span className="font-normal text-dark-gray">{pageName}</span>
    </div>
  );
}
