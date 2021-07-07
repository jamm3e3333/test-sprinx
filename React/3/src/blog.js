import LocaleContext from "./locale";

export default function Blog() {
    return (
        <LocaleContext.Consumer>
            {(locale, toggleLocale) => {
                return (
                    <React.Fragment>
                        <Nav toggleLocal={toggleLocale} />
                        <Posts locale={locale} />
                    </React.Fragment>
                )
            }}
        </LocaleContext.Consumer>
    )
}