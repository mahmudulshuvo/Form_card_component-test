import React from "react";
import { TextField, Button } from "@material-ui/core";
import { ToastContainer } from "react-toastify";

const FormTemplate = ({ fields, state, handleChange, handleSubmit }) => {
    return (
        <div
            style={{
                flexGrow: 5,
                minWidth: "400px"
            }}
        >
            <div
                style={{
                    flexGrow: 1,
                    width: "80%",
                    padding: "50px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        width: "100%",
                        paddingBottom: 20
                    }}
                >
                    {fields.map((item, index) => (
                        <div
                            key={item}
                            style={{
                                marginTop: index === 0 ? "-20px" : "0px",
                                width: "50%"
                            }}
                        >
                            <TextField
                                id={item}
                                name={item}
                                label={item}
                                multiline={false}
                                fullWidth={true}
                                value={state[item]}
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    ))}
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    style={{
                        float: "left"
                    }}
                >
                    Submit
                </Button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default FormTemplate;
