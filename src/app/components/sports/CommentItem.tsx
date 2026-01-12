import React, { useState } from 'react';
import { Comment } from '../../types/sports';
import { ThumbsUp, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface CommentItemProps {
  comment: Comment;
}

export function CommentItem({ comment }: CommentItemProps) {
  const [liked, setLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-2xl flex-shrink-0">
          {comment.userAvatar}
        </div>

        {/* Comment Content */}
        <div className="flex-1 min-w-0">
          {/* User and Timestamp */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-white text-sm">{comment.userName}</span>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-gray-500 text-xs">{comment.timestamp}</span>
          </div>

          {/* Comment Text */}
          <p className="text-gray-300 text-sm mb-2">{comment.content}</p>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1 text-xs ${
                liked ? 'text-blue-500' : 'text-gray-400'
              } hover:text-blue-500 transition-colors`}
            >
              <ThumbsUp className={`h-4 w-4 ${liked ? 'fill-blue-500' : ''}`} />
              <span>{liked ? comment.likes + 1 : comment.likes}</span>
            </button>

            {comment.replies && comment.replies.length > 0 && (
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="flex items-center gap-1 text-gray-400 hover:text-blue-500 text-xs transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Replies */}
      {showReplies && comment.replies && (
        <div className="ml-12 space-y-3 pl-4 border-l-2 border-gray-700">
          {comment.replies.map(reply => (
            <CommentItem key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
}
