import './Card.css';

const Card = props => {

    const {header, body, footer, image, children, ...rest} = props;

    return (
        <div className='card'>
            {header
            ? 
                <div className="card-header">
                    {typeof header == 'string'
                    ?
                        <div className="card-header-title">{header}</div>
                    :
                        header
                    }
                </div>
            :
                ''
            }
            {image
            ?
                <div className="card-image">
                    {image}
                </div>
            :
                ''
            }
            {body || children
            ?
                <div className="card-content">
                    {body || children}
                </div>
            :
                ''
            }
            {footer
            ?
                <div className="card-footer">
                    {!Array.isArray(footer)
                        ?
                            <div className="card-footer-item">{footer}</div>
                        :
                            footer.map((el, i) => <div className="card-footer-item" key={i}>{el}</div>)
                    }
                </div>
            :
                ''
            }
        </div>
    )
}

export default Card;