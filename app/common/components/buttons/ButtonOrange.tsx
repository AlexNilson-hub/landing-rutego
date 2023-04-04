

export interface ButtonOrangeProps {
    onClick?: () => void;
    title: string;
    // alt: string;
}

const ButtonOrange = ({title, onClick}: ButtonOrangeProps) => {
    return (
        <button
            onClick={onClick}
            // alt={alt}
        >
            {title}
        </button>
    );
}

export default ButtonOrange;