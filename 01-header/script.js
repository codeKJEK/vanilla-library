const initialize = () => {
  const links = [
    {
      href: "#",
      text: "linkText",
    },
    {
      href: "#",
      text: "linkText",
    },
    {
      href: "#",
      text: "linkText",
    },
    {
      href: "#",
      text: "linkText",
    },
    {
      href: "#",
      text: "linkText",
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
          const { href, text } = link;
          return `
          <li class="${block}__item" role="none"><a href="${href}" class="${block}__menuitem flex__cc" role="menuitem">${text}</a></li>
        `;
        })
        .join("")}
    </ul>
  `);

    document.querySelector(className).appendChild(navList);
  });
};

window.addEventListener("load", initialize);
