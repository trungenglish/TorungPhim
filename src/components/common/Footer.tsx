'use client';

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTelegram, faXTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhone, faLocationDot} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border max-w-[1900px] mx-auto">
            <div className="container px-12 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Logo and Description */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/" alt="TORUNG" className="h-10 w-10" />
                            <span className="text-2xl font-bold text-foreground">TORUNGPHIM</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Xem phim online chất lượng cao miễn phí. Kho phim đa dạng với phim bộ, phim lẻ, anime được cập nhật liên tục.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex gap-3">
                            <Link href="/" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4"/>
                            </Link>
                            <Link href="/" className="w-10 h-10 rounded-full bg-black hover:bg-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FontAwesomeIcon icon={faXTwitter} className=" h-4 w-4"/>
                            </Link>
                            <Link href="/" className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FontAwesomeIcon icon={faInstagram} className="h-4 w-4"/>
                            </Link>
                            <Link href="/" className="w-10 h-10 rounded-full bg-white hover:bg-white/100 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FontAwesomeIcon icon={faYoutube} color="#ff0000" className=" h-4 w-4"/>
                            </Link>
                            <Link href="/" className="w-10 h-10 rounded-full bg-white/100 hover:bg-white/100 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FontAwesomeIcon icon={faTelegram} color="#74C0FC" className=" h-4 w-4"/>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">Danh Mục</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Phim Mới</a></li>
                            <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Phim Bộ</a></li>
                            <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Phim Lẻ</a></li>
                            <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Anime</a></li>
                            <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">TV Shows</a></li>
                        </ul>
                    </div>

                    {/* Genres */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">Thể Loại</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Hành Động</a></li>
                            <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Tình Cảm</a></li>
                            <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Kinh Dị</a></li>
                            <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Hài Hước</a></li>
                            <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Viễn Tưởng</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">Liên Hệ</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faEnvelope} className="text-primary h-4 w-4" />
                                <span className="text-muted-foreground text-sm">nhmt1407@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faPhone} className="text-primary h-4 w-4" />
                                <span className="text-muted-foreground text-sm">00000000</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FontAwesomeIcon icon={faLocationDot} className="text-primary h-4 w-4 mt-0.5" />
                                <span className="text-muted-foreground text-sm">123 Nguyễn Văn A, Q.1, TP.HCM</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="border-t border-border">
                <div className="container px-4 md:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-muted-foreground text-sm">
                            © 2025 HEHEPHIM. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Điều khoản sử dụng</Link>
                            <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Chính sách bảo mật</Link>
                            <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">DMCA</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer