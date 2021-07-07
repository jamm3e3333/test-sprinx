
class App extends React.Component {
    render() {
        return (
            <div>
                <CyclicClick list={['prvni', 'druhe', 'treti']} />
            </div>
        )
    }
}

class CyclicClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: null
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let index = this.state.i;
        if(index === null || (index === this.props.list.length - 1)) {
            index = 0;
            this.setState(() => {
                return {
                    i: index
                }
            })
        }
        else{
            index++;
            this.setState(() => {
                return {
                    i: index
                }
            })
        }
    }
    render() {
        return (
            <div>
                <div>{this.state.i !== null && this.props.list[this.state.i]}</div>
                <button onClick={this.handleClick}>Toggle list</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));