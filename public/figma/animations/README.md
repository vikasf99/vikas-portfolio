# Animation Video Assets

## How to Add Video Files

1. **Place your video files** in this directory (`public/figma/animations/`)

2. **Naming convention:**
   - Use descriptive names like `animation-1.mp4`, `animation-2.mp4`, etc.
   - The current implementation expects `animation-1.mp4` for the first video card

3. **Video format recommendations:**
   - **Format:** MP4 (H.264 codec recommended for best browser compatibility)
   - **Resolution:** 1920x1080 or higher (will be scaled down by CSS)
   - **File size:** Keep files under 10MB for optimal loading
   - **Duration:** Short loops work best (2-5 seconds)

4. **To add more videos:**
   - Update `filterable-content.tsx` to include additional video cards
   - Add new video elements with unique IDs (e.g., `animation-2`, `animation-3`)
   - The skeleton loader will automatically show while videos are loading

## Example Structure

```
public/figma/animations/
  ├── animation-1.mp4
  ├── animation-2.mp4
  └── README.md (this file)
```

## Video Optimization Tips

- Use tools like HandBrake or FFmpeg to compress videos
- Consider using WebM format for smaller file sizes (with MP4 fallback)
- Ensure videos are optimized for web playback (progressive download)
