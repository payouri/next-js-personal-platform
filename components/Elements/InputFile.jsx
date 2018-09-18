import {Component} from 'react';


class FileInput extends Component{

    constructor(props) {
        
        super(props);
        
        this.state = {
            file: this.props.file || 'Aucun'
        }
    }
    
    
    onFileChange = e => {

        this.setState({'file': e.target.files[0].name});

    }

    render() {
        return (
            <div className={`file${' ' + this.props.classnames} ${this.props.hasName?'has-name':''}`}>
                <label className='file-label'>
                    <input onChange={this.onFileChange} classnames='file-input' type='file' name={this.props.name} style={{display: 'none'}}/>
                    <span className='file-cta'>
                        <span className='file-icon'>
                            <i className='fas fa-upload'></i>
                        </span>
                        <span className='file-label has-text-weight-bold'>
                            {this.props.children || 'Choisir un fichier'}
                        </span>
                    </span>
                    {this.props.hasName && 
                        <span className="file-name">
                            {this.state.file}
                        </span>
                    }
                </label>
            </div>
        )
    }

} 

export default FileInput;