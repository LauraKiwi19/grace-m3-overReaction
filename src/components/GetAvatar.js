import React from "react";
import PropTypes from 'prop-types';

class GetAvatar extends React.Component {
    constructor(props) {
        super(props);

        this.fr = new FileReader();
        this.myFileField = React.createRef();

        this.handleFilePicker = this.handleFilePicker.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    handleFilePicker() {
        this.myFileField.current.click();
    }

    uploadImage(e) {
        const myFile = e.currentTarget.files[0];
        this.fr.addEventListener('load', this.getImage);
        this.fr.readAsDataURL(myFile);
    }

    getImage() {
        const image = this.fr.result;
        this.props.updateProfilePicture(image);
    }

    getPreview(isDefaultPicture, picture) {
        return (!isDefaultPicture) ? { backgroundImage: `url(${picture})` } : {};
    }

    render() {
        return (
            <div className="photo__container">
                <button onClick={this.handleFilePicker} className="image__btn"  >Añadir imagen</button>
                <input className="js-form__photo form__photo get-avatar__upload-field" id="files" type="file" ref={this.myFileField} onChange={this.uploadImage} name="photo" required />
                <div className="get_avatar_preview js-preview js-photo preview" alt="" style={this.getPreview(this.props.isDefaultPicture, this.props.picture)} />
            </div>
        );
    }
}

GetAvatar.propTypes = {
    isAvatarDefault: PropTypes.bool.isRequired,
    picture: PropTypes.string.isRequired,
    updateProfilePicture: PropTypes.func.isRequired
};

export default GetAvatar;