import {Component} from 'react';
import Layout from '../components/Layouts/Default/Default';
import Container from '../components/Layouts/Section/Section';
import Section from '../components/Layouts/Container/Container';
import Button from '../components/Elements/Button';
import Checkbox from '../components/Elements/Checkbox';
import Radio from '../components/Elements/Radio';
import Label from '../components/Elements/Label';
import Input from '../components/Elements/Input';
import File from '../components/Elements/InputFile';
import Form from '../components/Elements/Form';

class TestPage extends Component {

    render() {
        return (
            <>
                <Layout>
                    <Section>
                        <Container>
                            <Button classnames=''>Haaeade</Button>
                            <Checkbox name='sfd' disabled>Haaeade</Checkbox>
                            <Radio name='truc'>Haaeade</Radio>
                            <Radio name='truc'>Haaeade</Radio>
                            <Label>
                                My Input
                            </Label>
                            <File classnames hasName>
                                Votre CV
                            </File>
                            <Form>
                                <Input></Input>
                                <Input></Input>
                            </Form>
                        </Container>
                    </Section>
                </Layout>
            </>
        );
    }

};

export default TestPage;