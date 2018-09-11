import readableDate from '../../functions/readableData';

const PostListTable = props => {


    const fields ={'title': 'Titre',
        'smallDesc': 'Description',
        'cover': 'URL de la Couverture',
        'createdAt': 'Date de Création'},
        posts = props.posts,

        headings = () => {
            
            let H = [], i = 0;
            for(let h in fields) {

                H[i] = <th key={i}>{fields[h]}</th>;
                i++
            }
            return(H)

        },
        rows = () => {

            const makeCell = p => {
                let C = [], i = 0, maxLength = 30;
                for(let f in fields) {
                    const data = p[f];
                    if(f === 'createdAt') p[f] = readableDate(p[f]);
                    if(f !== 'createdAt' && p[f].length > 30) p[f] = data.substring(0, maxLength) + '...';
                    C[i] = <td key={i} data-cell={data}>{p[f]}</td>;
                    i++
                }
                return C;
            }

            return posts.map( (post, i) => (
                <tr key={i}>
                    {makeCell(post)}
                </tr>
            ));
        }

        

    return (

    <>
        <h1 className="title">Consulter les Posts</h1>
        <div className="table-container">
            <table className="table is-fullwidth postslist--table">
                <thead>
                    <tr>
                        {headings()}
                    </tr>
                </thead>
                <tbody>
                    {rows()}
                </tbody>
            </table>
        </div>
    </>
    );

};

export default PostListTable;