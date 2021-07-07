import LocaleContext from './locale';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: 'en',
            toggleLocale: () => {
                this.setState(({ locale }) => ({
                    locale: locale === "en" ? "es" : "en"
                }));
            }
        }
    }
    render() {
        return (
            <div>
                <LocaleContext.Provider value={this.state.locale} >
                    <Home />
                </LocaleContext.Provider>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));