export default function CustomInput({ label, placeholder, prefix, optional }) {
  return (
    <div className="col-span-3 sm:col-span-2 my-6 px-0 lg:px-32 md:px-32">
      <label
        htmlFor="company-website"
        className="block text-sm font-semibold text-gray-700"
      >
        {label}
        <span className="text-subtitle-color">{optional && " (optional)"}</span>
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        {prefix ? (
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            www.eden.com/
          </span>
        ) : null}
        <input
          type="text"
          name="company-website"
          id="company-website"
          className={`focus:ring-[#6653e2] focus:border-[#6653e2] flex-1 block w-full ${
            prefix ? "rounded-r-md rounded-none" : "rounded-md"
          } sm:text-sm border-gray-300`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
