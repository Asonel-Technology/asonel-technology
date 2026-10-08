import PageHeader from "../components/common/PageHeader";
import { teamIntro } from "../data/team";
import usePageTitle from "../utils/usePageTitle";

export default function Team() {
  usePageTitle("Team");

  return <PageHeader eyebrow={teamIntro.eyebrow} title={teamIntro.title} text={teamIntro.text} />;
}
