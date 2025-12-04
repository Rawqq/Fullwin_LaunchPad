export const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient background - uniform dark navy */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #002254CC 0%, #004BBA 100%)"
        }}
      />
      
      {/* Ring outlines (not filled, just strokes) */}
      {/* Top-left ring */}
      <div 
        className="absolute rounded-full border-[2px] border-[#2a4a7a]/40"
        style={{
          width: "280px",
          height: "280px",
          top: "-80px",
          left: "-80px",
        }}
      />
      
      {/* Top-right ring */}
      <div 
        className="absolute rounded-full border-[2px] border-[#3a5a8a]/30"
        style={{
          width: "200px",
          height: "200px",
          top: "10%",
          right: "-60px",
        }}
      />
      
      {/* Middle-left ring */}
      <div 
        className="absolute rounded-full border-[2px] border-[#2a4a7a]/25"
        style={{
          width: "160px",
          height: "160px",
          top: "40%",
          left: "-40px",
        }}
      />
      
      {/* Bottom-right large ring */}
      <div 
        className="absolute rounded-full border-[2px] border-[#3a5a8a]/35"
        style={{
          width: "320px",
          height: "320px",
          bottom: "-100px",
          right: "-80px",
        }}
      />
      
      {/* Bottom-left ring */}
      <div 
        className="absolute rounded-full border-[2px] border-[#2a4a7a]/30"
        style={{
          width: "240px",
          height: "240px",
          bottom: "5%",
          left: "-70px",
        }}
      />
      
      {/* Small accent ring */}
      <div 
        className="absolute rounded-full border-[1px] border-[#4a6a9a]/20"
        style={{
          width: "100px",
          height: "100px",
          top: "25%",
          right: "10%",
        }}
      />
    </div>
  );
};
