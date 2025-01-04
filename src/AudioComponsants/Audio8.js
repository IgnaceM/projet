import React, { useEffect, useRef, useState } from "react";
import "../styles css/style.css";

const Audio8 = () => {
	const audioRef = useRef(null);
	const progressBarRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	// Convert seconds to MM:SS format
	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	// Play or pause the audio
	const togglePlayPause = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	// Update progress bar and current time
	const updateProgress = () => {
		const current = audioRef.current.currentTime;
		setCurrentTime(current);
		const progress = (current / duration) * 100;
		progressBarRef.current.value = progress;
	};

	// Seek to a specific time
	const seekAudio = (e) => {
		const seekTime = (e.target.value / 100) * duration;
		audioRef.current.currentTime = seekTime;
		setCurrentTime(seekTime);
	};

	useEffect(() => {
		const audio = audioRef.current;

		// Set duration when metadata is loaded
		const setAudioDuration = () => {
			setDuration(audio.duration);
		};

		audio.addEventListener("loadedmetadata", setAudioDuration);
		audio.addEventListener("timeupdate", updateProgress);

		return () => {
			audio.removeEventListener("loadedmetadata", setAudioDuration);
			audio.removeEventListener("timeupdate", updateProgress);
		};
	}, [duration]);

	return (
		<body id="bdy" className="h-[100vh] flex justify-center items-center">
			<a href="/homeAudio">
				<img src="./images/Left_50px.png" alt="" className="absolute z-20 left-2 top-1 w-7" />
			</a>

			<div className="w-[50%] mx-auto relative max-md:w-[100%] max-lg:w-[80%] max-md:h-full p-4 bg-gray-800 bg-opacity-0 h-[90%] text-white rounded-lg shadow-lg">
				<audio ref={audioRef} src="./Audios/vid.mp3" preload="metadata" />

				<div className="flex flex-col items-center justify-between mb-4">
					<div className="absolute top-32 w-52  ">
						<img src="./images/creed3-6.webp" alt="" className="rounded-[50%] h-[190px]" />
					</div>

					<div className="absolute bottom-52 flex flex-col justify-center text-center">
						<p>Discours d'inspiration</p>
						<p className="mt-5 text-blue-500 ">Denzel Washington</p>
					</div>
					<div className="w-[90%] absolute bottom-28 flex items-center gap-3">
						<span>{formatTime(currentTime)}</span>
						<input
							type="range"
							ref={progressBarRef}
							onChange={seekAudio}
							className="w-full h-[3px]  accent-green-700"
						/>
						<span>{formatTime(duration)}</span>
					</div>

					<div className="flex items-center absolute bottom-5 gap-3 mt-5">
						<a href="/audio7">
							<button onClick={togglePlayPause} className="">
								<img src=".\images\Rewind_50px.png" alt="" className="w-8 h-8" />
							</button>
						</a>

						<button onClick={togglePlayPause} className="px-6 py-5 scale-100  text-[15px]  rounded-[50%]">
							{isPlaying ? (
								<img src="./images/Pause Button_50px.png" alt="" id="play" className="w-14 h-14" />
							) : (
								<img src="./images/Play_50px.png" alt="" id="pause" className="w-14 h-14" />
							)}
						</button>

						<a href="/audio1">
							<button onClick={togglePlayPause} className="">
								<img src=".\images\Fast Forward_50px.png" alt="" className="w-8 h-8" />
							</button>
						</a>
					</div>

					<div className="flex items-center space-x-2"></div>
				</div>
			</div>
		</body>
	);
};

export default Audio8;
