const JobCard = ({title}) =>{
 return(
     <div itemScope itemType="https://schema.org/JobPosting">
            <h2 itemProp="title">{title}</h2>
     </div>
 )
}
export default JobCard