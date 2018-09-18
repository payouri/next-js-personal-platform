import {Component} from 'react';
import Layout from '../components/Layouts/Default/Default';
import Container from '../components/Layouts/Section/Section';
import Section from '../components/Layouts/Container/Container';
import Button from '../components/Elements/Button';
import Checkbox from '../components/Elements/Checkbox';
import Radio from '../components/Elements/Radio';

class TestPage extends Component {

    render() {
        return (
            <>
                <Layout>
                    <Section>
                        <Container>
                            <Button>Haaeade</Button>
                            <Checkbox name='sfd' disabled>Haaeade</Checkbox>
                            <Radio name='truc'>Haaeade</Radio>
                            <Radio name='truc'>Haaeade</Radio>
                        </Container>
                    </Section>
                </Layout>
            </>
        );
    }

};

export default TestPage;