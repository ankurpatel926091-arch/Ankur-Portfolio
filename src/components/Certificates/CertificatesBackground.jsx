const CertificatesBackground = () => {
  return (
    <>
      {/* Left Glow */}
      <div className="absolute -left-40 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Right Glow */}
      <div className="absolute -right-40 bottom-20 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[160px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
};

export default CertificatesBackground;