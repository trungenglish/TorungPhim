"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-nav-background/95 backdrop-blur-md border-b border-border">
            <div className="container-fluid flex items-center justify-between h-16 px-6">
                {/* Logo and Menu Button */}
                <div className="flex items-center gap-3">
                    {/* Mobile menu - now on the left */}
                    <Button variant="ghost" className="hidden max-[1360px]:flex hover:bg-secondary">
                        <FontAwesomeIcon icon={faBars} className="h-8 w-8" />
                    </Button>

                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary-glow transition-colors">
                            <span className="text-primary-foreground font-bold text-xl">T</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-balance font-bold text-foreground">TorungPhim</span>
                            <span className="text-xs text-muted-foreground">Phim hay có đây</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation and User Section */}
                <div className="flex items-center gap-6 pl-3">
                    {/* Navigation */}
                    <nav className="hidden min-[1360px]:flex shrink-0 items-center gap-5">
                        <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">Chủ Đề</Link>
                        <div className="flex items-center gap-1 cursor-pointer group">
                            <span className="text-sm text-foreground group-hover:text-primary transition-colors">Thể loại</span>
                            <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">Phim Lẻ</Link>
                        <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">Phim Bộ</Link>
                        <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">Xem Chung</Link>
                        <div className="flex items-center gap-1 cursor-pointer group">
                            <span className="text-sm text-foreground group-hover:text-primary transition-colors">Quốc gia</span>
                            <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">Diễn Viên</Link>
                        <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">Lịch chiếu</Link>
                        <div className="flex items-center gap-1 cursor-pointer group">
                            <Badge className="bg-red-500 text-black hover:bg-yellow-500">
                                NEW
                            </Badge>
                            <span className="text-sm text-foreground group-hover:text-primary transition-colors">Rổ bóng</span>
                        </div>

                    </nav>

                    {/* Search Bar - Full width with gradual shrinking */}
                    <div className="hidden min-[1360px]:flex min-w-0">
                        <div className="relative w-[clamp(160px,20vw,270px)]">
                            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Tìm kiếm phim, diễn viên"
                                className="w-full pl-10 pr-4 h-11 bg-secondary/50 border-secondary hover:bg-secondary/70 focus:bg-secondary transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* User Section - Hidden below 1360px */}
                    <div className="hidden min-[1360px]:flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="#" />
                            <AvatarFallback>T</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Tài ứng dụng</span>
                            <span className="text-sm font-medium text-foreground">ToPhim</span>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-full p-4 bg-white text-black">
                            <FontAwesomeIcon icon={faUser} className="h-4 w-4 mr-1" />
                            Thành viên
                        </Button>
                    </div>

                    {/* Search Icon*/}
                    <Button variant="ghost" size="icon" className="hidden max-[1359px]:flex hover:bg-secondary">
                        <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;