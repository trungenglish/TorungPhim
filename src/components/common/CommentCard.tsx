'use client'

const CommentCard = () => {
    return ( 
        <div className="flex items-stretch gap-4 p-5 rounded-lg overflow-hidden">
           {/* Post */}
           <div className="absolute top-0 right-0 bottom-0 left-0 opacity-5 ">
            <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop" alt="background" className="w-full h-full object-cover blur-xs scale-110"/>
           </div>

           {/* Content */}
           <div>

           </div>

           {/* Thumbnail */}
           <div>

           </div>
        </div>
    )
}

export default CommentCard;