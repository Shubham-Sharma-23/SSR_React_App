export const updateUrlWithFilters = (selectedFilters) => {
    const params = new URLSearchParams(window.location.search);

    selectedFilters.map((filter) => {
        params.set(filter.filterName, filter.selectedValue);
    });

    window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
};
