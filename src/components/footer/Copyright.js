import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.p`
	color: white;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;


const Copyright = () => {
	return(
		<StyledBox>
			<span>© 2016 - 2018 Copyright 23People SpA.</span>
		</StyledBox>
	);
}

export default Copyright;