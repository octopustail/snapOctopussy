let React = require('react');

let buttonStyle = {
    margin: "10px 10px 10px 0"
};

let Button = React.createClass({
    render: function () {
        return (
            <button className="btn btn-default"
                    style={buttonStyle}
                    onClick={this.props.handleClick}>{this.props.label}</button>
        )

    }
});
module.exports = Button;