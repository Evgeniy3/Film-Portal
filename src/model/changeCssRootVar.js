export const changeCssRootVar = (theme) => {
  const root = document.querySelector(':root');

  const components = [
    'body-background',
    'wrapper-background',
    'svg-background',
    // 'components-border',
    // 'components-hover',
    // 'text-hover',
    'text-color',

  ];

  components.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`,
    );
  });
};