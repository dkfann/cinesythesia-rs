import React from 'react';
import Search from '../components/Search';

import { inject, observer } from 'mobx-react';

@inject('SearchStore')
@observer
export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.SearchStore = props.SearchStore;

        this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
        this.handleSearchQuerySubmit = this.handleSearchQuerySubmit.bind(this);
    }
    handleSearchQueryChange(event) {
        const query = event.target.value;
        this.SearchStore.changeSearchQuery(query);
    }
    handleSearchQuerySubmit() {
        this.SearchStore.performMovieSearch();
    }
    render() {
        return (
            <Search
                searchQuery={ this.SearchStore.searchQuery }
                handleSearchQueryChange={ this.handleSearchQueryChange }
                handleSearchQuerySubmit={ this.handleSearchQuerySubmit }
            />
        )
    }
}