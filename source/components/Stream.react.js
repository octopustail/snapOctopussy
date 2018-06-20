let React = require('react');
let snapkiteStreamClient = require('snapkite-stream-client')
let StreamTweet = require('./StreamTweet.react');
let Header = require('./Header.react');

let Stream = React.createClass({

    getInitialState: () => {
        return {tweet: null}
    },

    componentDidMount: () => {
        snapkiteStreamClient.initialiseStream(this.handleNewTweet)
    },

    componentWillUnmount: () => {
        snapkiteStreamClient.destroyStream();
    },

    handleNewTweet: (tweet) => {
        this.setState({
            tweet: tweet
        })
    },

    render: () => {
        let tweet = this.state.tweet;

        if (tweet) {
            return (
                <StreamTweet tweet={tweet} onAddTweetToCollection={this.props.onAddTweetToCollection} />
            );
        }

        return <Header text={"Waiting for public photo from twitter..."}/>
    }
});

module.exports = Stream;