import CustomHeading from "../common/CustomHeading";
import CustomInput from "../common/CustomInput";

const data = {
  title: "Let's set up a home for all your work",
  subtitle: "You can always create another workspace later.",
};

export default function WorkspaceInfo() {
  return (
    <div>
      <CustomHeading heading={data.title} subheading={data.subtitle} />
      <CustomInput
        label="Workspace Name"
        placeholder="Eden"
        prefix={false}
        optional={false}
      />
      <CustomInput
        label="Workspace URL"
        placeholder="example"
        prefix={true}
        optional={true}
      />
    </div>
  );
}
