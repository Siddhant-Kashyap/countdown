
const Card = (props) => {
  return (
    <>
    <div style={{border:"1px solid" ,margin:"5px" ,borderRadius:"5px",height:"200px",width:"200px" ,background:"linear-gradient(49deg, rgba(205,0,245,1) 0%, rgba(25,139,218,1) 57%, rgba(0,212,255,1) 100%)"}}>
        <div style={{
            display:"flex",justifyContent:"center",alignItems:"center",height:"50%"
        }}> 
          <h1>10</h1>
          
        </div>
        <h3  style={{
            textAlign:"center"
        }}>
            {props.type}
        </h3>
    </div>
    </>
  )
}

export default Card