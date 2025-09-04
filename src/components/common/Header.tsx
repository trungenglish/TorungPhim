import { Menu, Search, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-nav-background/95 backdrop-blur-md boder-border">
            <div className="container flex items-center justify-between h-16 px-4 md:px-8">
                {/* Logo */}
                <div className="flex items-center gap-8">
                    <a href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-primary rounded-3xl flex items-center justify-center group-hover:bg-primary-glow transition-colors">
                            <span className="text-primary-foreground font-bold text-xl">T</span>
                        </div>
                        <span className="text-xl font-bold text-foreground hidden md:block">Torung</span>
                    </a>
                    {/* Nav */}
                    <nav className="hidden lg:flex items-center gap-6">
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Chủ đề</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Thể loại</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Phim lẻ</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Phim bộ</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Xem chung</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Quốc gia</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Diễn viên</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Lịch chiếu</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Rổ bóng</a>
                    </nav>
                </div>

                {/* Right section */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="relative flex items-center">
                    <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                    <Input
                    type="search"
                    placeholder="Tìm kiếm phim..."
                    className="w-48 md:w-64 pl-10 bg-input border-border"
                    />
                    </div>
                </div>

                {/* User */}
                <Button variant="ghost" size="icon" className="hover:bg-secondary">
                <User className="h-5 w-5" />
                </Button>

                {/* Mobile menu */}
                <Button variant="ghost" size="icon" className="lg:hidden hover:bg-secondary">
                    <Menu className="h-5 w-5" />
                </Button>
            </div>
        </header>
    )
}

export default Header;