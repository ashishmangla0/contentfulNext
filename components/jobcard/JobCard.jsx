import Link from 'next/link';
import style from './jobcard.module.scss';
const JobCard = ({ job }) => {
  const { jobTitle, excerpt, slug } = job.fields;
  return (
    <div  itemScope itemType="https://schema.org/JobPosting" className={style.jobcard}>
      <h2 itemProp="title">{jobTitle}</h2>
      <p itemProp="description">{excerpt}</p>

      <Link href={`/jobs/${slug}`}>
          <a>View Detail</a>
        </Link>

    </div>
  );
};
export default JobCard;
