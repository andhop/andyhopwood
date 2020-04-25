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
        this.setState({opacity : 1});
    }

    render(){
        const cards = [];
        if(this.state.dev_data.length === 0 ){
            this.GetDevToData();
        }
        
                           
        this.state.dev_data.map(article => {
            cards.push(
                <div className="card" style={{ opacity: `${this.state.opacity}`}}>
                    <span className="dev_art_title">{article.title}</span>
                </div>
            );
        });
            
       

        return (
            <div id="devToArticles" className="content-row">
                {cards}
            </div>
            
        )
    }
}

export default DevToLinks;