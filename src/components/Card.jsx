import "./card.scss";
import { Grid } from "@mui/material";

const Card = ({ title, imageUrl, description, index }) => {
    return (
        <Grid
            item
            mini={12}
            mobile={6}
            tablet={4}
            pc={12 / 5}
            key={index}
            display={"flex"}
            flexDirection={"column"}>
            <div className='card-container'>
                <div className='card-upper-part'>
                    <div className='image-container'>
                        <img src={imageUrl} alt='CARD PROFILE' />
                    </div>
                    <div className='text-container'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='card-footer'>
                    <span className='footer-span'>{`${index}.`}</span>
                </div>
            </div>
        </Grid>
    );
};

export default Card;
