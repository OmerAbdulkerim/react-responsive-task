import "./App.scss";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

/*Overriding the MUI global theme to add custom breakpoints since the provided ones do not fulfill the requirements.
NOTE: Breakpoints need to be as follows:
2 columns for VP between 600px and 1023px
3 columns for VP between 1024px and 1919px
5 columns for VP of 1920px and above (FULL HD)
*/
const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 600,
            tablet: 1024,
            pc: 1920,
        },
    },
});

const content = [
    {
        title: "Waves Breaking",
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/value-checker-1ede1.appspot.com/o/value-checker%2Fphoto-1549467821-499949c90f7f.avif?alt=media&token=4cf5ac53-39cf-4baa-a80d-6dc9154c0f80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "Barcelona Stadium Nou Camp Design",
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/value-checker-1ede1.appspot.com/o/value-checker%2Fpexels-photo-13043589.jpeg?alt=media&token=5a17bab3-e6cd-4a6f-9e78-4b10afed36a2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "Random Football Player",
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/value-checker-1ede1.appspot.com/o/value-checker%2Fpexels-photo-140039.jpeg?alt=media&token=d9efcd1d-4d09-4ba7-b946-bd8d4ab44b8d",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "Bike Picture",
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/value-checker-1ede1.appspot.com/o/value-checker%2Fpexels-photo-3370153.jpeg?alt=media&token=11c427a6-d367-48ee-a443-e34c9d2811de",
        description: "Test description to test responsive design and behavior.",
    },
    {
        title: "Waves Breaking",
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/value-checker-1ede1.appspot.com/o/value-checker%2Fphoto-1549467821-499949c90f7f.avif?alt=media&token=4cf5ac53-39cf-4baa-a80d-6dc9154c0f80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae. Duis iaculis.",
    },

];

function getCurrentDimension() {
    return window.innerWidth;
}

function App() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateDimension = () => {
            setWidth(getCurrentDimension());
        };
        window.addEventListener("resize", updateDimension);

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, [width]);

    return (
        <ThemeProvider theme={theme}>
            <div
                className='App'
                style={{
                    background: "#a3e7fc",
                }}>
                <Grid container className='grid-container' rowGap={5}>
                    {[...content, ...content].map((el, index) => {
                        return (
                            (index < 8 ||
                                (index < 9 && width > 1023) ||
                                width > 1919) && (
                                <Card
                                    title={el.title}
                                    description={el.description}
                                    imageUrl={el.imageUrl}
                                    index={index + 1}
                                    key={index}
                                />
                            )
                        );
                    })}
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default App;
