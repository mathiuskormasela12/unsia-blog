// ========== Home Styles
// import all modules
import styled from 'styled-components';
import { IBalloonProps } from '../interfaces';
import { Colors } from '../themes';

export const HeroHome = styled.div`
	height: auto;
	background-color: white;
`;

export const HeroWelcome = styled.div`
	height: calc(100vh - 6.4rem);

	@media (max-width: 768px) and (orientation: landscape) {
		height: 100vh;
	}
`;

export const HeroHomeRow = styled.div`
	display: flex;
	height: 100%;
	align-items: center;

	@media (max-width: 768px) and (orientation: landscape) {
		align-items: center;
	}
`;

export const HeroHomeCol = styled.div`
	flex: 2;
	position: relative;

	@media (max-width: 1024px) {
		text-align: center;
	}

	&:last-child {
		flex: 3;

		@media (max-width: 1024px) {
			display: none;
		}
	}
`;

export const HeroHomeTitle = styled.h1`
	color: ${Colors.dark};
	font-size: 2.4rem;
	font-weight: normal;
	word-wrap: break-word;
`;

export const HeroHomeSubtitle = styled.p`
	color: ${Colors.dark};
	font-size: 1rem;
	word-wrap: break-word;
	margin: 1rem 0 1.2rem 0;
	line-height: 1.5em;
`;

export const PrimaryText = styled.span`
	color: ${Colors.primary};
`;

export const HeroHomeWelcomeContent = styled.div`
	margin-left: 3.6rem;

	@media (min-width: 1024px) {
		width: 20rem;
	}

	@media (max-width: 1024px) {
		margin-left: 0;
	}
`;

export const BalloonContainer = styled.span<IBalloonProps>`
	margin: 32px auto;
	box-sizing: content-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) and (orientation: landscape) {
		display: none;
	}

	& > span {
		position: absolute !important;
		
		${(props) => {
    let styles = '';

    if (props.top) {
      styles += `
							top: 0 !important;
						`;
    }

    if (props.bottom) {
      styles += `
							bottom: 0 !important;

							@media (max-width: 920px) {
								bottom: -4.5rem !important;
							}
						`;
    }

    if (props.left) {
      styles += `
							left: 0 !important;
						`;
    }

    if (props.right) {
      styles += `
							right: 0 !important;
						`;
    }

    if (props.rotate > 0) {
      styles += `
							transform: rotate(${props.rotate}deg);
						`;
    }

    return styles;
  }}
  }
`;

export const ImageContainer = styled.span`
	margin: 32px auto;
	box-sizing: content-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > span {
		position: absolute !important;
		right: 3.5rem !important;
	}
`;
