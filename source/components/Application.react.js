let React = require('react');
let Stream = require('./Stream.react');
let Collection = require('./Collection.react');

let Application = React.createClass({
    getInitialState: () => {
        return {
            collectionTweets: {}
        }
    },
    AddTweetToCollection: (tweet) => {
        let collectionTweets = this.state.collectionTweets;

        collectionTweets[tweet.id] = tweet;

        this.setState({
            collectionTweets: collectionTweets
        })
    },
    RemoveTweetToCollection: (tweet) => {
        let collectionTweets = this.state.collectionTweets;

        delete collectionTweets[tweet.id];

        this.setState({
            collectionTweets: collectionTweets
        })
    },
    RemoveAllTweetToCollection: () => {

        this.setState({
            collectionTweets: {}
        })
    },

    render: () => {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Stream onAddTweetToCollection={this.AddTweetToCollection}/>
                    </div>
                    <div className="col-md-6 text-center">
                        <Collection tweets={this.state.collectionTweets}
                                    onRemoveTweetToCollection={this.RemoveTweetToCollection}
                                    onRemoveAllTweetToCollection={this.RemoveAllTweetToCollection}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Application;