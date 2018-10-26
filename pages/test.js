import {Component} from 'react';
import Layout from '../components/Layouts/Default/Default';
import Container from '../components/Layouts/Section/Section';
import Section from '../components/Layouts/Container/Container';
import Columns from '../components/Layouts/Columns/Columns';

import ContactForm from '../components/ContactForm/ContactForm';
import Table from '../components/Elements/Table';
import TableHead from '../components/Elements/Table/TableHead';
import TableRow from '../components/Elements/Table/TableRow';
import Accordion from '../components/Accordion/Accordion';

class TestPage extends Component {

    render() {
        return (
            <>
                <Layout>
                    <Section>
                        <Container>
                            {/* <Columns sizes={[4, 4, 4]}> */}
                                <Accordion>
                                </Accordion>
                                <Accordion>
                                </Accordion>
                                <Accordion>
                                </Accordion>
                            {/* </Columns> */}
                        </Container>
                    </Section>
                </Layout>
            </>
        );
    }

};

export default TestPage;