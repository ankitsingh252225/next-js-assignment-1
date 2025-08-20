
export default function GradientButton({ 
  text = "Click Me", 
  onClick, 
  className = "", 
  textSize = "text-base" 
}) {
  return (
    <button
      onClick={onClick}
      className={`w-[190px] h-[49px] rounded-full px-[36px] py-[12px] flex items-center justify-center gap-[10px] 
        bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-white font-semibold shadow-md
        ${textSize} ${className}`}
    >
      {text}
    </button>
  );
}
