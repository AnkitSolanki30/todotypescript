import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {StepContent } from '@mui/material';
const steps = ['Company Details', 'Admin Details', 'Address'];

function getStepContent(step: number) {

    switch (step) {
        case 0:
            return (
                <form className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name"></input>
                    <br></br>
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name"></input>
                </form>
            );
        case 1:
            return (
                <form className="form-group">
                    <label>High School Percentage</label>
                    <input type="number" placeholder="High School Percentage"></input>
                    <br></br>
                    <label>Graduation percentage</label>
                    <input type="number" placeholder="Graduation Percentage"></input>
                </form>
            );
        case 2:
            return (
                <form className="form-group">
                    <label>Permanent Address</label>
                    <input type="text" placeholder="Permanent Address"></input>
                    <br></br>
                    <label>Temporary Address</label>
                    <input type="text" placeholder="Temporary Address"></input>
                </form>
            );
        default:
            return 'Unknown step';
    }
}

export default function Stapper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleFinish = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <Stepper activeStep={activeStep} orientation="horizontal">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}
function useStyles() {
    throw new Error('Function not implemented.');
}

function index(index: any): React.ReactNode {
    throw new Error('Function not implemented.');
}

