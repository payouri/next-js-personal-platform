import FAIcon from './Icons/FAIcon';
import Button from './Button';

const IconButton = props => (
    
    <Button classNames={'icon-button'} {...props}>
        <FAIcon icon={props.icon}/>
    </Button>

);

export default IconButton;