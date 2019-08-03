import React from "react";
import { Typography, Card, CardContent, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const CardComponent = ({ cardList, handleFormEdit, handleDeleteCard }) => {
    return (
        <div
            style={{
                alignItems: "flex-start",
                flexDirection: "row",
                flexGrow: 1,
                width: "80%",
                paddingLeft: "50px",
                paddingRight: "20px",
                height: "80%",
                overflowY: "scroll"
            }}
        >
            {cardList.map(item => (
                <div
                    key={item.as2_id}
                    style={{
                        paddingBottom: "20px"
                    }}
                >
                    <Card
                        id={item.as2_id}
                        onClick={handleFormEdit}
                        style={{
                            cursor: "pointer",
                            zIndex: 0
                        }}
                    >
                        <CardContent>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                            >
                                <div style={{ flexGrow: 1 }}>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        style={{
                                            textAlign: "left",
                                            fontSize: 14
                                        }}
                                    >
                                        {item.create_ts}
                                    </Typography>
                                </div>
                                <IconButton
                                    id={item.as2_id}
                                    aria-label="Delete"
                                    onClick={handleDeleteCard}
                                    style={{
                                        zIndex: 100
                                    }}
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </div>
                            <Typography
                                variant="h6"
                                component="h2"
                                style={{ textAlign: "left" }}
                            >
                                {item.as2_id}
                            </Typography>
                            <br />
                            <Typography
                                color="textSecondary"
                                style={{ textAlign: "left" }}
                            >
                                {item.fusion_partner_id}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
