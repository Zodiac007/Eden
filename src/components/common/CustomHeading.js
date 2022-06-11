export default function CustomHeading({ heading, subheading }) {
  return (
    <div className="my-12">
      <h1 className="text-3xl text-title-color font-bold text-center">
        {heading}
      </h1>
      <h3 className="text-sm font-medium text-[#919aaa] text-center py-3">
        {subheading}
      </h3>
    </div>
  );
}
