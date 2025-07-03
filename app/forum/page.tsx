'use client';

import { useState, useEffect } from 'react';

type Post = {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: { text: string; likes: number }[];
  file?: {
    name: string;
    type: string;
    url: string;
  };
};

type EditingComment = {
  postId: number | null;
  index: number | null;
};

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [fileData, setFileData] = useState<Post['file'] | null>(null);
  const [editingComment, setEditingComment] = useState<EditingComment>({ postId: null, index: null });
  const [newComments, setNewComments] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFileData({
        name: file.name,
        type: file.type,
        url: reader.result as string,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const addPost = () => {
    if (!title || !content) return;
    const newPost: Post = {
      id: Date.now(),
      title,
      content,
      likes: 0,
      comments: [],
      file: fileData || undefined,
    };
    setPosts([newPost, ...posts]);
    setTitle('');
    setContent('');
    setFileData(null);
  };

  const likePost = (id: number) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const addComment = (id: number, commentText: string) => {
    if (!commentText.trim()) return;
    setPosts(posts.map(p =>
      p.id === id
        ? { ...p, comments: [...p.comments, { text: commentText, likes: 0 }] }
        : p
    ));
    setNewComments(prev => ({ ...prev, [id]: '' }));
  };

  const likeComment = (postId: number, commentIndex: number) => {
    setPosts(posts.map(p =>
      p.id === postId
        ? {
            ...p,
            comments: p.comments.map((c, i) =>
              i === commentIndex ? { ...c, likes: c.likes + 1 } : c
            ),
          }
        : p
    ));
  };

  const deleteComment = (postId: number, commentIndex: number) => {
    setPosts(posts.map(p =>
      p.id === postId
        ? {
            ...p,
            comments: p.comments.filter((_, i) => i !== commentIndex),
          }
        : p
    ));
  };

  const startEditComment = (postId: number, index: number) => {
    setEditingComment({ postId, index });
  };

  const saveEditedComment = (postId: number, index: number, newText: string) => {
    setPosts(posts.map(p =>
      p.id === postId
        ? {
            ...p,
            comments: p.comments.map((c, i) =>
              i === index ? { ...c, text: newText } : c
            ),
          }
        : p
    ));
    setEditingComment({ postId: null, index: null });
  };

  const downloadFile = (file: Post['file']) => {
    const a = document.createElement('a');
    a.href = file?.url || '';
    a.download = file?.name || 'file';
    a.click();
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white text-black dark:bg-[#0E0E1B] dark:text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#457B9D] to-[#A569BD]">
        Forum Komunitas Inkura
      </h1>

      <div className="bg-gray-100 dark:bg-[#1A1A2E] border p-4 rounded-xl shadow mb-6">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Judul"
          className="w-full p-2 mb-2 rounded-md border bg-white dark:bg-[#0E0E1B] text-black dark:text-white"
        />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Isi"
          className="w-full p-2 mb-2 rounded-md border bg-white dark:bg-[#0E0E1B] text-black dark:text-white"
        />
        <input type="file" onChange={handleFileChange} className="mb-2" />

        {fileData && (
          <div className="mb-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">File Terlampir: <strong>{fileData.name}</strong></p>
            {fileData.type.startsWith('image') ? (
              <img src={fileData.url} alt="preview" width={192} height={192} className="rounded shadow-md" />
            ) : (
              <button onClick={() => downloadFile(fileData)} className="text-blue-600 dark:text-blue-400 underline text-sm">
                Download file
              </button>
            )}
          </div>
        )}

        <button onClick={addPost} className="bg-gradient-to-r from-[#6C63FF] to-[#9D4EDD] text-white px-4 py-2 rounded-md">
          Posting
        </button>
      </div>

      {posts.map(post => (
        <div key={post.id} className="bg-gray-100 dark:bg-[#1A1A2E] border p-4 rounded-xl shadow mb-4">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="mb-2">{post.content}</p>
          {post.file && (
            <div className="mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">File terlampir: <strong>{post.file.name}</strong></p>
              {post.file.type.startsWith('image') ? (
                <img src={post.file.url} alt="preview" width={192} height={192} className="rounded shadow-md" />
              ) : (
                <button onClick={() => downloadFile(post.file)} className="text-blue-600 dark:text-blue-400 underline text-sm">
                  Download file
                </button>
              )}
            </div>
          )}
          <button onClick={() => likePost(post.id)} className="text-sm text-pink-600 dark:text-pink-400 mb-2">❤️ {post.likes}</button>

          <div className="mt-2">
            <h3 className="text-sm font-medium text-[#457B9D] dark:text-[#A8DADC]">Komentar:</h3>
            <ul className="list-disc pl-5 text-sm">
              {post.comments.map((c, i) => (
                <li key={i} className="flex justify-between items-center py-1">
                  {editingComment.postId === post.id && editingComment.index === i ? (
                    <input
                      className="border p-1 text-sm w-full mr-2 bg-white dark:bg-[#0E0E1B] text-black dark:text-white"
                      defaultValue={c.text}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          saveEditedComment(post.id, i, (e.target as HTMLInputElement).value);
                        }
                      }}
                    />
                  ) : (
                    <span>{c.text}</span>
                  )}
                  <div className="flex space-x-2 ml-2">
                    <button onClick={() => likeComment(post.id, i)} className="text-xs text-pink-600 dark:text-pink-400">❤️ {c.likes}</button>
                    <button onClick={() => startEditComment(post.id, i)} className="text-xs text-blue-600 dark:text-blue-400">✏️</button>
                    <button onClick={() => deleteComment(post.id, i)} className="text-xs text-gray-500 dark:text-gray-400">🗑️</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Tambah komentar"
                className="border rounded p-1 text-sm w-full bg-white dark:bg-[#0E0E1B] text-black dark:text-white"
                value={newComments[post.id] || ''}
                onChange={(e) => setNewComments({ ...newComments, [post.id]: e.target.value })}
              />
              <button onClick={() => addComment(post.id, newComments[post.id] || '')} className="text-sm px-2 py-1 bg-gradient-to-r from-[#6C63FF] to-[#9D4EDD] text-white rounded">
                Kirim
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
