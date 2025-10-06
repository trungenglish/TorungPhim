export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  badgeText?: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Chủ đề", href: "/" },
  { label: "Thể loại", href: "/", hasDropdown: true },
  { label: "Phim lẻ", href: "/" },
  { label: "Phim bộ", href: "/" },
  { label: "Xem chung", href: "/" },
  { label: "Quốc gia", href: "/", hasDropdown: true },
  { label: "Diễn viên", href: "/" },
  { label: "Lịch chiếu", href: "/" },
  { label: "Rổ bóng", href: "/", badgeText: "NEW" },
];


