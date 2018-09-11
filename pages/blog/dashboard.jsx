import {Component} from 'react';
import propTypes from 'prop-types';
import posts from '../../placeholderData/posts';
import DefaultLayout from '../../components/Layouts/Default/Default';
import Columns from '../../components/Layouts/Columns/Columns';
import Container from '../../components/Layouts/Container/Container';
import Section from '../../components/Layouts/Section/Section';
import Menu from '../../components/Menu/Menu';
import PostEditor from '../../components/PostEditor/PostEditor';
import PostListTable from '../../components/PostList/PostListTable';

import './dashboard.css';

class DashboardPage extends Component {

    static async getInitialProps(req) {

        const { body } = req;

        // console.log(req);

        // console.log(body);
        return { posts, body};

    }
    
    swapView() {

    }
    
    swapViewState(e) {

        const toolNames = this.state.tools.map( tool => ( tool.available ? tool.name : '' ));

        if(toolNames.indexOf(this.state.view) !== -1) {

            let newView = e.target.getAttribute('data-target');
            this.setState({view: newView}, this.swapView());

        }



    }

    constructor(props) {

        super(props);

        this.state = {
            tools: [
                {
                    name: 'CreatePost',
                    title: 'Ecrire un Nouveau Post',
                    href: '#createPost',
                    action: this.swapViewState.bind(this),
                    available: true
                },
                {
                    name: 'EditPost',
                    title: 'Editer un Post Existant',
                    href: '#editPost',
                    action: this.swapViewState.bind(this),
                    available: true
                },
                {
                    name: 'PostsList',
                    title: 'Consulter les Posts',
                    href: '#postsList',
                    action: this.swapViewState.bind(this),
                    available: true
                }
            ],
            view: 'CreatePost'
        }
        
    }
    static propTypes = {
        
    }
    render() {
        return (
            <DefaultLayout>
                <Container classnames=''>
                    <Section classnames='blog-dashboard'>
                        <Columns sizes={[3, 9]}>
                            <Menu title='Tableau de bord du Blog' links={this.state.tools}/>
                            { 
                                this.state.view === 'CreatePost' 
                                    ? <PostEditor/> 
                                    : this.state.view === 'PostsList' 
                                        ? <PostListTable posts={posts}/> 
                                        : ''
                            }
                        </Columns>
                    </Section>
                </Container>
            </DefaultLayout>
        )
    }

}

export default DashboardPage;