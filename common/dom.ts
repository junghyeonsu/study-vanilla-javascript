// TypeScript
export const $ = <T extends HTMLElement>(selector: string): T => {
  const element = document.querySelector(selector) as T;
  return element;
};

// TypeScript
export const $all = <T extends HTMLElement>(selector: string): NodeListOf<T> => {
  const elements = document.querySelectorAll(selector) as NodeListOf<T>;
  return elements;
};

// JavaScript
export const _$ = selector => document.querySelector(selector);

// JavaScript
export const _$all = selector => document.querySelectorAll(selector);
