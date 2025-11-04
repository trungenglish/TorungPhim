export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  badgeText?: string;
};

export const NAV_ITEMS: NavItem[] = [
  // { label: "Chủ đề", href: "/" },
  // { label: "Diễn viên", href: "/" },
  { label: "Phim lẻ", href: "/" },
  { label: "Phim bộ", href: "/" },
  { label: "Thể loại", href: "/", hasDropdown: true },
  { label: "Quốc gia", href: "/", hasDropdown: true },
  { label: "Xem chung", href: "/" },
  { label: "Thêm", href: "/", hasDropdown: true},
  { label: "Rổ bóng", href: "/", badgeText: "NEW" },
];


