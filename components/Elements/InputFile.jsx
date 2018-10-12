import {Component} from 'react';
import Input from './Input';

class FileInput extends Component{

    constructor(props) {
        
        super(props);
        
        this.state = {
            file: this.props.file || 'Aucun'
        }
        
        this.classnames = this.props.classnames && typeof this.props.classnames === 'string' 
            ? ' ' + this.props.classnames : '';
        this.props.hasName ? this.classnames += ' has-name' : '';
        this.props.isBoxed ? this.classnames += ' is-boxed' : '';
    }
    
    
    onFileChange = e => {

        this.setState({'file': e.target.files[0].name});

    }

    render() {
        return (
            <div className={`file${this.classnames}`}>
                <label className='file-label'>
                    <input className='file-input'
                        id={this.props.id}
                        name={this.props.name}
                        onChange={this.onFileChange}
                        type='file' 
                    />
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