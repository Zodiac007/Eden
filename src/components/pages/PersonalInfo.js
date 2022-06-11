import CustomHeading from "../common/CustomHeading";
import CustomInput from "../common/CustomInput";

const data = {
  title: "Welcome! First thing first...",
  subtitle: "You can always change them later.",
};

export default function PersonalInfo() {
  return (
    <div>
      <CustomHeading heading={data.title} subheading={data.subtitle} />
      <CustomInput label="Full Name" placeholder="Steve Jobs" prefix={false} />
      <CustomInput label="Display Name" placeholder="Steve" prefix={false} />
    </div>
  );
}
