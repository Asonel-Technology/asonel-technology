export function isNavActive(to, pathname, hash) {
  const [path, fragment] = to.split("#");

  if (fragment) {
    return pathname === path && hash === `#${fragment}`;
  }

  if (path === "/") {
    return pathname === "/";
  }

  return pathname === path;
}

export function isSectionActive(item, pathname, hash) {
  if (isNavActive(item.to, pathname, hash)) {
    return true;
  }

  return (item.children ?? []).some((child) => {
    const path = child.to.split("#")[0];
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path || pathname.startsWith(`${path}/`);
  });
}
