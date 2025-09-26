# MP4 (safest cross-browser)
ffmpeg -y -i IMG_2859.gif ^
  -vf "fps=30,scale=trunc(iw/2)*2:trunc(ih/2)*2,format=yuv420p,setsar=1" ^
  -movflags +faststart ^
  IMG_2859.mp4