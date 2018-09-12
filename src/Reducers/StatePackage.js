var StatePackage = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INFO_PACKAGE':
            state = {};
            return state = action.item;
        default:
            return state;
    }
}

module.exports = StatePackage;