import CustomHeading from "../common/CustomHeading";
import CheckIcon from "../../icons/CheckIcon";

const data = {
  title: "Congratulations, Eren!",
  subtitle: "You have completed onboarding, you can start using the Eden!",
};

export default function CongratsPage() {
  return (
    <div>
      <span className="flex justify-center checkIcon">
        <CheckIcon className="bg-red-900" />
      </span>
      <CustomHeading heading={data.title} subheading={data.subtitle} />
    </div>
  );
}
