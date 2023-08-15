type Button1Ptops = {
    BGColor: string;
    text: string;
    handleClick: () => void;
};
function Button1({ BGColor, text, handleClick }: Button1Ptops) {
    return (
        <button style={{ backgroundColor: BGColor }} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button1;
