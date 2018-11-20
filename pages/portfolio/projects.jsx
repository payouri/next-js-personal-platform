import { Component } from 'react';

import fetch from 'isomorphic-fetch';
import propTypes from 'prop-types';

import Link from 'next/link';
import Container from '../../components/Layouts/Section/Section';
import Layout from '../../components/Layouts/Default/Default';
import Section from '../../components/Layouts/Container/Container';
import Grid from '../../components/Layouts/Grid/Grid';
import Card from '../../components/Card/Card';

class ProjectsPage extends Component {
    static async getInitialProps() {
        const projects = await fetch('http://localhost:3002/pays').then(res => res.json());

        return {countries: projects.countries};
    }
    render() {
        console.log(this.props)
        return (
            <>
                <Layout>
                    <Section>
                        <Container>
                            <h1 className='title'>Projects Page</h1>
                            <Grid cols='repeat(3, 1fr)'>
                                {this.props.countries.map((country, i)=> (
                                    <Card
                                        key={i}
                                        header={country.nom}
                                        footer={<Link href={'./projects/project?id='+country.id}><a>Aller à la fiche</a></Link>}
                                    />
                                ))}
                            </Grid>
                        </Container>
                    </Section>
                </Layout>
            </>
        )
    }
}

export default ProjectsPage;