const lazyLoad = {
    images: function() {
        const imgs = document.querySelectorAll('img').map(img => img.getAttribute('data-src'));
        onImgIntersect = (imgs, observer) => {


                imgs.forEach(img => {
                    if (img.isIntersecting) {

                        let imgNode = img.target;
                        imgNode.src = imgNode.getAttribute('data-src');
                        imgsOberver.unobserve(imgNode);
                        imgNode.onload = e => {

                            imgNode.parentNode.classList.remove('loading');
                            e.target.onload = '';
                        };

                    }
                })

            },
            intersectOpts = {
                root: null,
                rootMargin: '0px 0px 0px',
                threshold: [.01]
            },
            imgsOberver = new IntersectionObserver(onImgIntersect, intersectOpts);

        imgs.forEach(img => {
            imgsOberver.observe(img);
        })
    },
}

export default lazyLoad;
