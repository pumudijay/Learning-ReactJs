const initialState = {
    cards:[
        { id: 1, title: 'Alex', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lacus non elit auctor dignissim. Nunc laoreet vehicula est lacinia lobortis. Nullam placerat condimentum felis. Etiam eu diam mi. Nam ac turpis auctor, porttitor est a, mollis diam. Proin luctus nunc in arcu accumsan, nec varius quam pharetra. Aenean vel justo vel eros consectetur commodo eget quis urna. Sed tempus sem vitae urna congue, a pellentesque sapien faucibus. Donec vitae ligula in diam bibendum vestibulum tempor nec turpis. Morbi vestibulum tempor mauris, non varius erat dignissim ac. Morbi dapibus diam non risus ullamcorper, ac fringilla magna accumsan. Maecenas ornare dapibus mauris, eu congue justo sollicitudin eu. Suspendisse laoreet mauris non facilisis pulvinar. Fusce vulputate auctor felis in imperdiet.'},
        { id: 2, title: 'William', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lacus non elit auctor dignissim. Nunc laoreet vehicula est lacinia lobortis. Nullam placerat condimentum felis. Etiam eu diam mi. Nam ac turpis auctor, porttitor est a, mollis diam. Proin luctus nunc in arcu accumsan, nec varius quam pharetra. Aenean vel justo vel eros consectetur commodo eget quis urna. Sed tempus sem vitae urna congue, a pellentesque sapien faucibus. Donec vitae ligula in diam bibendum vestibulum tempor nec turpis. Morbi vestibulum tempor mauris, non varius erat dignissim ac. Morbi dapibus diam non risus ullamcorper, ac fringilla magna accumsan. Maecenas ornare dapibus mauris, eu congue justo sollicitudin eu. Suspendisse laoreet mauris non facilisis pulvinar. Fusce vulputate auctor felis in imperdiet.'}
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_CARD':
            let newCard = state.cards.filter((card) => {
                return action.id !== card.id
            })
            return {
                ...state,
                cards: newCard
            }
    
        default:
            return state;
    }
};

export default rootReducer;