import React from "react";
import {
    TextField,
    FormLabel,
    Radio,
    RadioGroup,
    FormControlLabel,
    Button
} from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import Select from "react-select";
import { options } from "../../data";

const FormTemplate = ({
    state,
    handleChangeAs2id,
    handleChangeEdiEnabled,
    handleChangeEmail,
    handleChangeEncrypAlgo,
    handleChangeEntityName,
    handleChangeFusionId,
    handleChangeGsId,
    handleChangeIsaId,
    handleChangeMdnType,
    handleChangeShipMethod,
    handleChangeSigingAlgo,
    handleChangeUrl,
    handleChangeCert,
    handleSubmit,
    handleRevert,
    logout
}) => {
    const selectStyles = { menu: styles => ({ ...styles, zIndex: 999 }) };
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
                    <div
                        id="1"
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "row",
                            width: "100%",
                            paddingBottom: 20
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1
                            }}
                        >
                            <TextField
                                id="as2_id"
                                name="as2_id"
                                label="as2_id"
                                multiline={false}
                                fullWidth={true}
                                value={state.as2_id}
                                onChange={handleChangeAs2id}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1
                            }}
                        >
                            <FormLabel
                                component="label"
                                style={{
                                    marginTop: "30px",
                                    marginLeft: "10px"
                                }}
                            >
                                edi_enabled:
                            </FormLabel>
                            <RadioGroup
                                id="edi_enabled"
                                aria-label="position"
                                name="edi_enabled"
                                value={state.edi_enabled}
                                onChange={handleChangeEdiEnabled}
                                row
                                style={{
                                    marginLeft: "10px",
                                    marginTop: "15px"
                                }}
                            >
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="True"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="False"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </div>
                    </div>

                    <div
                        id="2"
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "row",
                            width: "100%",
                            paddingBottom: 20
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1.5
                            }}
                        >
                            <TextField
                                id="email"
                                name="email"
                                label="email"
                                multiline={false}
                                fullWidth={true}
                                value={state.email}
                                onChange={handleChangeEmail}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1
                            }}
                        >
                            <div
                                style={{
                                    marginLeft: "10px",
                                    marginTop: "25px",
                                    alignItems: "middle",
                                    width: "300px"
                                }}
                            >
                                <Select
                                    placeholder="encryption_algo"
                                    onChange={handleChangeEncrypAlgo}
                                    value={state.encryption_algo}
                                    isMulti={true}
                                    isSearchable={true}
                                    options={options}
                                    styles={selectStyles}
                                    getOptionValue={opt => {
                                        if (opt.value) return opt.value;
                                        else return opt.label;
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        id="3"
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "row",
                            width: "100%",
                            paddingBottom: 20
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1
                            }}
                        >
                            <TextField
                                id="entity_name"
                                name="entity_name"
                                label="entity_name"
                                multiline={false}
                                fullWidth={true}
                                value={state.entity_name}
                                onChange={handleChangeEntityName}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1,
                                marginLeft: "10px"
                            }}
                        >
                            <TextField
                                id="fusion_partner_id"
                                name="fusion_partner_id"
                                label="fusion_partner_id"
                                multiline={false}
                                fullWidth={true}
                                value={state.fusion_partner_id}
                                onChange={handleChangeFusionId}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div
                        id="4"
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "row",
                            width: "100%",
                            paddingBottom: 20
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1
                            }}
                        >
                            <TextField
                                id="gs_id"
                                name="gs_id"
                                label="gs_id"
                                multiline={false}
                                fullWidth={true}
                                value={state.gs_id}
                                onChange={handleChangeGsId}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1,
                                marginLeft: "10px"
                            }}
                        >
                            <TextField
                                id="isa_id"
                                name="isa_id"
                                label="isa_id"
                                multiline={false}
                                fullWidth={true}
                                value={state.isa_id}
                                onChange={handleChangeIsaId}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div
                        id="5"
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "row",
                            width: "100%",
                            paddingBottom: 20
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1
                            }}
                        >
                            <TextField
                                id="mdn_type"
                                name="mdn_type"
                                label="mdn_type"
                                multiline={false}
                                fullWidth={true}
                                value={state.mdn_type}
                                onChange={handleChangeMdnType}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1,
                                marginLeft: "10px"
                            }}
                        >
                            <TextField
                                id="ship_method"
                                name="ship_method"
                                label="ship_method"
                                multiline={false}
                                fullWidth={true}
                                value={state.ship_method}
                                onChange={handleChangeShipMethod}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div
                        id="6"
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "row",
                            width: "100%",
                            paddingBottom: 20
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1
                            }}
                        >
                            <TextField
                                id="signing_algo"
                                name="signing_algo"
                                label="signing_algo"
                                multiline={false}
                                fullWidth={true}
                                value={state.signing_algo}
                                onChange={handleChangeSigingAlgo}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1,
                                marginLeft: "10px"
                            }}
                        >
                            <TextField
                                id="url"
                                name="url"
                                label="url"
                                multiline={false}
                                fullWidth={true}
                                value={state.url}
                                onChange={handleChangeUrl}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div
                        id="7"
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "row",
                            width: "100%",
                            paddingBottom: 20
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1
                            }}
                        >
                            <TextField
                                id="cert"
                                name="cert"
                                label="cert"
                                multiline={true}
                                fullWidth={true}
                                value={state.cert}
                                onChange={handleChangeCert}
                                margin="normal"
                                variant="outlined"
                                inputProps={{
                                    style: {
                                        height: "120px"
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexGrow: 1
                        }}
                    >
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

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleRevert}
                            style={{
                                marginLeft: "10px"
                            }}
                        >
                            Revert
                        </Button>
                    </div>

                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{
                                float: "right"
                            }}
                            onClick={logout}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default FormTemplate;
