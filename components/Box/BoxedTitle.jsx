import Background from '../Backgrounds/BackgroundContainer';
import AspectRatio from '../Layouts/AspectRatio/AspectRatio';
import Title from '../Content/Title/Title';

import './BoxedTitle.css';

const BoxedTitle = props => {
    const {title = {}, background = {}, ratio} = props || this.defaultProps;
    return (
        <div className={`with-background${title.position?' has-title-' + title.position:''}`}>
            <Background {...background}>
                <AspectRatio ratio={ratio}>
                    <Title {...title}/>
                </AspectRatio>
            </Background>
        </div>
    )
}

BoxedTitle.defaultProps = {
    title: {
        title: 'Title with background',
        position: 'bottom',
    }
}

export default BoxedTitle;