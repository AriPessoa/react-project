import React, { Component } from 'react';
import './Carrossel.css';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import img1 from '../../images/fundo1.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Steps = [
    {
        label: 'Livros de culinaria',
        imgPath: require('../../images/fundo1aa.jpg'),
        text: 'Esse livro de culinaria tem diversas receitas'
    },
    {
        label: 'Livros de Ferias',
        imgPath: require('../../images/fundo1.jpg'),
        text: 'O livro de Ferias esta com varias dicas para você que procura lugares para viajar'
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1349,
        flexGrow: 1
    },
    header: {

    },
    img: {
        width: '44%',
    },
    divImg: {
        display: 'flex',
    },
    DivText: {
        backgroundColor: 'white',
        width: '100%',
        textAlign: 'center'
    }
}))
const Carrossel = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = Steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <Paper square elevation={0} width="50%">
                {/* <Typography>{Steps[activeStep].label}</Typography> */}
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {Steps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <div className={classes.divImg}>
                                <img className={classes.img} src={step.imgPath} alt={step.label} width="50%" />
                                <div className={classes.DivText}>{step.text}</div>
                            </div>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
              {theme.direction === 'rtl'}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl'}
              Back
            </Button>
                }
            />
        </div>
    );
}
// class Carrossel extends Component {
//     render(){
//         return (
//             <>
//             <SwipeableTextMobileStepper/>
//             </>
//         )
//     }
// }

export default Carrossel;
