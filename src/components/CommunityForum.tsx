import React, { useState } from 'react';
import { INITIAL_FORUM_POSTS } from '../data/p2uwmData';
import { ForumPost } from '../types';
import { MessageSquare, ThumbsUp, Send, PlusCircle, Pin, CornerDownRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CommunityForum: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>(INITIAL_FORUM_POSTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null);

  // New post form
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newBlock, setNewBlock] = useState('Blok 01');
  const [newCategory, setNewCategory] = useState<ForumPost['category']>('Budidaya & Pakan');
  const [newContent, setNewContent] = useState('');

  // Reply state
  const [replyContent, setReplyContent] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('');

  const categories = [
    'all',
    'Budidaya & Pakan',
    'Kualitas Air',
    'Saprotam & Mesin',
    'Advokasi & Regulasi',
    'Umum'
  ];

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent || !newAuthor) return;

    const newPost: ForumPost = {
      id: `POST-0${posts.length + 10}`,
      title: newTitle,
      authorName: newAuthor,
      authorBlock: newBlock,
      category: newCategory,
      content: newContent,
      createdAt: 'Baru saja',
      likes: 1,
      repliesCount: 0,
      replies: []
    };

    setPosts([newPost, ...posts]);
    setShowCreateModal(false);
    setNewTitle('');
    setNewAuthor('');
    setNewContent('');
  };

  const handleLike = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleAddReply = (postId: string) => {
    if (!replyContent || !replyAuthor) return;

    setPosts(posts.map(p => {
      if (p.id === postId) {
        const newReply = {
          id: `REP-${Date.now()}`,
          authorName: replyAuthor,
          authorRole: 'Anggota Petambak',
          content: replyContent,
          createdAt: 'Baru saja'
        };
        return {
          ...p,
          repliesCount: p.repliesCount + 1,
          replies: [...p.replies, newReply]
        };
      }
      return p;
    }));

    setReplyContent('');
  };

  const filteredPosts = posts.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1">
              Musyawarah Digital Petambak
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Forum Komunikasi & Pertukaran Pengetahuan
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              Wadah interaktif antaranggota P2UWM untuk berbagi teknik budidaya, kondisi air kanal, ketersediaan pakan, dan koordinasi gotong royong lapangan.
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-teal-500/20 transition-all flex items-center gap-2 whitespace-nowrap self-start md:self-auto hover:scale-[1.02]"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Mulai Topik Diskusi Baru</span>
          </button>
        </div>

        {/* Category Pills Glass */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-md'
                  : 'glass-card text-slate-300 hover:text-white border-white/10'
              }`}
            >
              {cat === 'all' ? 'Semua Kategori' : cat}
            </button>
          ))}
        </div>

        {/* Discussion Posts */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="glass-panel rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-teal-400/40 transition-all shadow-xl"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    {post.isPinned && (
                      <span className="text-amber-400 font-bold flex items-center gap-1">
                        <Pin className="w-3 h-3" />
                        Disematkan Pengurus
                        <span aria-hidden="true">·</span>
                      </span>
                    )}
                    <span className="font-bold text-white">{post.authorName}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-teal-300">{post.authorBlock}</span>
                    <span aria-hidden="true">·</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-300">
                      {post.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{post.createdAt}</span>
                  </div>
                  <h3 className="font-bold text-white text-base">
                    {post.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-3 whitespace-pre-line">
                {post.content}
              </p>

              {/* Action Strip */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-teal-300 font-medium transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{post.likes} Mendukung</span>
                  </button>

                  <button
                    onClick={() => setActiveThreadId(activeThreadId === post.id ? null : post.id)}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-teal-300 font-medium transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{post.repliesCount} Tanggapan</span>
                  </button>
                </div>

                <button
                  onClick={() => setActiveThreadId(activeThreadId === post.id ? null : post.id)}
                  className="text-teal-300 hover:text-white font-medium transition-colors"
                >
                  {activeThreadId === post.id ? 'Sembunyikan Balasan' : 'Lihat / Beri Balasan →'}
                </button>
              </div>

              {/* Expanded Replies Section */}
              <AnimatePresence>
                {activeThreadId === post.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-5 pt-4 border-t border-white/10 space-y-3"
                  >
                    <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-2">
                      Tanggapan Anggota ({post.replies.length}):
                    </h4>

                    {post.replies.length === 0 ? (
                      <p className="text-xs text-slate-400 italic">Belum ada tanggapan. Jadilah yang pertama memberikan masukan.</p>
                    ) : (
                      <div className="space-y-2.5">
                        {post.replies.map((reply) => (
                          <div key={reply.id} className="p-3 glass-card rounded-xl border border-white/5 text-xs space-y-1">
                            <div className="flex items-center justify-between text-slate-400">
                              <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-white">{reply.authorName}</span>
                                {reply.authorRole && (
                                  <span className="text-teal-400 font-medium">({reply.authorRole})</span>
                                )}
                              </div>
                              <span>{reply.createdAt}</span>
                            </div>
                            <p className="text-slate-300 leading-relaxed">{reply.content}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Add reply input form */}
                    <div className="pt-3 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Nama Anda (Contoh: Budi - Blok 04)"
                          value={replyAuthor}
                          onChange={(e) => setReplyAuthor(e.target.value)}
                          className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500 w-full sm:w-1/3"
                        />
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Tulis balasan atau saran pengalaman Anda..."
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          className="text-xs px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 flex-1"
                        />
                        <button
                          onClick={() => handleAddReply(post.id)}
                          className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 hover:scale-[1.02] transition-all"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Kirim</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Modal Create Post */}
        <AnimatePresence>
          {showCreateModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-panel rounded-3xl max-w-lg w-full border border-white/20 shadow-2xl overflow-hidden"
              >
                <div className="p-5 bg-slate-950/80 border-b border-white/10 flex items-center justify-between text-white">
                  <div>
                    <h3 className="font-bold text-sm">Mulai Topik Diskusi Petambak</h3>
                    <p className="text-xs text-slate-400">Bagikan saran atau pertanyaan ke forum anggota P2UWM</p>
                  </div>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleCreatePost} className="p-6 space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Judul Diskusi:</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Pengalaman Menggunakan Probiotik Cair vs Serbuk di Saluran 2"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">Nama Petambak:</label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Lengkap"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">Blok Tambak:</label>
                      <select
                        value={newBlock}
                        onChange={(e) => setNewBlock(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        {Array.from({ length: 16 }, (_, i) => {
                          const num = String(i + 1).padStart(2, '0');
                          return <option key={num} value={`Blok ${num}`}>{`Blok ${num}`}</option>;
                        })}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Kategori Topik:</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as ForumPost['category'])}
                      className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="Budidaya & Pakan">Budidaya & Pakan</option>
                      <option value="Kualitas Air">Kualitas Air & Mikroba</option>
                      <option value="Saprotam & Mesin">Saprotam & Mesin Kincir</option>
                      <option value="Advokasi & Regulasi">Advokasi & Regulasi</option>
                      <option value="Umum">Umum / Gotong Royong</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Isi Pesan:</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tuliskan pengalaman atau kendala yang ingin didiskusikan..."
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowCreateModal(false)}
                      className="px-4 py-2 glass-pill rounded-xl text-slate-300 hover:text-white"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl font-bold"
                    >
                      Publikasikan Topik
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
