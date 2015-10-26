App = React.createClass({
  mixins: [ReactMeteorData],

  render() {
    return (
      <div className="container">
        <header>
          <AccountsUIWrapper />
        </header>
      </div>
    );
  }

})
