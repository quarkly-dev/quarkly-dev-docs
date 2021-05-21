import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Box, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { FaPlay } from "react-icons/fa";
const overrides = {
	'Wrapper': {
		kind: 'Box'
	},
	'Button': {
		kind: 'Box'
	},
	'Button Icon': {
		kind: 'Icon'
	}
};

const YouTubePlayer = ({
	videoId,
	...props
}) => {
	const [isReady, setReady] = useState(false);
	const [isPlay, setPlay] = useState(false);
	const playerRef = useRef(null);
	const {
		override,
		rest
	} = useOverrides(props, overrides, {});

	const playVideo = () => {
		setPlay(true);
		playerRef.current.internalPlayer.playVideo();
	};

	const onReady = ({
		target
	}) => {
		const checkIframe = value => value instanceof HTMLElement && value.tagName === 'IFRAME';

		const iframe = Object.values(target).find(value => checkIframe(value));
		if (!iframe) return;
		iframe.style.position = 'absolute';
		setReady(true);
	};

	return <Box
		padding-top="56.25%"
		min-height="0"
		height="0"
		position="relative"
		transition="opacity 0s initial .5s"
		opacity={isReady ? '1' : '0'}
		{...rest}
	>
		<Box
			top="0"
			left="0"
			width="100%"
			height="100%"
			position="absolute"
		>
			<YouTube ref={playerRef} videoId={videoId} opts={{
				width: '100%',
				height: '100%',
				playerVars: {
					autoplay: 0
				}
			}} onReady={onReady} />
		</Box>
		<Box
			top="calc(50% - 50px)"
			left="calc(50% - 50px)"
			width="90px"
			height="90px"
			background-color="--primary"
			border-radius="100%"
			align-items="center"
			justify-content="center"
			position="absolute"
			display={isPlay ? 'none' : 'flex'}
			{...override('Button')}
			onClick={playVideo}
		>
			<Icon
				margin="0px -6px 0px 0px"
				size="28px"
				category="fa"
				icon={FaPlay}
				color="#FFFFFF"
				{...override('Button Icon')}
			/>
		</Box>
	</Box>;
};

export default Object.assign(YouTubePlayer, {
	title: 'YouTubePlayer',
	propInfo: {
		videoId: {
			control: 'input',
			weight: 1
		}
	},
	defaultProps: {
		videoId: 'Rzgdz1mbLbE'
	},
	overrides
});