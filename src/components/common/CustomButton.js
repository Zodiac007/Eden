export default function CustomButton({ text, pageNext }) {
  return (
    <div className="mt-8 px-0 md:px-32 lg:px-32 ">
      <button
        onClick={pageNext}
        className="w-full flex items-center justify-center rounded-md border border-transparent bg-[#6653e2] px-6 py-2 text-base font-normal text-white shadow-sm hover:bg-indigo-700"
      >
        {text}
      </button>
    </div>
  );
}
