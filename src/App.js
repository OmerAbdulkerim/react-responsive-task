import "./App.css";
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
          mini: 599,
            mobile: 600,
            tablet: 1024,
            pc: 1920,
        },
    },
});

const content = [
    {
        title: "TITLE",
        imageUrl:
            "https://images.unsplash.com/photo-1549467821-499949c90f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "TITLE",
        imageUrl:
            "https://images.unsplash.com/photo-1549467821-499949c90f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "TITLE",
        imageUrl:
            "https://images.unsplash.com/photo-1549467821-499949c90f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "TITLE",
        imageUrl:
            "https://images.unsplash.com/photo-1549467821-499949c90f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "TITLE",
        imageUrl:
            "https://images.unsplash.com/photo-1549467821-499949c90f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "TITLE",
        imageUrl:
            "https://images.unsplash.com/photo-1549467821-499949c90f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "TITLE",
        imageUrl:
            "https://images.unsplash.com/photo-1549467821-499949c90f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "TITLE",
        imageUrl:
            "https://images.unsplash.com/photo-1549467821-499949c90f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "TITLE",
        imageUrl:
            "https://images.unsplash.com/photo-1549467821-499949c90f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
    {
        title: "TITLE",
        imageUrl:
            "https://images.unsplash.com/photo-1549467821-499949c90f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique necessitatibus, neque labore ab, ducimus voluptates rem itaque alias praesentium saepe suscipit doloremque accusantium assumenda omnis voluptate veritatis maxime quae.",
    },
];

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container className='App' rowSpacing={4}>
                {content.map((el, index) => {
                    return (
                        <Grid
                            item
                            mini={12}
                            mobile={6}
                            tablet={4}
                            pc={12 / 5}
                            key={index}>
                            <Card
                                title={el.title}
                                description={el.description}
                                imageUrl={el.imageUrl}
                                index={index+1}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </ThemeProvider>
    );
}

export default App;
