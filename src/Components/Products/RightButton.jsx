import prev from '../../assets/prev.png';

const RightButton = ({ onClick, disabled }) => {
    return (
        <button
            onClick={!disabled ? onClick : undefined}
            style={{
                position: 'absolute',
                right: '10px',
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
                src={prev}
                alt="Next"
                width="35px"
                height="35px"
            />
        </button>
    );
}

export default RightButton;
