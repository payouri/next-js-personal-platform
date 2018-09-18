import LevelItem from './LevelItem';

const LevelLeft = props => {

    let items = null
    if(props.children.length > 1) {
        items = props.children.map((child, i) => (

            <LevelItem key={i}>
                {child}
            </LevelItem>

        ));
    }else {
        items = 
            <LevelItem>
                {props.children}
            </LevelItem>
    }

    return (
        <div className='level-right'>
            {items}
        </div>
    );
}
export default LevelLeft;