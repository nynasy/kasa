import  "../styles/components/Banner.scss"


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
            <p><span>{props?.title?.split(",")[0]},</span><span>{props?.title?.split(",")[1]}</span></p>             
        </div>
    );
}
