import { Component } from 'react';
import Error from 'next/error';
import { withRouter } from 'next/router';


import Layout from '../../../components/Layouts/Default/Default';
import Container from '../../../components/Layouts/Container/Container';
import Section from '../../../components/Layouts/Section/Section';


class ProjectPage extends Component {


    static getInitialProps({req}) {

        const query = req.url.indexOf('?') != -1 ? req.url.substring(req.url.indexOf('?')) : undefined;

        // const project = await fetch('http://localhost:3002/pays/'+this.props.router.query.id).then(res => res.json());
        return {test: query};

    }

    componentDidMount() {
        // console.log(this.props.router);
    }

    constructor(props) {
        super(props);
        // console.log(props);
    }
    
    render() {
        const {query} = this.props.router;
        if(query.id)
            return (
                <Layout>
                    <Section>
                        <Container>
                            {
                                //ProjectPage
                            }
                        </Container>
                    </Section>
                </Layout>
            )
        else {
            return <Error></Error>
        }
        
    }

}

export default withRouter(ProjectPage);