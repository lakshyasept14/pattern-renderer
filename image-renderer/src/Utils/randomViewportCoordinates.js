import React from 'react';
import useScreenSize from './Hooks/useScreenSize';

export const randomViewportCoordinates = () => {
    const viewportSize = useScreenSize();
    const maxvh = viewportSize.height;
    const maxvw = viewportSize.width;
  return (
    /**return an array of objects with poission distribution x,y coordinates, also taking into account the size of the image. */
  )
}
