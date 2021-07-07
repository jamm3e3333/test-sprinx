
class App extends React.Component {
    render() {
        return (
            <div>
                <BulletList list={['prvni', 'druhe', 'treti']} />
            </div>
        )
    }
}

class BulletList extends React.Component {
    render() {
        return (
            <div>
                {
                    (this.props.list && this.props.list.length > 0) && this.props.list.map((l,i) => {
                        return <List key={i} list={l} />
                    })

                }
            </div>
        )
    }
}

class List extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.list}</li>
            </ul>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));