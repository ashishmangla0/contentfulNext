import style from './section.module.scss'
const Section = ({children,classes}) =>{
    return(
        <section className={`${style.section}`}  >
            {children}
        </section>
    )

}
export default Section