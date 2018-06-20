let React = require('react');
let ReactDOMServer = require('react-dom/server')
let CollectionControl = require('./CollectionControls.react')
let TweetList = require('./TweetList.react');
let Header = require('./Header.react');

let Collection = React.createClass({

    createHtmlMarkUpStringOfTweetList: () => {
        //ReactDOMServer的方法renderToStaticMarkup，参数是 <TweetList tweets={this.props.tweets}/>
        let htmlString = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={this.props.tweets}/>
        );

        let htmlMarkUp = {
            html: htmlString
        };

        return JSON.stringify(htmlMarkUp);
    },


    getNumberOfTweetsInCollection: () => {
        return this.getListOfTweetIds().length;
    },

    getListOfTweetIds: () => {
        return Object.keys(this.props.tweets)
    },


    render: () => {
        let NumberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

        if (NumberOfTweetsInCollection > 0) {
            let tweets = this.props.tweets;
            let htmlMarkUp = this.createHtmlMarkUpStringOfTweetList();
            let handleRemoveTweetFromCollection = this.props.onRemoveTweetToCollection;
            let onRemoveAllTweetToCollection = this.props.onRemoveAllTweetToCollection;


            return (
                <div>
                    <CollectionControl NumberOfTweetsInCollection={NumberOfTweetsInCollection}
                                       htmlMarkUp={htmlMarkUp}
                                       onRemoveAllTweetToCollection={onRemoveAllTweetToCollection}/>

                    <TweetList tweets={tweets}
                               onRemoveTweetFromCollection={handleRemoveTweetFromCollection}/>
                </div>
            )

        }


        return <Header text={"Your collection is empty"}/>;
    }
});

module.exports = Collection;