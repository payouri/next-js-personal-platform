import { Component } from 'react';
import Error from 'next/error';
import { withRouter } from 'next/router';


import Layout from '../../../components/Layouts/Default/Default';
import Container from '../../../components/Layouts/Container/Container';
import Section from '../../../components/Layouts/Section/Section';
import Loader from '../../../components/Loader/Loader'
import Card from '../../../components/Card/Card';
import Title from '../../../components/Content/Title/Title';


class ProjectPage extends Component {


    async getInitialProps({req}) {

        return {
            query: req?req.url:'',

        }

    }

    async componentDidMount() {
        const project = await fetch('http://localhost:3002/pays/' + this.props.router.query.id).then(res => res.json());
        if(project && project.message != 'Not Found')
            this.setState({project: project[0]});
        else
            this.setState({error: 404})
    }

    constructor(props) {
        super(props);
        this.state = {
            project: {},
            error: null,
        }
    }
    
    render() {
        const {query} = this.props.router;
        if(query.id && this.state.error == null) {
            return (
                <Layout>
                    <Section>
                        <Container>
                            {Object.keys(this.state.project).length > 0
                                ?
                                <Card header={this.state.project.nom ? this.state.project.nom : ''}>
                                    <ul>
                                        {Object.keys(this.state.project).map((prop, i) =>(
                                            prop!='nom'&&prop!='_id'&&prop!='__v'?<li key={i}>{prop}: {this.state.project[prop]}</li>:''
                                            ))}
                                    </ul>
                                </Card>
                                :
                                <Loader/>
                            }
                        </Container>
                    </Section>
                </Layout>
            )
        }
        else {
            return(
                <Error statusCode={this.state.error}/>
            )
        }
    }

}

export default withRouter(ProjectPage);