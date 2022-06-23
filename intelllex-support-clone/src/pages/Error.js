import { Banner } from '../components';
export function Error() {
  return (
    <>
      <Banner isMainPage={true} />
      <main className="flex justify-center mb-14">
        <div className="flex flex-col md:flex-row gap-6 pt-16 md:pt-20 container-width-breakpoints">
          <div className="flex flex-col">
            <h1 className="font-primary font-bold text-3xl">
              404 Page Not Found
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
