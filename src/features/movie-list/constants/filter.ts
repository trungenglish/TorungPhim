
export type FilterOption = {
  value: string;
  label: string;
};

export type FilterSection = {
  id: "country" | "type" | "age" | "genre" | "version" | "year" | "sort";
  label: string;
  options: FilterOption[];
  multi?: boolean;
};

export const filterSections: FilterSection[] = [
  {
    id: "country",
    label: "Quốc gia",
    options: [
      { value: "all", label: "Tất cả" },
      { value: "us", label: "Mỹ" },
      { value: "uk", label: "Anh" },
      { value: "jp", label: "Nhật Bản" },
      { value: "kr", label: "Hàn Quốc" },
      { value: "cn", label: "Trung Quốc" },
      { value: "fr", label: "Pháp" },
      { value: "de", label: "Đức" },
      { value: "au", label: "Úc" },
      { value: "ch", label: "Thụy Sĩ" },
      { value: "hk", label: "Hồng Kông" },
    ],
    multi: true,
  },
  {
    id: "type",
    label: "Loại phim",
    multi: false,
    options: [
      { value: "all", label: "Tất cả" },
      { value: "single", label: "Phim lẻ" },
      { value: "series", label: "Phim bộ" },
    ],
  },
  {
    id: "age",
    label: "Độ tuổi",
    options: [
      { value: "all", label: "Tất cả" },
      { value: "p", label: "P(Mọi lứa tuổi)" },
      { value: "k", label: "K(Dưới 13 tuổi" },
      { value: "t13", label: "T13(13 tuổi trở lên)" },
      { value: "t16", label: "T16(16 tuổi trở lên)" },
      { value: "t18", label: "T18(18 tuổi trở lên)" },
    ],
    multi: true,
  },
  {
    id: "genre",
    label: "Thể loại",
    multi: true,
    options: [
      { value: "all", label: "Tất cả" },
      { value: "action", label: "Hành động" },
      { value: "anime", label: "Anime" },
      { value: "romance", label: "Lãng mạn" },
      { value: "comedy", label: "Hài hước" },
      { value: "drama", label: "Tâm lý" },
      { value: "horror", label: "Kinh dị" },
      { value: "sci-fi", label: "Viễn tưởng" },
      { value: "fantasy", label: "Giả tưởng" },
      { value: "crime", label: "Hình sự" },
      { value: "adventure", label: "Phiêu lưu" },
      { value: "family", label: "Gia đình" },
      { value: "sports", label: "Thể thao" },
      { value: "documentary", label: "Tài liệu" },
    ],
  },
  {
    id: "version",
    label: "Phiên bản",
    options: [
      { value: "all", label: "Tất cả" },
      { value: "subtitle", label: "Phụ đề" },
      { value: "dubbed", label: "Lồng tiếng" },
      { value: "dual-audio-B", label: "Thuyết minh giọng Bắc" },
      { value: "dual-audio-N", label: "Thuyết minh giọng Nam" },
    ],
    multi: true,
  },
  {
    id: "year",
    label: "Năm",
    multi: true,
    options: [
      { value: "all", label: "Tất cả" },
      { value: "2025", label: "2025" },
      { value: "2024", label: "2024" },
      { value: "2023", label: "2023" },
      { value: "2022", label: "2022" },
      { value: "2021", label: "2021" },
      { value: "2020", label: "2020" },
      { value: "2019", label: "2019" },
      { value: "2018", label: "2018" },
      { value: "2017", label: "2017" },
      { value: "2016", label: "2016" },
      { value: "2015", label: "2015" },
      { value: "2014", label: "2014" },
      { value: "2013", label: "2013" },
      { value: "2012", label: "2012" },
      { value: "2011", label: "2011" },
      { value: "2010", label: "2010" },
    ],
  },
  {
    id: "sort",
    label: "Sắp xếp",
    multi:false,
    options: [
      { value: "newest", label: "Mới nhất" },
      { value: "recent", label: "Mới cập nhật" },
      { value: "most-viewed", label: "Lượt xem" },
      { value: "imdb", label: "Điểm IMDb" },
    ],
  },
];
