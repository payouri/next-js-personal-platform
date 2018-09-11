const IconBar = props => {

    const handleClick = e => {

        const button = e.target,
            action = button.getAttribute('data-action');

    }

    return (

        <div className="button-bar">
            <style jsx>{`.button-bar{display: flex; align-items: center; justify-content: center; padding: .25rem 0} .buttons{ margin: 0 .4rem !important;} .button > span {pointer-events: none}`}</style>
            <p className='buttons'>
                <button onClick={props.onClick} className='button' data-action='bold' title='bold'>
                    <span className='icon is-small'>
                        <i className='fas fa-bold'></i>
                    </span>
                </button>
                <button onClick={props.onClick} className='button' data-action='italic' title='italic'>
                    <span className='icon is-small'>
                        <i className='fas fa-italic'></i>
                    </span>
                </button>
                <button onClick={props.onClick} className='button' data-action='underline' title='underline'>
                    <span className='icon is-small'>
                        <i className='fas fa-underline'></i>
                    </span>
                </button>
            </p>
            <div className='buttons has-addons'>
                <button onClick={props.onClick} className='button' data-action='alignment' data-modifier='left' title='left'>
                    <span className='icon is-small'>
                        <i className='fas fa-align-left'></i>
                    </span>
                </button>
                <button onClick={props.onClick} className='button' data-action='alignment' data-modifier='center' title='center'>
                    <span className='icon is-small'>
                        <i className='fas fa-align-center'></i>
                    </span>
                </button>
                <button onClick={props.onClick} className='button' data-action='alignment' data-modifier='right' title='right'>
                    <span className='icon is-small'>
                        <i className='fas fa-align-right'></i>
                    </span>
                </button>
                <button onClick={props.onClick} className='button' data-action='alignment' data-modifier='justify' title='justify'>
                    <span className='icon is-small'>
                        <i className='fas fa-align-justify'></i>
                    </span>
                </button>
            </div>
            <p className='buttons'>
                <button onClick={props.onClick} className='button' data-action='link' title='link'>
                    <span className='icon is-small'>
                        <i className='fas fa-link'></i>
                    </span>
                </button>
                <button onClick={props.onClick} className='button' data-action='image' title='image'>
                    <span className='icon is-small'>
                        <i className='fas fa-image'></i>
                    </span>
                </button>
                <button onClick={props.onClick} className='button' data-action='yt-embed' title='youtube embed'>
                    <span className='icon is-small'>
                        <i className='fab fa-youtube'></i>
                    </span>
                </button>
            </p>
            <p className='buttons'>
                <button onClick={props.onClick} className='button' data-action='code' title='code'>
                    <span className='icon is-small'>
                        <i className='fa fa-code'></i>
                    </span>
                </button>
            </p>
        </div>

    );


}

export default IconBar;