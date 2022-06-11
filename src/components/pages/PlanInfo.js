import { useState } from "react";
import CustomHeading from "../common/CustomHeading";
import CustomCard from "../common/CustomCard";
import UserIcon from "../../icons/UserIcon";
import TeamIcon from "../../icons/TeamIcon";

const data = {
  title: "How are you planning to use Eden?",
  subtitle: "We'll streamline your setup experience accordingly.",
};

export default function PlanInfo() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };
  const cardData = [
    {
      id: 1,
      cardTitle: "For Myself",
      cardSubtitle: "Write better, think more clearly, Stay organized.",
      cardIcon: <UserIcon />,
      active: !active,
    },
    {
      id: 2,
      cardTitle: "With my team",
      cardSubtitle: "Wikis, docs, tasks & projects, all in one place.",
      cardIcon: <TeamIcon />,
      active: active,
    },
  ];
  return (
    <div>
      <CustomHeading heading={data.title} subheading={data.subtitle} />
      <div className="grid grid-cols-2 gap-4 px-0 md:px-32 lg:px-32">
        {cardData.map((item) => (
          <CustomCard
            key={item.id}
            cardTitle={item.cardTitle}
            cardIcon={item.cardIcon}
            cardSubtitle={item.cardSubtitle}
            handleActive={handleActive}
            active={item.active}
          />
        ))}
      </div>
    </div>
  );
}
