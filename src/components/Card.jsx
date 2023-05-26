import "./card.scss";

const Card = ({ title, imageUrl, description, index }) => {
    return (
        <div
            className='card-container'
            style={{
                textAlign: "start",
                display: "flex",
                flexDirection: "column",
                border: "1px black solid",
                width: "100%",
                margin: "auto",
                padding: "1rem",
            }}>
            <img
                src={imageUrl}
                alt='CARD PROFILE'
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "1px solid green",
                }}
            />
            <br />
            <h2 style={{ fontWeight: 300 }}>{title}</h2>
            <p style={{ fontWeight: 300 }}>{description}</p>

            <span
                style={{
                    textAlign: "center",
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "30px",
                    lineHeight: "30px",
                    display: "table",
                    margin: "0 auto",
                }}>{`${index}.`}</span>
        </div>
    );
};

export default Card;
