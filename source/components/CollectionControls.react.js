let React = require('react');
let Header = require('./Header.react');
let Button = require('./Button.react');
let CollectionRenameForm = require('./CollectionRenameForm.react');
let CollectionExportForm = require('./CollectionExportForm.react');

let CollectionControl = React.createClass({
    getInitialState: function () {
        return {
            name: 'new',
            isEditingName: false
        }
    },

    getHeaderText: function () {
        let numberOfTweetsInCollection = this.props.NumberOfTweetsInCollection;
        let text = numberOfTweetsInCollection;

        if (numberOfTweetsInCollection === 1) {
            text = text + 'tweet in collection'
        } else {
            text = text + 'tweets in collection'
        }

        return (
            <span>
                {text}<strong>{this.state.name}</strong> collection
            </span>
        );
    },

    toggleEditCollectionName: function () {
        this.setState({
            isEditingName: !this.state.isEditingName
        });
    },

    setCollectionName: function (name) {
        this.setState({
            name: name,
            isEditingName: false
        })
    },

    render: function () {
        if (this.state.isEditingName) {
            return (
                <CollectionRenameForm name={this.state.name}
                                      onChangeCollectionName={this.setCollectionName}
                                      onCancelCollectionNameChange={this.toggleEditCollectionName}/>
            );
        }
        return (
            <div>
                <Header text={this.getHeaderText()}/>
                <Button label="Rename collection" handleClick={this.toggleEditCollectionName()}/>
                <Button label="Empty collection" handleClick={this.props.onRemoveAllTweetsFromCollection}/>
                <CollectionExportForm htmlMarkup={this.props.htmlMarkUp}/>
            </div>
        )
    }

});

module.exports = CollectionControl;