import Link from 'next/link';
import style from './jobcard.module.scss';
const JobCard = ({ job }) => {
  const { jobTitle, excerpt, slug } = job.fields;
  console.log(job);
  return (
    <div itemScope itemType="https://schema.org/JobPosting" className={style.jobcard}>
      <h2 itemProp="title">{jobTitle}</h2>
      <p itemprop="description">{excerpt}</p>

      <Link href={`/jobs/${slug}`}>
          <a>About Us</a>
        </Link>

    </div>
  );
};
export default JobCard;
