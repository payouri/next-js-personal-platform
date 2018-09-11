const Scroller = props => (
    <div id="scroller" className="icon is-large has-text-grey-light">
        <i className="fa fa-2x fa-angle-down"></i>
        <style jsx>{`
            #scroller {
                border: 2px solid rgba(242, 242, 242, 0.3);
                border-radius: 50%;
                box-shadow: 0 0 4px var(--alt-shadow-color);
                margin-bottom: 20px;
            }
            
            #scroller > i {
                animation: scrollBot 2.5s ease-out infinite;
            }
            @keyframes scrollBot {
                0%,
                15%,
                85%,
                100% {
                    transform: translate(0%, -33.333%);
                    opacity: 1;
                }
                50%,
                84.99% {
                    transform: translate(0%, 33.333%);
                }
                85% {
                    opacity: 0;
                }
            }
        `}</style>
    </div>
);

export default Scroller;