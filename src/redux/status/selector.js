import { createSelector } from 'reselect'


const selectTarget = (state, target) => target;
const selectName = (s, ss, name) => name;
const selectItems = (state) => state.statusType.items;

export const selectItemsSearch = createSelector(
    [selectItems, selectTarget, selectName],
    (items, target, name) => {
        return items.filter(function (item) {
            return (item.target==target || item.target=="")
            && (item.name==name);
        });
    }
);


export const selectItemTarget = createSelector(
    [selectItems, selectTarget],
    (items, target) => {
        return items.filter(function (item) {
            return (item.target==target);
        });
    }
);
