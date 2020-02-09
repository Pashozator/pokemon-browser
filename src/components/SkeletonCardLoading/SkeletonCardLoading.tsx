import React from 'react';
import './SkeletonCardLoading.scss';
import Card from '../Card/Card';
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';

const SkeletonCardLoading: React.FC = props => {
	return (
		<Card className="skeleton-card-loading">
			<SkeletonLoading style={{ height: '100%' }} />
		</Card>
	);
};

export default SkeletonCardLoading;
