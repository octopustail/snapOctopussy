let React = require('react');
let Tweet = require('./Tweet.react');

let listStyle = {
    padding: 0
};

let listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};


let TweetList = React.createClass({
    getListOfTweetIds: function () {
        return Object.keys(this.props.tweets);
    },

    getTweetElement: function (tweetId) {
        let tweet = this.props.tweets[tweetId];
        let handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

        let tweetElemnt;

        if (handleRemoveTweetFromCollection) {
            tweetElemnt = (
                <Tweet tweet={tweet} onImageClick={handleRemoveTweetFromCollection}/>
            )
        } else {
            tweetElemnt = <Tweet tweet={tweet}/>

        }
        return <li style={listItemStyle} key={tweet.id}>{tweetElemnt}</li>
    },

    render: function () {
        let tweetElements = this.getListOfTweetIds().map(this.getTweetElement());

        return (
            <ul style={listStyle}>
                {tweetElements}
            </ul>
        )
    }
});

module.exports = TweetList;