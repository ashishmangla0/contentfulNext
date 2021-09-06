import Head from "next/head";
import { createClient } from "contentful";
import Container from "../../components/container/Container";
import Section from "../../components/section/Section";
import Error from "../_error";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import style from './jobdetail.module.scss';

const client = createClient({
  space: process.env.CONTENT_SPACE_ID,
  accessToken: process.env.CONTENT_ACCESS_TOKEN,
});

export const getServerSideProps = async ({ params, notFound = true }) => {
  const { items } = await client.getEntries({
    content_type: "jobTitle",
    "fields.slug": params.slug,
  });

  return {
    props: {
      notFound,
      job: items[0] ? items[0] : null,
    },
  };
};

const JobDetail = ({ job }) => {
  if (!job) return <Error statusCode={40412}>mere pass job nahi hai </Error>;
  const { jobTitle, location,excerpt, Dated, hiringFor, body } = job.fields;
  return (
    <>
       <Head>
        <title>{jobTitle}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <Section >
        <Container>
          <div className="row">
            <div className="col-md-9" itemScope
      itemType="https://schema.org/JobPosting" >
              <h1 className={style.jobdetail__title} itemProp="title">{jobTitle}</h1>
              {location}
              <div className={style.jobdetail__details}>
              {documentToReactComponents(body)}
              </div>
            </div>
            <div className="col-md-3">
              asdfd fsa dfsdf
              ads fdsa
              f sdf
              s
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
JobDetail.layout = "MainLayout";

export default JobDetail;
