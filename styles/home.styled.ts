// ========== Home Styles
// import all modules
import styled from 'styled-components';
import { IBalloonProps, ISkillBadgeProps } from '../interfaces';
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
`;

export const HeroHomeCol = styled.div`
	flex: 2;
	position: relative;

	@media (max-width: 1200px) {
		text-align: center;
	}

	&:last-child {
		flex: 3;

		@media (max-width: 1200px) {
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

	@media (min-width: 1200px) {
		width: 20rem;
	}

	@media (max-width: 1200px) {
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
	position: absolute;

	@media (max-width: 1300px) {
		display: none;
	}

	${(props) => {
    let styles = '';

    if (!props.customPosition && props.top) {
      styles += `
							top: 0 !important;
						`;
    }

    if (!props.customPosition && props.bottom) {
      styles += `
							bottom: 0 !important;

							@media (max-width: 920px) {
								bottom: -4.5rem !important;
							}
						`;
    }

    if (!props.customPosition && props.left) {
      styles += `
							left: 0 !important;
						`;
    }

    if (!props.customPosition && props.right) {
      styles += `
							right: 0 !important;
						`;
    }

    if (props.rotate > 0) {
      styles += `
							transform: rotate(${props.rotate}deg);
						`;
    }

    if (props.hiddenWhenSize > 0) {
      styles += `
				@media (max-width: ${props.hiddenWhenSize}px) {
					display: none !important;
				}
			`;
    }

    if (props.customPosition) {
      styles += `
				${Object.keys(props.customPosition).map((item, index) => {
    if (props.customPosition) {
      return `${item}: ${Object.values(props.customPosition)[index]}rem`;
    }
    return '';
  }).join(' !important;')}
			`;
    }

    return styles;
  }}
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

export const HeroPortofolio = styled.div`
	padding: 0 0 2rem 0;
`;

export const HeroPortofolioHeader = styled.header`
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;

	& > h1 {
		width: 20rem;
	}

	& > p {
		width: 10rem;
	}
`;

export const SkillBadge = styled.span<ISkillBadgeProps>`
	display: inline-block;
	font-size: 1rem;
	padding: .4em .8em;
	border-radius: 1.2em;
	font-weight: bold;
	margin-right: .4rem;
	margin-bottom: .8rem;

	&:last-child {
		margin-right: 0;
	}

	${(props) => {
    if (props.variant === 'primary') {
      return `
				background-color: ${Colors.lightBlue};
				color: ${Colors.lightBlueText};
			`;
    }

    if (props.variant === 'secondary') {
      return `
				background-color: ${Colors.lightPurple};
				color: ${Colors.lightPurpleText};
			`;
    }

    if (props.variant === 'tertiary') {
      return `
				background-color: ${Colors.lightGreen};
				color: ${Colors.lightGreenText};
			`;
    }

    if (props.variant === 'quaternary') {
      return `
				background-color: ${Colors.lightOrange};
				color: ${Colors.lightOrangeText};
			`;
    }

    return '';
  }}
`;
