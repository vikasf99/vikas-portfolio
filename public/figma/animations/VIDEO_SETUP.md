# Video Content Setup for Fluid Button Card

## Steps to Add Video Content

### 1. Prepare Your Video File

- **Format**: MP4 (H.264 codec recommended for best browser compatibility)
- **Resolution**: 1920x1080 or higher (will be scaled down by CSS)
- **Aspect Ratio**: 16:9 (recommended to match the card design)
- **File Size**: Keep files under 10MB for optimal loading
- **Duration**: Short clips work best (5-15 seconds)

### 2. Place Video File

1. Navigate to the animations folder:
   ```
   /public/figma/animations/
   ```

2. Add your video file with a descriptive name:
   - Example: `fluid-button.mp4`
   - Or: `ui-interaction-fluid-button.mp4`

### 3. Update Component Usage

In your component file (e.g., `filterable-content.tsx`), update the `videoSrc` prop:

```tsx
<FluidButtonCard
  videoSrc="/figma/animations/fluid-button.mp4"
  title="Fluid Button"
  description="Your description here"
/>
```

### 4. Video File Naming Convention

Use descriptive, kebab-case names:
- ✅ `fluid-button.mp4`
- ✅ `ui-interaction-demo.mp4`
- ✅ `swift-ui-animation.mp4`
- ❌ `video1.mp4` (not descriptive)
- ❌ `Fluid Button.mp4` (spaces and capitals)

### 5. Video Optimization Tips

**Using HandBrake (Free):**
1. Open HandBrake
2. Select your video file
3. Choose "Fast 1080p30" preset
4. Adjust quality slider (RF 23-28 recommended)
5. Export as MP4

**Using FFmpeg (Command Line):**
```bash
ffmpeg -i input.mov -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart output.mp4
```

**Key Settings:**
- **CRF (Constant Rate Factor)**: 23-28 (lower = higher quality, larger file)
- **Preset**: `medium` or `fast` (balance between encoding speed and file size)
- **Fast Start**: Enable for web playback (allows video to start before fully downloaded)

### 6. Testing

After adding your video:
1. Start the dev server: `npm run dev`
2. Navigate to the page with the FluidButtonCard
3. Verify:
   - Video loads correctly
   - Skeleton loader appears while loading
   - Video displays at correct aspect ratio (16:9)
   - Footer text is readable

### 7. Fallback Behavior

If no `videoSrc` is provided, the component will show:
- A striped placeholder pattern
- This helps during development or if video is missing

### 8. Multiple Cards

You can use multiple FluidButtonCard components with different videos:

```tsx
<FluidButtonCard
  videoSrc="/figma/animations/fluid-button.mp4"
  title="Fluid Button"
  description="Description 1"
/>
<FluidButtonCard
  videoSrc="/figma/animations/another-demo.mp4"
  title="Another Demo"
  description="Description 2"
/>
```

## Troubleshooting

**Video not showing?**
- Check file path is correct (should start with `/figma/animations/`)
- Verify file exists in `public/figma/animations/`
- Check browser console for 404 errors
- Ensure file format is MP4

**Video too large/slow to load?**
- Re-encode with lower quality (higher CRF value)
- Reduce resolution if original is very high
- Consider using WebM format with MP4 fallback

**Video aspect ratio looks wrong?**
- Ensure source video is 16:9 aspect ratio
- The component uses `object-cover` to fill the space
- Crop or resize your source video to 16:9 if needed
