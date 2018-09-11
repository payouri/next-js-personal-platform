import './FeaturedArea.css';
import {Component} from 'react';

class FeaturedPosts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activePost: 1,
            count: this.props.posts.length
        }
        
        this.handleClick = e => {
    
            const post = Number(e.target.getAttribute('data-target'));
            this.setState({activePost: post})
    
        }
    }
    render() {
        return (
            <div className="hero is-small is-dark">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <ul className="columns is-gapless is-mobile">
                                { this.props.posts.map( (post, i) => 
                                    <li key={i} className={`column is-6${this.state.activePost === i ? ' is-active' : '' }`}> 
                                        <div className="box has-background-dark is-radiusless" style={{background: `url('${post.cover? post.cover : ''}') center/cover no-repeat`}}>
                                            <div className="title has-text-white">
                                                {post.title}
                                            </div>
                                        </div>
                                    </li> 
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="level">
                        <div className="level-item">
                            <div className="pagination is-small is-rounded">
                                <ul className="pagination-list">
                                    { this.props.posts.map( (post, i) => 
                                        <li key={i}> 
                                            <button data-target={i} onClick={this.handleClick} className={`pagination-link${this.state.activePost === i ? ' is-current' : '' }`}></button> 
                                        </li> 
                                    )}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};

export default FeaturedPosts;