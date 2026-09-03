export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export function homeHash(href: string) {
  const hash = href.includes("#") ? href.slice(href.indexOf("#") + 1) : href.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}#${hash}`;
}
