const initialize = () => {
  const links = [
    {
      href: "#",
      text: "linkText",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.96" viewBox="0 0 24 22.96"><path d="M13.27,1.44l1.92,5.91a1.32,1.32,0,0,0,1.26.92h6.22a1.33,1.33,0,0,1,.78,2.41l-5,3.65a1.34,1.34,0,0,0-.48,1.49l1.92,5.91a1.33,1.33,0,0,1-2.05,1.49l-5-3.65a1.32,1.32,0,0,0-1.56,0l-5,3.65a1.33,1.33,0,0,1-2.05-1.49l1.92-5.91a1.34,1.34,0,0,0-.48-1.49l-5-3.65a1.33,1.33,0,0,1,.78-2.41H7.55a1.32,1.32,0,0,0,1.26-.92l1.92-5.91A1.34,1.34,0,0,1,13.27,1.44Z" transform="translate(0 -0.52)"/></svg>`,
    },
    {
      href: "#",
      text: "linkText",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.96" viewBox="0 0 24 22.96"><path d="M13.27,1.44l1.92,5.91a1.32,1.32,0,0,0,1.26.92h6.22a1.33,1.33,0,0,1,.78,2.41l-5,3.65a1.34,1.34,0,0,0-.48,1.49l1.92,5.91a1.33,1.33,0,0,1-2.05,1.49l-5-3.65a1.32,1.32,0,0,0-1.56,0l-5,3.65a1.33,1.33,0,0,1-2.05-1.49l1.92-5.91a1.34,1.34,0,0,0-.48-1.49l-5-3.65a1.33,1.33,0,0,1,.78-2.41H7.55a1.32,1.32,0,0,0,1.26-.92l1.92-5.91A1.34,1.34,0,0,1,13.27,1.44Z" transform="translate(0 -0.52)"/></svg>`,
    },
    {
      href: "#",
      text: "linkText",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.96" viewBox="0 0 24 22.96"><path d="M13.27,1.44l1.92,5.91a1.32,1.32,0,0,0,1.26.92h6.22a1.33,1.33,0,0,1,.78,2.41l-5,3.65a1.34,1.34,0,0,0-.48,1.49l1.92,5.91a1.33,1.33,0,0,1-2.05,1.49l-5-3.65a1.32,1.32,0,0,0-1.56,0l-5,3.65a1.33,1.33,0,0,1-2.05-1.49l1.92-5.91a1.34,1.34,0,0,0-.48-1.49l-5-3.65a1.33,1.33,0,0,1,.78-2.41H7.55a1.32,1.32,0,0,0,1.26-.92l1.92-5.91A1.34,1.34,0,0,1,13.27,1.44Z" transform="translate(0 -0.52)"/></svg>`,
    },
    {
      href: "#",
      text: "linkText",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.96" viewBox="0 0 24 22.96"><path d="M13.27,1.44l1.92,5.91a1.32,1.32,0,0,0,1.26.92h6.22a1.33,1.33,0,0,1,.78,2.41l-5,3.65a1.34,1.34,0,0,0-.48,1.49l1.92,5.91a1.33,1.33,0,0,1-2.05,1.49l-5-3.65a1.32,1.32,0,0,0-1.56,0l-5,3.65a1.33,1.33,0,0,1-2.05-1.49l1.92-5.91a1.34,1.34,0,0,0-.48-1.49l-5-3.65a1.33,1.33,0,0,1,.78-2.41H7.55a1.32,1.32,0,0,0,1.26-.92l1.92-5.91A1.34,1.34,0,0,1,13.27,1.44Z" transform="translate(0 -0.52)"/></svg>`,
    },
    {
      href: "#",
      text: "linkText",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.96" viewBox="0 0 24 22.96"><path d="M13.27,1.44l1.92,5.91a1.32,1.32,0,0,0,1.26.92h6.22a1.33,1.33,0,0,1,.78,2.41l-5,3.65a1.34,1.34,0,0,0-.48,1.49l1.92,5.91a1.33,1.33,0,0,1-2.05,1.49l-5-3.65a1.32,1.32,0,0,0-1.56,0l-5,3.65a1.33,1.33,0,0,1-2.05-1.49l1.92-5.91a1.34,1.34,0,0,0-.48-1.49l-5-3.65a1.33,1.33,0,0,1,.78-2.41H7.55a1.32,1.32,0,0,0,1.26-.92l1.92-5.91A1.34,1.34,0,0,1,13.27,1.44Z" transform="translate(0 -0.52)"/></svg>`,
    },
  ];

  const listParents = [
    {
      block: "banner",
      className: ".banner__nav",
    },
  ];

  listParents.forEach((parent) => {
    const { block, className } = parent;
    const navList = document.createRange().createContextualFragment(`
    <ul class="${block}__list" aria-label="navigation list">
      ${links
        .map((link) => {
          const { href, text, icon } = link;
          return `
          <li class="${block}__item" role="none">
            <a href="${href}" class="${block}__menuitem flex__cc" role="menuitem">
              <figure class="${block}__icon flex__cc">${icon}</figure>
              ${text}
            </a>
          </li>
        `;
        })
        .join("")}
    </ul>
  `);

    document.querySelector(className).appendChild(navList);
  });
};

window.addEventListener("load", initialize);
