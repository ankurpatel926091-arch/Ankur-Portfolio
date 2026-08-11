import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaUsers,
  FaFolder,
  FaExternalLinkAlt
} from "react-icons/fa";

const GITHUB_USERNAME = "ankurpatel926091-arch";

const GithubStats = () => {
  const [userStats, setUserStats] = useState(null);
  const [topRepos, setTopRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        // Fetch User Info
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const userData = await userRes.json();
        setUserStats(userData);

        // Fetch Repos
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setTopRepos(reposData);
        }
      } catch (err) {
        console.error("GitHub API fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section
      id="github"
      className="relative py-20 bg-[#08111F] text-white overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold flex items-center justify-center gap-2">
            <FaGithub className="text-xl" /> Live Open Source
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            GitHub <span className="text-cyan-400">Activity &amp; Stats</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            Real-time open source statistics and public repositories fetched live from GitHub API.
          </p>
        </motion.div>

        {/* Stats Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-28 rounded-2xl bg-cyan-950/20 border border-cyan-500/10 animate-pulse"
              />
            ))}
          </div>
        ) : error || !userStats ? (
          <div className="text-center py-10 bg-cyan-950/20 rounded-2xl border border-cyan-500/20">
            <p className="text-gray-400 mb-4">Could not load live GitHub API stats at the moment.</p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              <FaGithub /> Visit GitHub Profile
            </a>
          </div>
        ) : (
          <>
            {/* Live Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-[#0F172A]/70 border border-cyan-500/20 backdrop-blur-xl shadow-lg hover:border-cyan-400/40 transition group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm font-medium">Public Repos</span>
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition">
                    <FaFolder className="text-lg" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white">{userStats.public_repos}</h3>
                <span className="text-xs text-cyan-400 mt-1 block">Active Code Repos</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-[#0F172A]/70 border border-cyan-500/20 backdrop-blur-xl shadow-lg hover:border-cyan-400/40 transition group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm font-medium">Followers</span>
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition">
                    <FaUsers className="text-lg" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white">{userStats.followers}</h3>
                <span className="text-xs text-cyan-400 mt-1 block">GitHub Community</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-[#0F172A]/70 border border-cyan-500/20 backdrop-blur-xl shadow-lg hover:border-cyan-400/40 transition group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm font-medium">Public Gists</span>
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition">
                    <FaCodeBranch className="text-lg" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white">{userStats.public_gists || 0}</h3>
                <span className="text-xs text-cyan-400 mt-1 block">Code Snippets</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-[#0F172A]/70 border border-cyan-500/20 backdrop-blur-xl shadow-lg hover:border-cyan-400/40 transition group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm font-medium">Account Created</span>
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition">
                    <FaGithub className="text-lg" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {new Date(userStats.created_at).getFullYear()}
                </h3>
                <span className="text-xs text-cyan-400 mt-1 block">Joined GitHub</span>
              </motion.div>
            </div>

            {/* Top Repositories Grid */}
            {topRepos.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-200 mb-6 flex items-center gap-2">
                  <FaStar className="text-yellow-400" /> Recent Public Repositories
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topRepos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-6 rounded-2xl bg-[#0F172A]/60 border border-cyan-500/15 hover:border-cyan-400/50 hover:bg-[#0F172A]/90 transition group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white group-hover:text-cyan-400 transition flex items-center gap-2">
                            <FaFolder className="text-cyan-400 text-sm" />
                            <span className="truncate max-w-[180px]">{repo.name}</span>
                          </h4>
                          <FaExternalLinkAlt className="text-xs text-gray-500 group-hover:text-cyan-400 transition" />
                        </div>

                        <p className="text-xs text-gray-400 line-clamp-2 mb-4">
                          {repo.description || "No description provided."}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-cyan-500/10">
                        {repo.language && (
                          <span className="flex items-center gap-1.5 font-medium text-cyan-300">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            {repo.language}
                          </span>
                        )}

                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" /> {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCodeBranch className="text-gray-400" /> {repo.forks_count}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* CTA to GitHub */}
        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-cyan-950/60 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-semibold transition hover:scale-105"
          >
            <FaGithub className="text-xl" />
            <span>Explore Full GitHub Profile</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
