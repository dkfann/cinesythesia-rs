import { observable, action, computed } from 'mobx';
import movieApi from '../util/movieApi';
import { TMDB_API_KEY, OMDB_API_KEY } from '../dev-private/apiKeys';

class SearchStore {
    @observable searchQuery = '';

    constructor(searchQuery = 'test') {
        this.searchQuery = searchQuery;
    }

    @action changeSearchQuery = query => {
        console.log('in change search query');
        this.searchQuery = query;
    }

    @action performMovieSearch = query => {
        console.log('performing movie search');
    }
}

const store = new SearchStore();

export default store;