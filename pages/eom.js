import Toolbar from '@/components/toolbar'
import styles from '../styles/Eom.module.css'
function Eom({employee}) {
  return (
    <div className="page-container">
    <Toolbar />
        <div className={styles.main}>
            <h1>Employee Of The Month</h1>
            <div className={styles.employee}>
                <h3>{employee.name}</h3>
                <h6>{employee.position}</h6>
                <img src={employee.image} />
                <p>{employee.description}</p>
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext)=>{
    const apiResponse = await fetch(`https://my-json-server.typicode.com/Fayzullaev99/news-app-nextjs/employeeOfTheMonth`)
    const employee = await apiResponse.json()
    return {
        props:{
            employee,
        }
    }
}

export default Eom