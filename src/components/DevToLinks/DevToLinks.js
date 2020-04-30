import React from 'react';
import "./DevToLinks.css";

class DevToLinks extends React.Component {
constructor(props){ 
    super(props);
    this.state = {
        dev_data : [],
       opacity: 0
    }

    }

    async GetDevToData(){ 
        
        let req = await fetch('https://dev.to/api/articles?username=andhop&page=1&per_page=3')
        let response = await req.json();
        this.setState({dev_data : response});      
    }

    componentDidMount(){
        setTimeout(() => {this.setState({opacity : .7})}, 2000);
    }

    render(){
        const cards = [];
        if(this.state.dev_data.length === 0 ){
            this.GetDevToData();
        }
        
                           
        this.state.dev_data.map(article => {
            cards.push(
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="card" style={{ opacity: `${this.state.opacity}`}}>
                    <span className="dev_art_title">{article.title}</span>
                    <div className="dev-art-img" style={{background: `url(${article.cover_image}) no-repeat`}} />
                    <div className="dev-art-descr">{article.description}</div>
                </a>
            );
        });
            
       

        return (
            <div className="content-box"  id="devToArticles">
                <h3>Dev.to Blogs</h3>
                <p>I blog on occasion. Go take a look!</p>
                <div className="content-row">
                    
                    {cards}
                </div>
            </div>
            
        )
    }
}

export default DevToLinks;