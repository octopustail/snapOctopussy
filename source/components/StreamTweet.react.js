let React = require('react');
let ReactDOM = require('react-dom');
let snapkiteStreamClient = require('snapkite-stream-client')
let Tweet = require('./Tweet.react');
let Header = require('./Header.react');

let Collection = React.createClass({

    getInitialState: () => {
        console.log('[Snapterest] StreamTweet : Running getInitialState()');

        return {
            //监控 下一条要显示的推文比当前推文具有更多字符
            numberOfCharectersIsIncreasing: null,
            //存储渲染Header需要的文本
            headerText: null
        }
    },

    componentWillUnmount: () => {
        console.log('[Snapterest] StreamTweet : Running componentWillUnmount()');

        this.setState({
            numberOfCharectersIsIncreasing: true,
            headerText: 'Latest public photo from Twitter'
        })

        window.snapterest = {

            numberOfReceivedTweets: 1,
            numberOfDisplayTweets: 1

        }

    },

    componentDidMount: () => {
        console.log('[Snapterest] StreamTweet : 3.Running componentDidMount()');
        let componentDOMRepresentation = ReactDOM.findDOMNode(this)
        window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML
        window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML
    },

    componentWillUnmount: () => {
        console.log('[Snapterest] StreamTweet : 8.Running componentDidMount()');

        delete window.snapterest;
    },

    componentWillReceiveProps: (nextProps) => {
        console.log('[Snapterest] StreamTweet : 8.Running componentWillReceiveProps()');

        let currentTweetLength = this.props.tweet.text.length;
        let nextTweetlength = nextProps.props.tweet.length;
        let isNumberOfCharectersIsIncreasing = (nextTweetlength > currentTweetLength);

        let headerText;

        this.setState({
            numberOfCharectersIsIncreasing: isNumberOfCharectersIsIncreasing
        });

        if (isNumberOfCharectersIsIncreasing) {
            headerText = 'Number of charecters is increasing';
        } else {
            headerText = 'Lastest public photo from Twitter'
        }

        this.setState({
            headerText: headerText
        });

        window.snapterest.numberOfReceivedTweets++
    },

    shouldComponentUpdate: (nextProps, nextState) => {
        console.log('[Snapterest] StreamTweet : 5.Running shouldComponentUpdate()');

        return (nextProps.tweet.text.length > 1)
    },

    componentWillUpdate:(nextProps,nextState)=>{
        console.log('[Snapterest] StreamTweet : 6.Running componentWillUpdate()');

    },

    componentDidUpdate:(prevProps,prevState)=>{
        console.log('[Snapterest] StreamTweet : 7.Running componentDidUpdate()');
        window.snapterest.numberOfDisplayTweets++

    },



    render: () => {

        console.log('[Snapterest] StreamTweet : Running render()');

        return (
            <section>
                <Header text={this.state.headerText}/>
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection}/>
            </section>
        )

    }
});

module.exports = Collection;