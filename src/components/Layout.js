import EdenLogo from "../icons/EdenLogo";

export default function Layout({ children }) {
  return (
    <div className="max-w-none md:max-w-screen-lg lg:max-w-screen-xl py-16 px-10 md:px-1 lg:px-80 mx-4 md:mx-12 lg:mx-auto my-28 md:my-40 lg:my-16 bg-white">
      <div className="">
        <div className="flex justify-center items-center layoutLogo">
          <EdenLogo />
          <h2 className="text-2xl font-bold traking-[.6px] text-center pl-2">
            Eden
          </h2>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
