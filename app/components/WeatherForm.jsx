var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var location = this.refs.loc.value;
        if (location.length > 0) {
            this.refs.loc.value = "";
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="loc" />
                <input type="submit" value = "Get Weather" className = "button expanded hollow"/>
            </form>
        );
    }
})
module.exports = WeatherForm;
