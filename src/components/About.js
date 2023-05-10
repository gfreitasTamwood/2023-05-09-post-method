import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);
        this.FigureContent = this.FigureContent;
    }

    FigureContent(props){
        return(
            <figure>
                <img src={props.src} alt={props.alt}/>
                <figcaption>
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                    <a href={props.link}>{props.link_text}</a>
                </figcaption>
            </figure>
        );
    }

    render(){
        return(
            <section className="about-page">
                <this.FigureContent
                    src="https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="About - 01"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consectetur dolores ab, hic minima maiores sapiente porro facere corporis harum?"
                    link="#"
                    link_text="About-01"
                />
            </section>
        );
    }
}

export default About;