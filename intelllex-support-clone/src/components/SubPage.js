import { Banner } from '../components';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';

export function SubPage() {
  let sections = [
    { id: 'legal-commentaries', heading: 'Legal Commentaries' },
    { id: 'cases', heading: 'Cases' },
  ];
  let title = 'SOURCE+ Coverage';
  let updatedDate = { day: '14', month: 'April', year: '2022' };
  let content = (
    <div>
      Testing this out 123 <div>testing this some more</div>
    </div>
  );
  return (
    <>
      <Banner main={false} />
      <div className="breadcrumb">
        <Link to="/">Support</Link>
        <span>&gt;</span>
        <span>{title}</span>
      </div>
      <div className="main-part">
        <div className="main-section">
          <Navigation sections={sections} isSubPage={true} />
          <div className="main-content">
            <h1>{title}</h1>
            <div>
              Updated on {updatedDate.month} {updatedDate.day},{' '}
              {updatedDate.year}
            </div>
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
