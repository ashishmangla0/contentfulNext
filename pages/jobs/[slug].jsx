import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENT_SPACE_ID,
  accessToken: process.env.CONTENT_ACCESS_TOKEN,
})


// export const getStaticPaths = async () => {
//   const res = await client.getEntries({ content_type: "jobTitle" });
//   //return { props: { jobs: res.items } };
//   const paths = res.items.map((item) => {
//     return {
//       params: { slug: item.fields.slug },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export  const getServerSideProps = async({params}) => {
 
  const {items} = await client.getEntries(
    { content_type: "jobTitle",
    'fields.slug' : params.slug
  });

  return { 
    props: { job: items[0]} ,
    notFound: true,
  };
}

// export async function getServerSideProps() {
//   const res = await client.getEntries({ content_type: "jobTitle" });

//   return { props: { jobs: res.items } };
// }
const JobDetail = ({job}) => {
  console.log(job);
  const { jobTitle, excerpt, slug,location,Dated,hiringFor} = job.fields;


  return <div>Recipe Details

{jobTitle}

  </div>;
};
JobDetail.layout = "MainLayout";

export default JobDetail;
