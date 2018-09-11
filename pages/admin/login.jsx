import DefaultLayout from '../../components/Layouts/Default/Default';
import Container from '../../components/Layouts/Container/Container';
import Login from '../../components/Login/Login';

const LoginPage = props => (
    <DefaultLayout>
        <Container classnames='is-fluid'>
            <Login/>
        </Container>
    </DefaultLayout>
);

export default LoginPage;