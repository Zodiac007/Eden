export default function CustomCard({
  cardTitle,
  cardSubtitle,
  cardIcon,
  handleActive,
  active,
}) {
  return (
    <div
      onClick={handleActive}
      className={`${
        active ? "border-theme-color" : "border-extralight-color"
      } border cursor-pointer lg:p-6 md:p-6 p-4 rounded-md`}
    >
      <span className={`${active ? "cardIconActive" : "cardIcon"} `}>
        {cardIcon}
      </span>
      <h3 className="text-sm font-semibold text-[#43454c]">{cardTitle}</h3>
      <p className="text-xs py-2 pr-6 md:pr-4 lg:pr-4 text-[#919aaa]">
        {cardSubtitle}
      </p>
    </div>
  );
}
