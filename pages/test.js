import {Component} from 'react';
import Container from '../components/Layouts/Section/Section';
import Layout from '../components/Layouts/Default/Default';
import Section from '../components/Layouts/Container/Container';
import Card from '../components/Card/Card';
import LazyImg from '../components/LazyLoad/LazyImg';
import Button from '../components/Elements/Button';
class TestPage extends Component {

    render() {
        return (
            <>
                <Layout>
                    <Section>
                        <Container>
                            
                        </Container>
                    </Section>
                </Layout>
            </>
        );
    }

};

export default TestPage;