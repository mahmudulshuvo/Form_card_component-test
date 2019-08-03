import React, { Component } from "react";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "./components/SearchBar/SearchBar";
import FormTemplate from "./components/FormTemplate/FormTemplate";
import { data } from "./data";
import moment from "moment";

class App extends Component {
    fields = [
        "as2_id",
        "edi_enabled",
        "email",
        "encryption_algo",
        "entity_name",
        "fusion_partner_id",
        "gs_id",
        "isa_id",
        "mdn_type",
        "ship_method",
        "signing_algo",
        "cert",
        "url"
    ];

    constructor(props) {
        super(props);
        this.state = {
            as2_id: "",
            edi_enabled: "",
            email: "",
            encryption_algo: "",
            entity_name: "",
            fusion_partner_id: "",
            gs_id: "",
            isa_id: "",
            mdn_type: "",
            ship_method: "",
            signing_algo: "",
            cert: "",
            url: "",
            serachQuery: "",
            cardList: data,
            searchFoundCards: []
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSearch = event => {
        let cardItemList = this.state.cardList;
        let narrowedItems = [];
        var pattern = new RegExp(event.target.value, "i");
        for (let i = 0; i < cardItemList.length; i++) {
            if (cardItemList[i].as2_id.match(pattern)) {
                narrowedItems.push(cardItemList[i]);
            }
        }
        this.setState({
            serachQuery: event.target.value,
            searchFoundCards: narrowedItems
        });
    };

    handleFormEdit = event => {
        let as2_id = event.currentTarget.id;
        for (let i = 0; i < this.state.cardList.length; i++) {
            if (this.state.cardList[i].as2_id === as2_id) {
                this.setState({
                    as2_id: this.state.cardList[i].as2_id,
                    edi_enabled: this.state.cardList[i].edi_enabled,
                    email: this.state.cardList[i].email,
                    encryption_algo: this.state.cardList[i].encryption_algo,
                    entity_name: this.state.cardList[i].entity_name,
                    fusion_partner_id: this.state.cardList[i].fusion_partner_id,
                    gs_id: this.state.cardList[i].gs_id,
                    isa_id: this.state.cardList[i].isa_id,
                    mdn_type: this.state.cardList[i].mdn_type,
                    ship_method: this.state.cardList[i].ship_method,
                    signing_algo: this.state.cardList[i].signing_algo,
                    cert: this.state.cardList[i].cert,
                    url: this.state.cardList[i].url
                });
            }
        }
    };

    handleDeleteCard = event => {
        event.stopPropagation();
        let as2_id = event.currentTarget.id;
        let itemIndex = -1;
        let cardListItem = this.state.cardList;
        for (let i = 0; i < cardListItem.length; i++) {
            if (cardListItem[i].as2_id === as2_id) {
                itemIndex = i;
                break;
            }
        }
        if (itemIndex > -1) {
            if (cardListItem[itemIndex].as2_id === this.state.as2_id) {
                cardListItem.splice(itemIndex, 1);

                if (this.state.searchFoundCards.length > 0) {
                    let searchCards = this.state.searchFoundCards;
                    for (let i = 0; i < searchCards.length; i++) {
                        if (searchCards[i].as2_id === as2_id) {
                            searchCards.splice(i, 1);
                            this.setState({
                                as2_id: "",
                                edi_enabled: "",
                                email: "",
                                encryption_algo: "",
                                entity_name: "",
                                fusion_partner_id: "",
                                gs_id: "",
                                isa_id: "",
                                mdn_type: "",
                                ship_method: "",
                                signing_algo: "",
                                cert: "",
                                url: "",
                                serachQuery: "",
                                cardList: cardListItem,
                                searchFoundCards: searchCards
                            });
                            break;
                        }
                    }
                    toast.success("Deleted!, Please check the cards", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                        draggable: true
                    });
                } else {
                    this.setState({
                        as2_id: "",
                        edi_enabled: "",
                        email: "",
                        encryption_algo: "",
                        entity_name: "",
                        fusion_partner_id: "",
                        gs_id: "",
                        isa_id: "",
                        mdn_type: "",
                        ship_method: "",
                        signing_algo: "",
                        cert: "",
                        url: "",
                        serachQuery: "",
                        cardList: cardListItem
                    });
                    toast.success("Deleted!, Please check the cards", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                        draggable: true
                    });
                }
            } else {
                cardListItem.splice(itemIndex, 1);
                if (this.state.searchFoundCards.length > 0) {
                    let searchCards = this.state.searchFoundCards;
                    for (let i = 0; i < searchCards.length; i++) {
                        if (searchCards[i].as2_id === as2_id) {
                            searchCards.splice(i, 1);
                            this.setState({
                                cardList: cardListItem,
                                searchFoundCards: searchCards
                            });
                            break;
                        }
                    }
                    toast.success("Deleted!, Please check the cards", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                        draggable: true
                    });
                } else {
                    this.setState({
                        cardList: cardListItem
                    });
                    toast.success("Deleted!, Please check the cards", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                        draggable: true
                    });
                }
            }
        }
    };

    handleSubmit = () => {
        let output = {
            as2_id: this.state.as2_id,
            edi_enabled: this.state.edi_enabled,
            email: this.state.email,
            encryption_algo: this.state.encryption_algo,
            entity_name: this.state.entity_name,
            fusion_partner_id: this.state.fusion_partner_id,
            gs_id: this.state.gs_id,
            isa_id: this.state.isa_id,
            mdn_type: this.state.mdn_type,
            ship_method: this.state.ship_method,
            signing_algo: this.state.signing_algo,
            cert: this.state.cert,
            create_ts: moment(Date.now()).format("YYYY-MM-DD hh:mm:ss SS"),
            url: this.state.url
        };

        let list = this.state.cardList;

        list.unshift(output);

        this.setState({
            as2_id: "",
            edi_enabled: "",
            email: "",
            encryption_algo: "",
            entity_name: "",
            fusion_partner_id: "",
            gs_id: "",
            isa_id: "",
            mdn_type: "",
            ship_method: "",
            signing_algo: "",
            cert: "",
            url: "",
            created_at: "",
            cardList: list
        });

        toast.success("Submit Successful!, Please check cards on left side.", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            draggable: true
        });
    };

    render() {
        return (
            <div
                className="App"
                style={{
                    display: "flex",
                    height: "100%"
                }}
            >
                <SearchBar
                    serachQuery={this.state.serachQuery}
                    handleSearch={this.handleSearch}
                    cardList={this.state.cardList}
                    handleFormEdit={this.handleFormEdit}
                    searchFoundList={this.state.searchFoundCards}
                    handleDeleteCard={this.handleDeleteCard}
                />
                <FormTemplate
                    fields={this.fields}
                    state={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default App;
