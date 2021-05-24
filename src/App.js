import React from "react";

import {BrowserRouter,Route,Switch} from 'react-router-dom'

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import "font-awesome/css/font-awesome.css";
import Icon from '@material-ui/core/Icon'

import {
  SearchProvider,
  WithSearch,
} from "@elastic/react-search-ui";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import {
  buildAutocompleteQueryConfig,
  buildFacetConfigFromConfig,
  buildSearchOptionsFromConfig,
  buildSortOptionsFromConfig,
  getConfig,
  getFacetFields,
} from "./config/config-helper";

import BodyWrap from "./components/body_wrapper";
import Navbar from "./components/navbar";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import ReactTooltip from "react-tooltip";
import { BrowserRouter } from 'react-do';

const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();

const connector = new AppSearchAPIConnector({
  searchKey,
  engineName,
  hostIdentifier,
  endpointBase,
});

const config = {
  searchQuery: {
    facets: buildFacetConfigFromConfig(),
    ...buildSearchOptionsFromConfig(),
  },
  autocompleteQuery: buildAutocompleteQueryConfig(),
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true,
};

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar classes="Login" />
      <SearchProvider config={config}>
        <WithSearch
          mapContextToProps={({ searchTerm, setSearchTerm, results }) => ({
            searchTerm,
            setSearchTerm,
            results,
          })}
        >
          {({ searchTerm, setSearchTerm, results }) => {
            return (
              <div className="search-container">
                <div className="search-bar">
                  <input
                    className=""
                    type="text"
                    placeholder="powered By ELASTICSEARCH"
                    required
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  ></input>
                  <IconButton
                    variant="contained"
                    color="secondary"
                    size="small"
                    disableElevation
                  >
                    <Icon className="fa fa-search"/>
                  </IconButton>
                </div>
                <div className="resultsBody">
                  {results.map((r) => (
                    <div>
                      <div className="resultItem" key={r.id.raw} data-tip data-for={r.id.raw}>
                      {r.title.raw}{" "}
                        <IconButton size="small" variant="contained" color="secondary">
                        <Icon className="fa fa-plus-circle" />


                      </IconButton>{" "}
                  
                      <ReactTooltip
                          place="right"
                          type="error"
                          effect="solid"
                          id={r.id.raw}
                          multiline={true}
                    >
                          <p>Title : {r.title.raw}</p>
                          <p>UID: {r.id.raw}</p>
                          <p>Rating: {Math.round(r.rating.raw*100)/100}/10</p>

                          {console.log(r)}
                        </ReactTooltip>
                    </div>
                     
                      </div>
                  ))}
                </div>
              </div>
            );
          }}
        </WithSearch>
      </SearchProvider>
      </div>
      </BrowserRouter>
  );
}
