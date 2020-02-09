import React from 'react';
import './SkeletonLoading.scss';

interface SkeletonLoadingProps {
	style?: any;
}

const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({ style }) => {
	return (
		<div className="skeleton-loading" style={style}/>
	);
};

export default SkeletonLoading;
