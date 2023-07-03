import { css } from 'lit';
import { component } from '../../../styles';

export const styles = css`
  ${component}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .l-button {
    display: inline-block;
    cursor: pointer;
    height: 32px;
    font-size: var(--sen-font-size);
    line-height: var(--sen-line-height);
    border-radius: var(--sen-border-radius);
    user-select: none;
    padding: 6px 12px;
    margin: 0;
    border: 0 solid transparent;
    box-shadow: none;
    padding: 6px 12px;
    font-weight: 600;
    outline: none;
    vertical-align: middle;
    white-space: nowrap;
  }

  .l-button-primary {
    background-color: var(--sen-color-primary);
    color: var(--sen-color-white);
  }

  .l-button-primary.l-button-borderless,
  .l-button-primary.l-button-light {
    color: var(--sen-color-primary)
  }

  .l-button-light {
    background-color: var(--sen-color-fill);
    border: 0 solid transparent;
  }

  .l-button-light:not(.l-button-disabled):hover {
    background-color: var(--sen-color-fill-quaternary);
    border: 0 solid transparent;
  }

  .l-button-light:not(.l-button-disabled):active {
    background-color: var(--sen-color-fill-secondary);
    border: 0 solid transparent;
  }
`
