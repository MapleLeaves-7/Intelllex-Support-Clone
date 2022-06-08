import { Breadcrumb, Navigation } from '../../components';
import { convertToId } from '../../utils';
import syncFolders1 from '../../images/stacks/sync-folders-files/sync-folders-1.png';
import syncFolders2 from '../../images/stacks/sync-folders-files/sync-folders-2.png';
import syncFolders3 from '../../images/stacks/sync-folders-files/sync-folders-3.png';
import syncFolders4 from '../../images/stacks/sync-folders-files/sync-folders-4.gif';
import unSyncFolder1 from '../../images/stacks/sync-folders-files/un-sync-your-folder-1.png';
import unSyncFolder2 from '../../images/stacks/sync-folders-files/un-sync-your-folder-2.png';
import uploadFolderFile1 from '../../images/stacks/sync-folders-files/upload-folders-and-files-1.gif';
import uploadFolderFile2 from '../../images/stacks/sync-folders-files/upload-folders-and-files-2.png';
export function SyncFoldersFiles() {
  const sections = [
    'Sync Folders',
    'Delete a Synced Folder or File',
    'Un-Sync Your Folder',
    'Upload Folders and Files',
    'Upload Multiple Sub-folders',
    'Supported File Types',
  ];
  const heading = 'Sync or Upload Your Folders and Files';
  return (
    <main className="subpage-main">
      <div className="subpage-container container-width-breakpoints">
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
              <h2>Sync Folders</h2>
              <p>
                INTELLLEX SYNC is a productivity tool that{' '}
                <strong>mirrors your files on your computer</strong> to your
                INTELLLEX account. Once installed, it runs in the background of
                your desktop, <strong>syncing your files in real-time</strong>{' '}
                whenever changes are made to them on your computer. This saves
                you the effort of manually uploading files onto INTELLLEX.{' '}
              </p>
              <p>
                Once the sync is completed, your files on INTELLLEX will enjoy
                the benefits of being text-searchable, organised according to
                their legal topic and document type, and accessible anywhere as
                long as you are connected to the internet.
              </p>
              <ul className="list-decimal">
                <li>
                  Click on <strong>‘INTELLLEX SYNC’</strong>, which should
                  appear as an icon on your desktop or taskbar (typically at the
                  bottom of your screen).
                </li>
                <li>
                  Click on the <strong>‘Tool’</strong> icon, and select{' '}
                  <strong>‘Sync a new folder’</strong>.
                </li>
                <img src={syncFolders1} alt="Sync a new folder" />
                <li>
                  It will bring you to the <strong>Preferences</strong> page
                  where you may select a listed folder in the viewing panel or
                  choose other folders on your computer
                </li>
                <img src={syncFolders2} alt="Choose folder to sync" />
                <li>
                  After you have selected your folders to sync, click on{' '}
                  <strong>‘Apply’</strong>
                  to start syncing.
                </li>
                <li>
                  You will receive a notification upon the completion of the
                  syncing process. Click on the <strong>Globe icon</strong>, to
                  access your synced files on the INTELLLEX web application.
                </li>
                <img
                  src={syncFolders3}
                  alt="Access synced files in INTELLLEX web application"
                />
                <li>
                  Click on the toggle button to switch between{' '}
                  <strong>‘Synced Files Only’</strong> and{' '}
                  <strong>‘All Assets’</strong>.
                </li>
                <img
                  src={syncFolders4}
                  alt="Switch between 'Synced Files Only' and 'All Assets'"
                />
              </ul>
            </section>

            <section
              id={convertToId(sections[1])}
              className="subpage-content-item"
            >
              <h2>Delete a Synced Folder or File</h2>
              <p>
                If you delete a file or folder in your local selected directory,
                the action will be <strong>mirrored</strong> on your INTELLLEX
                account.
              </p>
              <p>
                However, if you delete a file or folder on your INTELLLEX
                account, the <strong>original file or folder</strong> on your
                local computer <strong>will not be affected</strong>.
              </p>
            </section>

            <section
              id={convertToId(sections[2])}
              className="subpage-content-item"
            >
              <h2>Un-Sync Your Folder</h2>

              <ul className="list-decimal">
                <li>
                  Click on the <strong>‘Tool’</strong> icon on the top panel of
                  INTELLLEX SYNC, and select{' '}
                  <strong>‘Stop Syncing a Folder’</strong>.
                </li>
                <img src={unSyncFolder1} alt="Stop syncing folder" />
                <li>
                  On the <strong>Preferences</strong> page,{' '}
                  <strong>uncheck</strong> the folder(s) you wish to stop
                  syncing and click <strong>‘Apply’</strong>.
                </li>
                <li>
                  A pop-up will appear to check if you would like to{' '}
                  <strong>keep or delete</strong> the folder and its files from
                  the <strong>INTELLLEX web application</strong> after
                  un-syncing the folder. Keeping them on INTELLLEX means that
                  you will still be able to search through the file and folders,
                  but they will cease to be updated on INTELLLEX when they are
                  modified on your computer.
                </li>
                <img
                  src={unSyncFolder2}
                  alt="Keep or delete folers and its files from INTELLLEX web application"
                />
              </ul>
            </section>

            <section
              id={convertToId(sections[3])}
              className="subpage-content-item"
            >
              <h2>Upload Folders and Files</h2>

              <p>There are 2 ways to upload documents on STACKS.</p>
              <h3>Drag and drop the files or a folder to 'Stacks'</h3>
              <ul className="list-decimal">
                <li>
                  On the ‘Stacks’ section, select your files or a folder (not
                  multiple folders) from Finder in Mac or the 'Documents' folder
                  on Windows.
                </li>
                <li>
                  Drag and drop them to the INTELLLEX page window to upload
                  them.
                </li>
                <li>
                  Click on <strong>‘Details’</strong> to see the files which
                  have been successfully uploaded and categorised
                </li>
                <img
                  src={uploadFolderFile1}
                  alt="See which files have been successfully uploaded and categorised"
                />
              </ul>
              <h3>Use the Upload button</h3>
              <ul className="list-decimal">
                <li>
                  On the 'Stacks' section, click on the{' '}
                  <strong>blue ‘Upload’ button</strong>.
                </li>
                <li>
                  A pop-up window will appear and prompt you to select files or
                  a folder (not multiple folders) for upload. Clicking either
                  option will bring you to Finder in Mac or ‘Documents’ folder
                  on Windows.
                </li>
                <li>
                  Click on <strong>‘Details’</strong> to see the files which
                  have been successfully uploaded and categorised.{' '}
                </li>
                <img
                  src={uploadFolderFile2}
                  alt="See which files have been successfully uploaded and categorised"
                />
              </ul>
            </section>

            <section
              id={convertToId(sections[4])}
              className="subpage-content-item"
            >
              <h2>Upload Multiple Sub-folders</h2>
              <p>
                When you drag and drop a folder with multiple sub-level folders
                within, the <strong>folder hierarchy</strong> and{' '}
                <strong>files under each folder</strong> will be{' '}
                <strong>replicated</strong>.
              </p>
              <p>
                For example, if you have a folder named “Companies” that has the
                sub-folders “Waivers” and “Directors”, all files uploaded will
                be organised into their respective folders on INTELLLEX.
              </p>
            </section>

            <section
              id={convertToId(sections[5])}
              className="subpage-content-item"
            >
              <h2>Supported File Types</h2>
              <p>We support the following file types.</p>
              <ul className="list-disc">
                <li>
                  Microsoft files:
                  <ul className="sublist-disc">
                    <li>Word: .DOC, .DOCX and .DOT</li>
                    <li>Excel: .XLS and .XLSX</li>
                    <li>Powerpoint: .PPTX</li>
                  </ul>
                </li>
                <li>Portable Document Format: .PDF</li>
                <li>
                  General file types:
                  <ul className="sublist-disc">
                    <li>CSV</li>
                    <li>Text and rich-text files: .TXT, .TEXT, .RTF</li>
                    <li>HTML files: .HTM. .HTML</li>
                    <li>
                      Open Office files: .ODM, .ODP, .ODS, .ODT, .OTH, .OTP,
                      .OTS and .OTT
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
