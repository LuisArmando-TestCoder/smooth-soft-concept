function playVideo(videoElement: HTMLVideoElement) {
  return () => {
    videoElement.play();
  };
}

export default playVideo;
