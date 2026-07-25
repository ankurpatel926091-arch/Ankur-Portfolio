const FooterBackground = () => {
  return (
    <>
      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.06]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Top Left Glow */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Top Right Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[130px]" />

      {/* Bottom Center Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-cyan-400/10 blur-[150px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[120px]" />

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </>
  );
};

export default FooterBackground;