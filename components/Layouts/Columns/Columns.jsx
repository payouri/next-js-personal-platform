import PropTypes from 'prop-types';

import './Columns.css';

const Columns = (props) => {
    
    const {classnames, multiline, centered, mobile, variable, children = [], sizes, gap} = props;
    
    return (
        <div className={`columns${classnames?' ' + classnames:''}${multiline?' is-multiline':''}${centered?' is-centered':''}${mobile?' is-mobile':''}${variable?' is-variable':''}`}>
            {children.length > 1
                ? 
                children.map( (child, i) => 
                    <div key={i} className={`column${sizes[i%sizes.length]?' is-'+sizes[i%sizes.length]:''}`}>
                        { child }
                    </div>
                )
                :
                <div className={`column${sizes && sizes[0]?' is-'+sizes[0]:''}`}>
                    { children }
                </div>
            }
        </div>
    )
};

Columns.propTypes = {
    
    'classnames': PropTypes.string,
    'sizes': PropTypes.array
};

export default Columns;