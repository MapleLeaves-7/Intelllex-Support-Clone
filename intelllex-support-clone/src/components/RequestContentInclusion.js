export function RequestContentInclusion({ caption }) {
  return (
    <div className="pt-6 pb-4 font-content font-bold italic text-dark-gray">
      <p>
        {caption}
        <a
          href="mailto:support@intelllex.com"
          className="text-blue-700 underline active:text-red-500"
        >
          support@intelllex.com
        </a>
      </p>
    </div>
  );
}
