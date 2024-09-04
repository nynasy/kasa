import "../styles/Host.scss"


function Host(props) {
    const host = props.host;
        
    return (     
      <div className="hostInfo">
          <p>{host.name}<br/>test</p>
          <img src=""alt="" />        
      </div>
    )
}
  
export default Host;