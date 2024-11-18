import next from '../../assets/next.png';

const LeftButton = ({ onClick, disabled }) => {
    return (
        <button
            onClick={!disabled ? onClick : undefined}
            style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 1000,
                opacity: disabled ? 0.5 : 1,
            }}
            disabled={disabled}
        >
            <img
                src={next}
                alt="Previous"
                width="35px"
                height="35px"
            />
        </button>
    );
}

export default LeftButton;
