import React, { useState } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const steps = ['Step 1', 'Step 2', 'Step 3'];
const stepDecription = ['Decription 1', 'Decription 2', 'Decription 3'];

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


const DemoStepper = () => {

    const [activeStep, setActiveStep] = useState<number>(0)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <div>
            <h1>DEMO STEPPER</h1>
            <Stepper activeStep={activeStep}>
                {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <>
                <Typography>{getStepContent(activeStep)}</Typography>
                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                {activeStep === steps.length - 1 ? (
                    <Button onClick={handleReset}>Finish</Button>
                ) : (
                    <Button onClick={handleNext}>Next</Button>
                )}
            </>
        </div>
    )
}

export default DemoStepper