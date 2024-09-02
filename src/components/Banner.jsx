import  "../styles/Banner.scss"


export default function Banner(props) {
    return (
        <div 
            className="banner" 
            style={{ 
                backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.5), 
                rgba(0, 0, 0, 0.5)), 
                url(${props.img})` 
            }} 
            alt="banniere"
        >
            <h1>{props.title}</h1>             
        </div>
    );
}
