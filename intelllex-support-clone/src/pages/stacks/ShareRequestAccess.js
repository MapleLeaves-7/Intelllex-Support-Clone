import { Breadcrumb, Navigation } from '../../components';
import { convertToId } from '../../utils';
import firmLibrary1 from '../../images/stacks/share-and-request-for-access/firm-library-1.gif';
import firmLibrary2 from '../../images/stacks/share-and-request-for-access/firm-library-2.png';
import firmLibrary3 from '../../images/stacks/share-and-request-for-access/firm-library-3.png';
import shareWAnotherUser from '../../images/stacks/share-and-request-for-access/share-with-another-user-1.gif';

export function ShareRequestAccess() {
  const sections = [
    "Request for Access to Another User's Resource",
    'Share with Another User',
  ];
  const heading = 'Share and Request for Access';
  return (
    <main className="subpage-main">
      <div className="subpage-container">
        <Breadcrumb pageName={heading} />
        <div className="flex flex-col md:flex-row">
          <Navigation sections={sections} isSubPage={true} />

          <div className="subpage-content">
            <header>
              <h1>{heading}</h1>
              <div className="">Updated on April 01, 2019</div>
            </header>

            <section
              id={convertToId(sections[0])}
              className="subpage-content-item"
            >
              <h2>{sections[0]}</h2>
              <ul className="list-decimal">
                <li>
                  When you search in your Firm's Library, if the resource
                  belongs to you, you can click on the file title to view it. If
                  it belongs to another user in the firm, simply send a request
                  to access it.
                  <img
                    src={firmLibrary1}
                    alt="Request for access from another user"
                  />
                </li>
                <li>
                  When someone requests for permission to a document which you
                  own, you will receive an email notification to approve or deny
                  the request in the notifications panel.
                  <img
                    src={firmLibrary2}
                    alt="Approve or deny requests in notification panel"
                  />
                </li>
                <li>
                  You will receive an email notification when the user has
                  replied to your request.
                </li>
                <li>
                  You can also view recently shared documents in your
                  notifications panel.
                  <img
                    src={firmLibrary3}
                    alt="View recently shared documents in notifications panel"
                  />
                </li>
              </ul>
            </section>

            <section
              id={convertToId(sections[1])}
              className="subpage-content-item"
            >
              <h2>{sections[1]}</h2>
              <ul className="list-decimal">
                <li>
                  Click on the parties' names under the Shared With button to
                  the right of every folder, document or link, and a pop-up
                  window will appear.
                </li>
                <li>
                  Search for an email or name that you want to share with.
                </li>
              </ul>
              <img src={shareWAnotherUser} alt="Share with another user" />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
