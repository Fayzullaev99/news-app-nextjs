function EOM() {
  return (
    <div className="page-container">
        <div>
            <h1>Employee Of The Month</h1>
        </div>
    </div>
  )
}

export const getServerSideProps = async pageContext()=>{
    const apiResponse = await fetch(``)
}

export default EOM