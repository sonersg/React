import Button1 from "./Button1";

type HeaderProps = {
    text: string;
    handleClick: () => void;
    toggle: boolean;
};
function Header({ text, handleClick, toggle }: HeaderProps) {
    return (
        <header>
            <section>
                <h1>{text}</h1>
                <Button1
                    BGColor={toggle ? "blue" : "green"}
                    text={toggle ? "Close" : "Add"}
                    handleClick={handleClick}
                />
            </section>
        </header>
    );
}

Header.defaultProps = {
    title: "Task Tracker",
};

// Header.propTypes = {
//  title: PropTypes.string.isRequired
// }

export default Header;
