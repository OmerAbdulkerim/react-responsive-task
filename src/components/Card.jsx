import "./card.scss";
import { Grid } from "@mui/material";

const Card = ({ title, imageUrl, description, index }) => {
    return (
        <Grid
            item
            mobile={6}
            tablet={4}
            pc={12 / 5}
            key={index}
            display={"flex"}
            flexDirection={"column"}>
            <div className='card-container'>
                <div className="full-image">
                    <img src={imageUrl} alt="Full Cover"/>
                </div>
                <div className='card-upper-part'>
                    <div className='image-container'>
                        <img src={imageUrl} alt='CARD PROFILE' />
                    </div>
                    <div className='text-container'>
                        <div className='table-div'>
                            <h2>{title}</h2>
                        </div>
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
