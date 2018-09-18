import PropTypes from 'prop-types';

import './Columns.css';

const Columns = (props) => (
    
    
    <div className={`columns${' ' + props.classnames}`}>
        {props.children.length > 1
            ? 
            props.children.map( (child, i) => 
                <div key={i} className={`column${props.sizes[i]?' is-'+props.sizes[i]:''}`}>
                    { child }
                </div>
            )
            :
            <div className={`column${props.sizes && props.sizes[0]?' is-'+props.sizes[0]:''}`}>
                { props.children }
            </div>
        }
    </div>

);

Columns.propTypes = {
    
    'classnames': PropTypes.string,
    'sizes': PropTypes.array
};

export default Columns;