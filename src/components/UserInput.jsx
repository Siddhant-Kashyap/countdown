const UserInput = () => {
  return (
    <div >
      <input style={{
        border:"1px",
        padding:"5px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius:"5px"
    }} type="datetime-local" id="countdown-time" name="countdown-time" />
    <br/>
    <button onClick={()=>{console.log("Hello world")}} style={{
        backgroundColor:"rgba(255,255,255,0.5)",
        border:"1px solid",
        borderRadius:"5px",
        padding:"8px",
        margin:"10px",
        cursor:"pointer"
    }} >Start</button>
    </div>
  );
};

export default UserInput;
