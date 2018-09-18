import LevelLeft from './LevelLeft';
import LevelItem from './LevelItem';
import { isArray } from 'util';


const Level = props => {

    const items = props.children && props.children.map((child, i) => (
        <LevelItem key={i}>
            {child}
        </LevelItem>
    ))

    return (
        <div className={`level${' ' + props.classnames}`}>
            {props.left
                ?
                <LevelLeft>
                    {props.left}
                </LevelLeft>
                : null }
            {items}
            {props.right
                ?
                    <div className="level-right">
                        {props.right}
                    </div>
                : null }
        </div>
    );

}

export default Level;