const BackgroundContainer = props => (
    <div style={{background: `url('${props.url}' center / cover)`}}>{props.children}</div>
)