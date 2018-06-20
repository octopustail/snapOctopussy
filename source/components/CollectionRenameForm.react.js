let React = require('react');
let ReactDOM = require('react-dom');
let Header = require('./Header.react');
let Button = require('./Button.react');

let inputStyle = {
    marginRight: '5px'
}

let CollectionRenameForm = React.createClass({

    getInitialState: function () {
        return {
            inputValue: this.props.name
        }
    },

    setInputValue: function (inputValue) {
        this.setState({
            inputValue: inputValue
        })
    },

    handleInputValueChange: function (event) {
        let inputValue = event.target.value;

        this.setInputValue(inputValue);
    },

    handleFormSubmmit: function () {
        event.preventDefault();
        let collectionName= this.state.inputValue;
        this.props.onChangeCollectionName(collectionName);

    },

    handleFormCancel: function (event) {
        event.preventDefault();
        let collectionName = this.props.name;
        this.setInputValue(collectionName);
        this.props.onCancelCollectionNameChange();
    },

    componentDidMount: function () {
        this.refs.collectionName.focus()
    },

    render: function () {
        return (
            <form className="form-inline" onSubmit={this.handleFormSubmmit}>
                <Header text="Collection Name:"/>

                <div className="form-group">
                    <input className="form-control"
                           style={inputStyle}
                           onChange={this.handleInputValueChange}
                           value={this.state.inputValue}
                           ref="collectionName"/>>
                </div>
                <Button lable="Change" handleClick={this.handleFormSubmmit}/>
                <Button lable="Cancel" handleClick={this.handleFormCancel}/>

            </form>
        )
    }
});

module.exports = CollectionRenameForm;
