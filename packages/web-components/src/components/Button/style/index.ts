import { css } from 'lit';

export const styles = css`
  .s-button {
    display: inline-block;
    cursor: pointer;
    height: 32px;
    font-size: var(--sen-font-size);
    line-height: var(--sen-line-height);
    border-radius: var(--sen-border-radius);
    user-select: none;
    margin: 0;
    border: 0 solid transparent;
    box-shadow: none;
    padding: 6px 12px;
    font-weight: 600;
    outline: none;
    vertical-align: middle;
    white-space: nowrap;
  }
  .s-button-primary {
    background-color: var(--sen-color-primary);
    color: var(--sen-color-white);
  }
`;
