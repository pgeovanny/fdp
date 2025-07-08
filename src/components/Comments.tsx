export {};

// src/components/Comments.tsx
import React, { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

interface Comment {
  id: string;
  text: string;
}

interface CommentsProps {
  questionId: string;
}

export default function Comments({ questionId }: CommentsProps) {
  const { data: comments, mutate } = useSWR<Comment[]>(() => `/api/comments?questionId=${questionId}`);
  const [text, setText] = useState('');

  const post = async () => {
    if (!text.trim()) return;
    await axios.post('/api/comments', { questionId, text });
    mutate();
    setText('');
  };

  return (
    <div className="mt-6">
      <h4 className="font-semibold text-text mb-2">Comentários</h4>
      <div className="space-y-2 mb-4">
        {comments?.map(c => (
          <p key={c.id} className="bg-surface p-2 rounded text-text">{c.text}</p>
        ))}
      </div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full p-2 rounded bg-background text-text"
        rows={3}
        placeholder="Escreva um comentário..."
      />
      <button
        onClick={post}
        className="mt-2 px-4 py-2 bg-primary text-text rounded hover:bg-opacity-90"
      >
        Enviar
      </button>
    </div>
  );
}
