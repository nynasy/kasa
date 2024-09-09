import "../styles/components/Rate.scss"


function Rate(props) {
    console.log(props.rate);

    const displayRate = () => {
        let spans = [] 
        for(var i=1; i<=5; i++){
            console.log(i);
            if (props.rate >= i ) {
                spans.push(<span className="fa fa-star checked"></span>);
            } else {
                spans.push(<span className="fa fa-star"></span>);
            }
        }
        return spans;
      };
 
    return (
         <div className="stars">
            {displayRate()}
        </div>
    )
}
  
export default Rate;