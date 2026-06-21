function Toast({ message }) {
    return (
        <div style={{
            position: "fixed",
            bottom: "28px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#132238",
            color: "white",
            padding: "14px 28px",
            borderRadius: "100px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "14px",
            fontWeight: "600",
            zIndex: 9999,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)"
        }}>
            {message}
        </div>
    );
}

export default Toast;