# Image Setup Instructions

The website is now configured to use your actual artwork images. Follow these steps to add them:

## Required Images

### Hero Image
Save the "Dance of the Shadows" cover image (Cycladic pergola with blue sky) as:
```
public/images/hero/dance-of-shadows-cover.jpg
```

### Portfolio Images - Shadows in Blue
1. `public/images/portfolio/blue/dech-3pm.jpg` - Ship's deck with railings
2. `public/images/portfolio/blue/cycladic-house-11am.jpg` - Cycladic architecture
3. `public/images/portfolio/blue/schoolroom-curtain-2pm.jpg` - Window railings on curtain

### Portfolio Images - Shadows in Red
4. `public/images/portfolio/red/tiled-roof-4pm.jpg` - Window with tiled roof shadow
5. `public/images/portfolio/red/staircase-ship-1pm.jpg` - Red staircase with shadows
6. `public/images/portfolio/red/red-carpet-5pm.jpg` - Red carpet with window light

### Portfolio Images - Shadows in Yellow
7. `public/images/portfolio/yellow/grille-window-4pm.jpg` - Yellow light through grille
8. `public/images/portfolio/yellow/building-stairwell-10am.jpg` - Yellow staircase corridor
9. `public/images/portfolio/yellow/garage-door-7pm.jpg` - Orange-yellow light through blinds

## Image Specifications

- **Format:** JPG (recommended) or PNG
- **Size:** 1200 × 1200 pixels minimum (square format)
- **Quality:** High resolution for best display
- **File size:** Optimize to under 500KB per image for web performance

## Quick Setup

1. Create the folder structure (already done):
```bash
mkdir -p public/images/{hero,portfolio/{blue,red,yellow}}
```

2. Copy your images to the appropriate folders with the exact filenames listed above

3. The website will automatically display them!

## Image Mapping

| Artwork Title | Filename | Location |
|--------------|----------|----------|
| Dech, 3 p.m. | dech-3pm.jpg | blue/ |
| Cycladic house, 11 a.m. | cycladic-house-11am.jpg | blue/ |
| Schoolroom curtain, 2 p.m. | schoolroom-curtain-2pm.jpg | blue/ |
| Tiled roof, 4 p.m. | tiled-roof-4pm.jpg | red/ |
| Staircase on a ship, 1 p.m. | staircase-ship-1pm.jpg | red/ |
| Red carpet, 5 p.m. | red-carpet-5pm.jpg | red/ |
| Grille on mezzanine window, 4 p.m. | grille-window-4pm.jpg | yellow/ |
| Building stairwell, 10 a.m. | building-stairwell-10am.jpg | yellow/ |
| Garage door, 7 p.m. | garage-door-7pm.jpg | yellow/ |

## Testing

After adding the images, refresh the website at http://localhost:3000 to see them displayed!

If images don't appear:
1. Check that filenames match exactly (case-sensitive)
2. Verify images are in the correct folders
3. Clear browser cache and refresh
4. Check browser console for any errors
