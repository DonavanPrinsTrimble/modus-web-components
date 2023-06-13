// eslint-disable-next-line
import { FunctionalComponent, h } from '@stencil/core';
import solidIconsSprite from '@trimble-oss/modus-icons/dist/modus-solid/sprites/modus-icons.svg';

export const ModusIconWrapper: FunctionalComponent<{ iconName: string }> = ({ iconName }) => (
  <svg class="modus-icons" width="1em" height="1em" fill="currentColor">
    <use xlinkHref={`/modus-solid-icons.svg#${iconName}`} />
  </svg>
);
