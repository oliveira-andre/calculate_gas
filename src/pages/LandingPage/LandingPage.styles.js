import styled from 'styled-components';
import WallpaperSrc from '../../images/wallpaper.jpeg';

const Wallpaper = styled.div`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  background: url(${WallpaperSrc});
`;

export { Wallpaper };
