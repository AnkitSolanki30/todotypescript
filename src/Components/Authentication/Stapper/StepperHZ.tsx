import { blue, green } from '@mui/material/colors';
import { color } from '@mui/system';
import React, { useState } from 'react'
import { Stepper } from 'react-form-stepper';
import { Step } from 'react-form-stepper';

import "./stepperHS.scss"

const steps = ['Company Details', 'Admin Details', 'Address'];

const StepperHZ = () => {
    
    const getStepContent = (step: number) => {
    
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
        <>
            <div>StepperHZ</div>
            <Stepper activeStep={activeStep} className="falana">
                {steps.map((step, index) => (
                    <Step key={index} label={step}>
                    </Step>
                ))}
            </Stepper>
            <div>{getStepContent(activeStep)}</div>
            <button color="inherit" disabled={activeStep === 0} onClick={handleBack}>Back</button>
                {activeStep === steps.length - 1 ? (
                    <button onClick={handleReset}>Finish</button>
                ) : (
                    <button onClick={handleNext}>Next</button>
                )}
        </>
    )
}

export default StepperHZ