import Link from "next/link";
import style from "./jobcard.module.scss";
const JobCard = ({ job }) => {
  console.log(job.fields);
  const { jobTitle, excerpt, slug,location,Dated,hiringFor} = job.fields;
  return (
    <div
      itemScope
      itemType="https://schema.org/JobPosting"
      className={style.jobcard}
    >
      <h2 itemProp="title">{jobTitle}</h2>
      <p itemProp="description">{excerpt}</p>
      
      <div itemProp="datePosted">{Dated}</div>

      <Link href={`/${slug}`}>
        <a>View Detail</a>
      </Link>

      {hiringFor}
    <p>
      <strong>Location:</strong> 
      <span itemProp="jobLocation" itemScope itemType="https://schema.org/Place">
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        {location}
         
          
        </span>
      </span>
    </p>
    </div>
  );
};
export default JobCard;
