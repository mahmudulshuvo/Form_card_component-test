import React from "react";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CardComponent from "../CardComponent/CardComponent";

const SearchBar = ({
    serachQuery,
    handleSearch,
    cardList,
    searchFoundList,
    handleFormEdit,
    handleDeleteCard
}) => {
    return (
        <div
            style={{
                flexGrow: 1,
                minWidth: "300px",
                height: "1000px"
            }}
        >
            <div
                style={{
                    width: "90%",
                    paddingLeft: "50px",
                    paddingTop: "50px"
                }}
            >
                <Paper
                    elevation={1}
                    style={{
                        // padding: "2px 4px",
                        marginBottom: "20px",
                        display: "flex",
                        alignItems: "center",
                        width: "90%"
                    }}
                >
                    <InputBase
                        placeholder="Search..."
                        value={serachQuery}
                        onChange={handleSearch}
                        style={{
                            marginLeft: 8,
                            flex: 1
                        }}
                    />
                    <IconButton
                        aria-label="Search"
                        style={{
                            padding: "10px"
                        }}
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>

            {serachQuery.length < 1 && (
                <CardComponent
                    cardList={cardList}
                    handleFormEdit={handleFormEdit}
                    handleDeleteCard={handleDeleteCard}
                />
            )}

            {serachQuery.length > 0 && (
                <CardComponent
                    cardList={searchFoundList}
                    handleFormEdit={handleFormEdit}
                    handleDeleteCard={handleDeleteCard}
                />
            )}
        </div>
    );
};

export default SearchBar;
