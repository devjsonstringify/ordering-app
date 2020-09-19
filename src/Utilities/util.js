import { isUndefined } from 'lodash';

export const formatPrice = ({ price }) => {
	if (price) return price.toFixed(2);
};
