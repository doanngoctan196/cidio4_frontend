var obj = {
    selectedDichVu: [],
    allDichVu: [],
    allDoUong: [],
    selectedDoUong: []
}

var StatePackage = (state = obj, action) => {
    switch (action.type) {
        case 'ADD_INFO_PACKAGE':
            state = {};
            return state = action.item;
        case 'ADD_ITEM_TO_ORDER':
            var data = state.allDichVu.find(i => i.id_dichvu === action.item);
            var tmpState = {
                ...state, selectedDichVu: [
                    ...state.selectedDichVu, data]
            };
            var lstShow = tmpState.allDichVu.filter(i => i.id_dichvu !== action.item)
            tmpState = {
                ...tmpState, allDichVu: lstShow
            }
            return tmpState;
        case 'REMOVE_ITEM_TO_ORDER':
            data = state.selectedDichVu.find(i => i.id_dichvu === action.item);
            tmpState = {
                ...state, allDichVu: [
                    ...state.allDichVu, data]
            };
            lstShow = tmpState.selectedDichVu.filter(i => i.id_dichvu !== action.item)
            tmpState = {
                ...tmpState, selectedDichVu: lstShow
            }
            return tmpState;
        case 'ADD_ITEM_TO_DOUONG':
            data = state.allDoUong.find(i => i.id_dichvu === action.item);
            data  = {...data, soluong: 1}
            tmpState = {
                ...state, selectedDoUong: [
                    ...state.selectedDoUong, data]
            };
            lstShow = tmpState.allDoUong.filter(i => i.id_dichvu !== action.item)
            tmpState = {
                ...tmpState, allDoUong: lstShow
            }
            return tmpState;
        case 'REMOVE_ITEM_TO_DOUONG':
            data = state.selectedDoUong.find(i => i.id_dichvu === action.item);
            tmpState = {
                ...state, allDoUong: [
                    ...state.allDoUong, data]
            };
            lstShow = tmpState.selectedDoUong.filter(i => i.id_dichvu !== action.item)
            tmpState = {
                ...tmpState, selectedDoUong: lstShow
            }
            return tmpState;
        case 'UPDATE_SOLUONG':
            var index = state.selectedDoUong.findIndex(i => i.id_dichvu === action.item.id)
            state.selectedDoUong[index].soluong = action.item.soluong;
            console.log(state);
            return state;
        default:
            return state;
    }
}

module.exports = StatePackage;