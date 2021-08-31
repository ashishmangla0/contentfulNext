import Link from "next/link";
import style from "./jobcard.module.scss";
const JobCard = ({ job }) => {
  console.log(job.fields);
  const { jobTitle, excerpt, slug,location,Dated} = job.fields;
  return (
    <div
      itemScope
      itemType="https://schema.org/JobPosting"
      className={style.jobcard}
    >
      <h2 itemProp="title">{jobTitle}</h2>
      <p itemProp="description">{excerpt}</p>
      <div itemProp="jobLocation" itemprop="jobLocation" itemscope itemtype="https://schema.org/Place">{location}</div>
      <div itemProp="datePosted">{Dated}</div>

      <Link href={`/jobs/${slug}`}>
        <a>View Detail</a>
      </Link>
    </div>
  );
};
export default JobCard;
